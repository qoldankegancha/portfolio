export interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  duration: string;
  description?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  telegram: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  modelPath?: string; // Path to .glb file in public folder
  placeholderColor?: string; // Fallback color if no model
}

export interface EducationItem {
  institution: string;
  status: string;
  icon?: 'school' | 'university' | 'certificate';
}

export interface AchievementItem {
  title: string;
  medal?: 'gold' | 'silver' | 'bronze' | 'check';
  year?: string;
}
