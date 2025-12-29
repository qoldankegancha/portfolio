import { ContactInfo, ExperienceItem, Project, EducationItem, AchievementItem } from './types';

// =============================================================================
// 🚨 HERO 3D MODEL SETTINGS
// =============================================================================
// Put your .glb file in the 'public' folder and add the name here.
export const HERO_MODEL_PATH = ""; 

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================

export const PERSONAL_INFO = {
  name: "AZIZBEK IBROKHIMOV",
  title: "MUHANDIS GRAFIK DIZAYNER",
  about: "Engineer Graphic Designer with a passion for 3D Art and Robotics.",
};

export const CONTACT: ContactInfo = {
  phone: "+998 94 087 05 09",
  email: "mynocoded@gmail.com",
  telegram: "@ibrokhimov_org"
};

export const EDUCATION_HISTORY: EducationItem[] = [
  { institution: "School №243", status: "Completed", icon: "school" },
  { institution: "TSTU Lyceum", status: "Completed", icon: "school" },
  { institution: "TUIT Bachelor", status: "4/4 (Senior Year)", icon: "university" },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { title: "Driver license", medal: "check" },
  { title: "Tashkent Karate event", year: "2015", medal: "bronze" },
  { title: "Tashkent Taekwondo Championship", year: "2019", medal: "silver" },
];

export const FITNESS_STATS = {
  date: "24.12.2025",
  pushups: 25,
  dumbbells: "55 (each hand)",
};

export const INTERESTS = [
  "General 3D",
  "Game Development",
  "Robotechnics",
  "Coding",
  "Engineering"
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Blender 3D Specialist',
    duration: '5 years',
    description: 'Extensive experience in modeling, shading, and animation.'
  },
  {
    id: '2',
    role: '3D Printing Specialist',
    company: 'Orca Slicer',
    duration: '3 years',
    description: 'Expertise in slicing and printing optimization.'
  },
  {
    id: '3',
    role: 'Robotics Engineer',
    duration: '1 year',
    description: 'Hands-on experience in robotics technology.'
  },
  {
    id: '4',
    role: 'Lab Engineer',
    company: 'TATU',
    duration: '1 year',
    description: 'Technical support and engineering at university laboratory.'
  }
];

export const SOFTWARE_STACK = [
  "Unreal Engine",
  "Unity 3D",
  "Cura",
  "Arduino IDE",
  "Cascadeur",
  "AR / VR Tech",
  "C++",
  "HTML + CSS"
];

// =============================================================================
// 🚨 PROJECT 3D MODELS
// =============================================================================

export const PROJECTS: Project[] = [
  {
    title: "Mobile Games",
    description: "Developed 2 personal 3D and 2D mobile games. Focused on low-poly asset creation and performance optimization for mobile devices.",
    tags: ["Game Dev", "Unity", "C#"],
    placeholderColor: "#ff6b6b",
    modelPath: "", 
  },
  {
    title: "Web Development",
    description: "Created 4 full-stack websites including 3D portfolios and e-commerce solutions using modern web technologies.",
    tags: ["Web", "HTML", "CSS", "React"],
    placeholderColor: "#4ecdc4",
    modelPath: "",
  },
  {
    title: "Project Management",
    description: "Managed over 5 different technical projects, coordinating between design and engineering teams to deliver on time.",
    tags: ["Management", "Leadership", "Agile"],
    placeholderColor: "#ffe66d",
    modelPath: "",
  },
  {
    title: "Qo'ldan kegancha",
    description: "Founder of the 'Qo'ldan kegancha' project. A startup initiative focused on accessible engineering solutions.",
    tags: ["Startup", "Founder", "Innovation"],
    placeholderColor: "#1a535c",
    modelPath: "",
  }
];

export const LANGUAGES = [
  { lang: "English", level: "B2" },
  { lang: "Russian", level: "A2" }
];

export const EXPERTISE_TRAITS = [
  "Masuliyatlilik (Responsibility)",
  "Kreativlik (Creativity)",
  "Aniqlik (Precision)",
  "Muloyimlik (Politeness)"
];