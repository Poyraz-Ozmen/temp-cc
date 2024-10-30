import { PrismaClient, Team } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
      const teams: Team[] = await prisma.team.findMany();
  
      return NextResponse.json(teams, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Error on fetching teams' }, { status: 500 });
    }
  }