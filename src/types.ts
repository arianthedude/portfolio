export interface ContactInfo {
  email: string;
  location: string;
  github: string;
  website: string;
}

export interface Language {
  name: string;
  level: 'NATIVE' | 'FLUENT' | 'INTERMEDIATE' | 'ELEMENTARY' | string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  avatarUrl: string;
  professionalSummary: string;
  contact: ContactInfo;
  expertise: string[];
  languages: Language[];
  education: Education[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}
