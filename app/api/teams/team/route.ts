import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request:NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id")
  
    if (!id) {
      return NextResponse.json({ error: "Team ID is required" }, { status: 400 });
    }
  
    try {
      const team = await prisma.team.findUnique({
        where: { id: Number(id) },
      });
  
      if (!team) {
        return NextResponse.json({ error: "Team not found" }, { status: 404 });
      }
  
      return NextResponse.json(team, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch team" }, { status: 500 });
    }
  }