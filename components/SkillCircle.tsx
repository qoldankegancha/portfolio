import React from 'react';
import { motion } from 'framer-motion';

interface SkillCircleProps {
  percentage: number;
  label: string;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ percentage, label }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Foreground Circle */}
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke="black"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold font-display">{percentage}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-semibold uppercase tracking-wider">{label}</span>
    </div>
  );
};

export default SkillCircle;
