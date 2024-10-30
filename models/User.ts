import { AnnualReport } from "./AnnualReport";
import { Team } from "./Team";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    teams: Team[]; // Kullanıcının dahil olduğu takımlar
    annualReports: AnnualReport[]; // Kullanıcıya ait yıllık raporlar
  
    constructor(
      id: number,
      username: string,
      email: string,
      password: string,
      isActive: boolean,
      createdAt: Date,
      updatedAt: Date,
      teams: Team[],
      annualReports: AnnualReport[]
    ) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.isActive = isActive;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.teams = teams;
      this.annualReports = annualReports;
    }
  }