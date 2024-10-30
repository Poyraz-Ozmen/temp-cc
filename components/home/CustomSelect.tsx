import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'; // Adjust the import path as necessary
import React from 'react';

interface CustomSelectProps {
  options: { label: string; value: string | number }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selectedValue, setSelectedValue, placeholder = "Select an option" }) => {
  return (
    <Select onValueChange={(value) => setSelectedValue(value)} value={selectedValue}>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent  className="max-h-[200px] overflow-y-auto">
        {options.map((option) => (
          <SelectItem key={option.value} value={String(option.value)}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
