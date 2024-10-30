import { PrismaClient, ProjectDivision, Team, WorkUnit } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
      const workUnit: WorkUnit[] = await prisma.workUnit.findMany();
  
      return NextResponse.json(workUnit, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Error on fetching teams' }, { status: 500 });
    }
  }

  
  export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log("Gelen veri:", data);  // Hata ayıklama için gelen veriyi yazdırın

        const newWorkUnit = await prisma.workUnit.create({
            data: {
                days: data.days,
                description: data.description,
                status: data.status,
                projectDivisionId: data.projectDivisionId,
                projectId: data.projectId,
                weeklyReportid: data.weeklyReportid,
            },
        });

        return NextResponse.json(newWorkUnit, { status: 201 });
    } catch (error) {
        console.error("API hata:", error);  // API tarafında hatayı daha net görmemizi sağlar
        return NextResponse.json({ error: 'Error on creating work unit' }, { status: 500 });
    }
}