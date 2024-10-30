"use client";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; //

type Team = {
  id: number;
  name: string | null;
};

const TeamsDropdown = ({ teams }: { teams: Team[] }) => {
  const handleChange = async (teamId: string) => {
    if (!teamId) return;
    try {
      const response = await fetch(`/api/teams/team?id=${teamId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch team");
      }

      const team = await response.json();
      localStorage.setItem("team", JSON.stringify(team.name));
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error fetching team:", error);
    }
  };

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      <Select onValueChange={(value) => handleChange(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a Team" />
        </SelectTrigger>
        <SelectContent>
          {teams.map((team) => (
            <SelectItem key={team.id} value={String(team.id)}>
              {team.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TeamsDropdown;
