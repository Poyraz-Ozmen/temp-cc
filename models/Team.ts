import { Project } from "./Project";

export class Team {
    id: number;
    name: string;
    teamLeadId: number;
    employeeCount: number;
    order: number;
    projectId?: number; // Opsiyonel
    project?: Project; // İlgili proje ilişkisi
  
    constructor(
      id: number,
      name: string,
      teamLeadId: number,
      employeeCount: number,
      order: number,
      projectId: number | undefined,
      project: Project | undefined
    ) {
      this.id = id;
      this.name = name;
      this.teamLeadId = teamLeadId;
      this.employeeCount = employeeCount;
      this.order = order;
      this.projectId = projectId;
      this.project = project;
    }
  }
  