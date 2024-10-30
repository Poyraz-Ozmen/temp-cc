import { Team } from "./Team";
import { WorkUnit } from "./WorkUnit";

export class Project {
    id: number;
    name: string;
    description?: string; // Opsiyonel
    startDate?: Date; // Opsiyonel
    endDate?: Date; // Opsiyonel
    status: string;
    teams: Team[]; // Projeye ait takımlar
    workUnits: WorkUnit[]; // Proje içindeki iş birimleri
  
    constructor(
      id: number,
      name: string,
      description: string | undefined,
      startDate: Date | undefined,
      endDate: Date | undefined,
      status: string,
      teams: Team[],
      workUnits: WorkUnit[]
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
      this.status = status;
      this.teams = teams;
      this.workUnits = workUnits;
    }
  }
  