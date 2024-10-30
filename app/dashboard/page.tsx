"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export default function Page() {
  const [team, setTeam] = useState<string>("");

  useEffect(() => {
    const storedTeam = localStorage.getItem("team");
    if (storedTeam) {
      setTeam(JSON.parse(storedTeam)); // "" exclude
    }
  }, []);

  return (
<div className="min-h-screen w-full flex justify-center">
  <h1 className="text-xl" >{team} Efor Sheet</h1>  
</div>

  );
}
