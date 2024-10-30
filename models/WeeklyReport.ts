import { MonthlyReport } from "./MonthlyReport";
import { WorkUnit } from "./WorkUnit";

export class WeeklyReport {
    id: number;
    weekStart: Date;
    weekEnd: Date;
    completed: boolean;
    notes?: string; // Opsiyonel
    monthlyReportId: number; // Aylık rapor kimliği
    monthlyReport: MonthlyReport; // Aylık rapor ilişkisi
    workUnits: WorkUnit[]; // Haftalık rapora bağlı iş birimleri
  
    constructor(
      id: number,
      weekStart: Date,
      weekEnd: Date,
      completed: boolean,
      notes: string | undefined,
      monthlyReportId: number,
      monthlyReport: MonthlyReport,
      workUnits: WorkUnit[]
    ) {
      this.id = id;
      this.weekStart = weekStart;
      this.weekEnd = weekEnd;
      this.completed = completed;
      this.notes = notes;
      this.monthlyReportId = monthlyReportId;
      this.monthlyReport = monthlyReport;
      this.workUnits = workUnits;
    }
  }