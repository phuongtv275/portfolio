import siteJson from "./site.json";
import personalJson from "./personal.json";
import skillsJson from "./skills.json";
import projectsJson from "./projects.json";
import experienceJson from "./experience.json";

import type {
  SiteConfig,
  PersonalInfo,
  SkillCategory,
  ProjectsConfig,
  Project,
  Experience,
} from "@/types";

export const siteConfig: SiteConfig = siteJson as SiteConfig;
export const personalData: PersonalInfo = personalJson as PersonalInfo;
export const skillCategories: SkillCategory[] = skillsJson as SkillCategory[];
export const projectsConfig: ProjectsConfig = projectsJson as unknown as ProjectsConfig;
export const projectsData: Project[] = projectsConfig.items;
export const experienceData: Experience[] = experienceJson as Experience[];
