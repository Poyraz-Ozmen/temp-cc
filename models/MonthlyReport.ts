import { AnnualReport } from "./AnnualReport";
import { WeeklyReport } from "./WeeklyReport";

export class MonthlyReport {
    id: number;
    monthStart: Date;
    monthEnd: Date;
    completed: boolean;
    comments?: string; // Opsiyonel
    annualReportId: number; // Yıllık rapor kimliği
    annualReport: AnnualReport; // Yıllık rapor ilişkisi
    weeklyReports: WeeklyReport[]; // Aylık rapora bağlı haftalık raporlar
  
    constructor(
      id: number,
      monthStart: Date,
      monthEnd: Date,
      completed: boolean,
      comments: string | undefined,
      annualReportId: number,
      annualReport: AnnualReport,
      weeklyReports: WeeklyReport[]
    ) {
      this.id = id;
      this.monthStart = monthStart;
      this.monthEnd = monthEnd;
      this.completed = completed;
      this.comments = comments;
      this.annualReportId = annualReportId;
      this.annualReport = annualReport;
      this.weeklyReports = weeklyReports;
    }
  }
  