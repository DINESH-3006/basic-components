import React from "react";

export type ProficiencyLevel =
  | "Native or Bilingual Proficiency"
  | "Full Professional Proficiency"
  | "Limited Working Proficiency";

const proficiencyLevels: Record<ProficiencyLevel, number> = {
  "Native or Bilingual Proficiency": 100,
  "Full Professional Proficiency": 85,
  "Limited Working Proficiency": 55,
};

interface ProgressBarProps {
  proficiency: ProficiencyLevel;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ proficiency }) => {
  const percentage = proficiencyLevels[proficiency];

  return (
    <div className="mr-2 w-4/5 mt-[0.45em] h-2 border-gray-900 border-[0.015em] rounded-full">
      <div
        className="bg-gray-600 h-full rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
