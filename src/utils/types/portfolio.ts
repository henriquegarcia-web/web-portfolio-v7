export interface IPersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
  heroSummary: string
  avatar?: string
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

export interface IWorkExperience {
  id: string
  position: string
  company: string
  location: string
  type: 'remote' | 'hybrid' | 'onsite'
  startDate: string
  endDate: string | 'present'
  description: string
  achievements: string[]
  technologies: string[]
  current?: boolean
}

export interface IEducation {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  description?: string
  projects?: string[]
}

export interface ICertification {
  id: string
  name: string
  issuer: string
  date: string
  description: string
  credentialId?: string
  credentialUrl?: string
}

export interface ISkill {
  category: string
  technologies: string[]
}

export interface IProject {
  id: string
  title: string
  description: string
  longDescription?: string
  image?: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  status: 'completed' | 'in-progress' | 'planned'
  featured?: boolean
  startDate?: string
  endDate?: string
}

export interface IPortfolioData {
  personal: IPersonalInfo
  experience: IWorkExperience[]
  education: IEducation[]
  certifications: ICertification[]
  skills: ISkill[]
  projects: IProject[]
  resumeUrl?: string
}
