"use client";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'; // Adjust the import path as necessary
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; // Adjust the import path as necessary
import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';


  
 export const YearMonthSelect = () => {
  
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = new Date().toLocaleString('tr-TR', { month: 'long' });

    const months = [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];
  
    return (
      <div className="flex space-x-4 mb-4"> {/* Bileşenler arasında boşluk */}
        <Select defaultValue={currentYear}>
          <SelectTrigger className="w-[180px] h-[40px]">
            <SelectValue placeholder="Yıl Seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
  
        <Select defaultValue={currentMonth}>
          <SelectTrigger className="w-[180px] h-[40px]">
            <SelectValue placeholder="Ay Seçin" />
          </SelectTrigger>
          <SelectContent>
            {months.map((month, index) => (
              <SelectItem key={index} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };
  