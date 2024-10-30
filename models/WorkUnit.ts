import { WeeklyReport } from "./WeeklyReport";

export class WorkUnit {
    id: number;
    days: number;
    description?: string; // Opsiyonel
    status: string;
    projectDivisionId: number; // İlgili iş bölümü kimliği
    projectId: number; // İlgili proje kimliği
    weeklyReportId: number; // Haftalık rapor kimliği
    weeklyReport: WeeklyReport; // Haftalık rapor ilişkisi
  
    constructor(
      id: number,
      days: number,
      description: string | undefined,
      status: string,
      projectDivisionId: number,
      projectId: number,
      weeklyReportId: number,
      weeklyReport: WeeklyReport
    ) {
      this.id = id;
      this.days = days;
      this.description = description;
      this.status = status;
      this.projectDivisionId = projectDivisionId;
      this.projectId = projectId;
      this.weeklyReportId = weeklyReportId;
      this.weeklyReport = weeklyReport;
    }
  }
  