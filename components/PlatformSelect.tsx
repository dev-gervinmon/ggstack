import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PlatformSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const platforms = [
  "Multiplatform",
  "PC",
  "Playstation",
  "Xbox",
  "Nintendo Switch",
  "Mobile",
  "VR",
];

const PlatformSelect: React.FC<PlatformSelectProps> = ({ value, onChange }) => {
  return (
    <Select onValueChange={onChange} defaultValue={value || ""}>
      <SelectTrigger className="h-14 w-full text-light-100">
        <SelectValue placeholder="Select a platform" />
      </SelectTrigger>
      <SelectContent className="bg-dark-300 text-light-100">
        {platforms.map((platform) => (
          <SelectItem
            key={platform}
            value={platform}
            className="hover:bg-dark-300 hover:text-white"
          >
            {platform}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PlatformSelect;
