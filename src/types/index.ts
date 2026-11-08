export interface Project {
  id: string;
  title: string;
  description: string;
  category: "ai" | "backend" | "fullstack";
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  period?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  thesis?: string;
}

export interface SkillItem {
  name: string;
  level?: "Core" | "Proficient" | "Familiar";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: "github" | "linkedin" | "twitter" | "mail";
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  phone?: string;
  email: string;
  availableForHire: boolean;
  resumeUrl: string;
  education?: Education[];
  socials: SocialLink[];
  stats: {
    label: string;
    value: string;
  }[];
}
