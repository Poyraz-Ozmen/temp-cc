import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { PrismaClient, Project, ProjectDivision } from '@prisma/client';
import { YearMonthSelect } from '@/components/home/YearMonthSelect';
import WeeklyAccordion from '@/components/home/WeeklyAccordion';

// Create a singleton instance of PrismaClient
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default async function Home() {
  const project = await prisma.project.findMany({
    include: {
      Team: true,
      WorkUnit: true,
    },
  });

  const projectDivisions = await prisma.projectDivision.findMany({
    include: {
      WorkUnit: true,
    },
  });

  const createProjectDivision = async (input: {
    name: string;
    description?: string | null;
    order: number;
  }) => {
    try {
      const newDivision = await prisma.projectDivision.create({
        data: {
          name: input.name,
          description: input.description,
          order: input.order,
        },
      });
      console.log('Yeni iş bölümü oluşturuldu:', newDivision);
      return newDivision;
    } catch (error) {
      console.error('İş bölümü oluşturulurken hata oluştu:', error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col items-start p-4 h-screen">
      <YearMonthSelect />
      <WeeklyAccordion proje={project} bolumler={projectDivisions} />
    </div>
  );
}