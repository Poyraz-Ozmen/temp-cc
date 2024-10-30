import { WorkUnit } from "./WorkUnit";

export class ProjectDivision {
    id: number;
    name: string;
    description?: string; // Opsiyonel
    order: number;
    workUnits: WorkUnit[]; // İş bölümü ile ilişkili iş birimleri
  
    constructor(
      id: number,
      name: string,
      description: string | undefined,
      order: number,
      workUnits: WorkUnit[]
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.order = order;
      this.workUnits = workUnits;
    }
  }