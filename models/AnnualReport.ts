import { MonthlyReport } from "./MonthlyReport";
import { User } from "./User";

export class AnnualReport {
    id: number;
    yearStart: Date;
    yearEnd: Date;
    status: string;
    userId: number; // Kullanıcı kimliği
    user: User; // İlgili kullanıcı
    monthlyReports: MonthlyReport[]; // Yıllık rapora bağlı aylık raporlar
  
    constructor(
      id: number,
      yearStart: Date,
      yearEnd: Date,
      status: string,
      userId: number,
      user: User,
      monthlyReports: MonthlyReport[]
    ) {
      this.id = id;
      this.yearStart = yearStart;
      this.yearEnd = yearEnd;
      this.status = status;
      this.userId = userId;
      this.user = user;
      this.monthlyReports = monthlyReports;
    }
  }