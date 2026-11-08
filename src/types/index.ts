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

export interface ProjectCategoryFilter {
  id: "all" | "ai" | "backend" | "fullstack";
  label: string;
  icon: string;
}

export interface EmptyStateConfig {
  title: string;
  description: string;
  actionLabel: string;
}

export interface ProjectsConfig {
  categories: ProjectCategoryFilter[];
  emptyState: EmptyStateConfig;
  items: Project[];
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
  displayName?: string;
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

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ResumeConfig {
  label: string;
  downloadLabel: string;
  url: string;
}

export interface NavigationConfig {
  brandName: string;
  navItems: NavItem[];
  resume: ResumeConfig;
}

export interface HeroSectionCopy {
  headlinePrefix: string;
  headlineHighlight1: string;
  headlineMiddle: string;
  headlineHighlight2: string;
  availabilityBadge: string;
  ctaProjects: string;
  ctaResume: string;
  ctaContact: string;
}

export interface AboutHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface AboutSectionCopy {
  tag: string;
  heading: string;
  highlights: AboutHighlight[];
}

export interface SimpleSectionCopy {
  tag: string;
  heading: string;
  description: string;
}

export interface ContactSectionCopy {
  tag: string;
  heading: string;
  description: string;
}

export interface FooterSectionCopy {
  credit: string;
  backToTop: string;
}

export interface SiteSectionsConfig {
  hero: HeroSectionCopy;
  about: AboutSectionCopy;
  skills: SimpleSectionCopy;
  experience: SimpleSectionCopy;
  projects: SimpleSectionCopy;
  contact: ContactSectionCopy;
  footer: FooterSectionCopy;
}

export interface SiteConfig {
  metadata: SiteMetadata;
  navigation: NavigationConfig;
  sections: SiteSectionsConfig;
}
