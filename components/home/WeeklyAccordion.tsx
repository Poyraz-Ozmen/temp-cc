"use client"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useEffect, useState } from 'react';
import CustomSelect from './CustomSelect';
import { Project, ProjectDivision, WorkUnit } from '@prisma/client';


interface WeeklyAccordionProps {
  proje: Project[];
  bolumler: ProjectDivision[];
  // createProjectDivision: (input: ProjectDivision) => Promise<ProjectDivision>; // Yeni metod tipi
}
const WeeklyAccordion: React.FC<WeeklyAccordionProps> = ({ proje, bolumler }) => {


  useEffect(() => {

  }, []);


  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const today = new Date();
  const todayDayOfWeek = today.getDay(); // Haftanın günü (0: Pazar, 1: Pazartesi, ... , 6: Cumartesi)

  const weeks = getWeeksOfMonth(currentYear, currentMonth);

  const projectOptions = proje.map((project) => ({
    label: project.name,
    value: project.id,
  }));

  const divisionOptions = bolumler.map((division) => ({
    label: division.name,
    value: division.id,
  }));

  const options = Array.from({ length: 11 }, (_, i) => {
    const value = (i * 0.5).toFixed(1); // 0, 0.5, 1.0, ... , 5.0
    return { label: value, value };
  });

  const save = async (weekIndex: number) => {
    const weekData = rowsByWeek[weekIndex]; // Seçili haftaya ait verileri al

    // Burada haftaya ait verileri kaydetmek için gerekli işlemleri yapabilirsiniz.
    try {
      for (const workUnit of weekData) {
        await createWorkUnit({
          days: Number(workUnit.day),  // İş birimi için gereken gün sayısı
          projectDivisionId: Number(workUnit.division), // İlgili iş bölümü kimliği
          projectId: Number(workUnit.project), // İlgili proje kimliği
          weeklyReportid: 1, // İlgili haftalık rapor kimliği
          description: "",
          status: "",
          id: 0
        });
      }

      console.log("weekData: ", weekData)
      console.log(`Hafta ${weekIndex + 1} verileri kaydedildi.`);
    } catch (error) {
      console.error('Veri kaydetme hatası:', error);
    }
  };

  const createWorkUnit = async (workUnit: WorkUnit) => {
    const response = await fetch('/api/workUnit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workUnit), // workUnit nesnesini JSON'a çevir
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Başarıyla oluşturuldu:', data);
    } else {
      console.error('Hata:', data.error);
    }
  };


  const defaultRow = { id: Date.now(), day: "", project: "", division: "" };
  const initialRowsByWeek = weeks.reduce((acc, _, index) => {
    acc[index] = [defaultRow]; // Her hafta için varsayılan bir satır ekle
    return acc;
  }, {} as { [key: number]: { id: number; day: string; project: string; division: string }[] });

  const [rowsByWeek, setRowsByWeek] = useState(initialRowsByWeek);
  // Yeni satır eklemek için fonksiyon
  const addRow = (weekIndex: number) => {
    const newRow = { id: Date.now(), day: "", project: "", division: "" };
    const updatedRows = [...(rowsByWeek[weekIndex] || []), newRow];
    setRowsByWeek({ ...rowsByWeek, [weekIndex]: updatedRows });
  };


  // Satır silmek için fonksiyon
  const removeRow = (weekIndex: number, id: number) => {
    const updatedRows = (rowsByWeek[weekIndex] || []).filter((row) => row.id !== id);
    setRowsByWeek({ ...rowsByWeek, [weekIndex]: updatedRows });
  };

  // Değerleri güncellemek için fonksiyon
  const updateRow = (weekIndex: number, id: number, field: string, value: string) => {
    const updatedRows = (rowsByWeek[weekIndex] || []).map((row) => (row.id === id ? { ...row, [field]: value } : row));
    setRowsByWeek({ ...rowsByWeek, [weekIndex]: updatedRows });
  };


  const currentWeekIndex = weeks.findIndex((week, index) => {
    const weekStart = new Date(week.start);
    const weekEnd = new Date(week.end);

    // Eğer bugün haftasonu ise (Cumartesi veya Pazar), bir önceki haftayı kontrol et
    if (todayDayOfWeek === 0 || todayDayOfWeek === 6) {
      // Bugün haftasonu ise ve mevcut haftanın başlangıç tarihi ve bitiş tarihini kontrol et
      const previousWeekEnd = index > 0 ? new Date(weeks[index - 1].end) : null;
      if (previousWeekEnd) {
        previousWeekEnd.setDate(previousWeekEnd.getDate() + 2); // İki gün ekle
      }
      return previousWeekEnd && today <= previousWeekEnd;
    }

    // Normal hafta içi durumu
    return today >= weekStart && today <= weekEnd;
  });


  const [expandedIndex, setExpandedIndex] = useState(currentWeekIndex !== -1 ? currentWeekIndex + 1 : 0);

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="h-full" value={`item-${expandedIndex + 1}`} onValueChange={(value) => setExpandedIndex(parseInt(value.split('-')[1]) - 1)}>
        {weeks.map((week, weekIndex) => (
          <AccordionItem key={weekIndex} value={`item-${weekIndex + 1}`}>
            <AccordionTrigger>{`Hafta ${weekIndex + 1} (${week.start} - ${week.end})`}</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead>Gün</TableHead>
                    <TableHead>Proje</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(rowsByWeek[weekIndex] || []).map((row, i) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">{i + 1}</TableCell>
                      <TableCell>
                        <CustomSelect
                          options={options}
                          selectedValue={row.day}
                          setSelectedValue={(value) => updateRow(weekIndex, row.id, "day", value)}
                          placeholder="Gün"
                        />
                      </TableCell>
                      <TableCell>
                        <CustomSelect
                          options={projectOptions}
                          selectedValue={row.project}
                          setSelectedValue={(value) => updateRow(weekIndex, row.id, "project", value)}
                          placeholder="Proje"
                        />
                      </TableCell>
                      <TableCell>
                        <CustomSelect
                          options={divisionOptions}
                          selectedValue={row.division}
                          setSelectedValue={(value) => updateRow(weekIndex, row.id, "division", value)}
                          placeholder="İş bölümü"
                        />
                      </TableCell>
                      <TableCell>
                        <button onClick={() => removeRow(weekIndex, row.id)} className="text-red-500 hover:underline">
                          Sil
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end">
                <button onClick={() => save(weekIndex)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-4">
                  Kaydet
                </button>
                <button onClick={() => addRow(weekIndex)} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Yeni Bölüm
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WeeklyAccordion;

const getWeeksOfMonth = (year: any, month: any) => {
  const weeks = [];
  let date = new Date(year, month, 1);

  // Move to the first Monday of the month
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1);
  }

  // Calculate weeks from Monday to Friday
  while (date.getMonth() === month || (date.getMonth() === month - 1 && date.getDay() !== 1)) {
    const weekStart = new Date(date);
    const weekEnd = new Date(date);
    weekEnd.setDate(weekStart.getDate() + 4); // Move from Monday to Friday

    weeks.push({
      start: weekStart.toLocaleDateString('tr-TR'),
      end: weekEnd.toLocaleDateString('tr-TR')
    });

    // Move to the next week's Monday
    date.setDate(date.getDate() + 7);
  }

  return weeks;
};
