import { PrismaClient, Team } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllTeams(){
    return await prisma.team.findMany({
        orderBy: { name: "asc" },
      });
}
