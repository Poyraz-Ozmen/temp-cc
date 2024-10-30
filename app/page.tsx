import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; // Adjust the import path as necessary
import { PrismaClient, ProjectDivision } from '@prisma/client';
  import { YearMonthSelect } from '@/components/home/YearMonthSelect';
import WeeklyAccordion from '@/components/home/WeeklyAccordion';

export default async function Home() {
  const prisma = new PrismaClient();
  const project = await prisma.project.findMany();
  const ProjectDivision = await prisma.projectDivision.findMany();

  const createProjectDivision = async (input: ProjectDivision) => {
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
      throw error; // Hatanın yönetimi için dışarıya fırlat
    }
  };
  

  return (
    <div className="flex flex-col items-start p-4 h-screen"> {/* Full screen height */}
      <YearMonthSelect />
      <WeeklyAccordion proje={project} bolumler={ProjectDivision} />
    </div>
  );
}
