export type Locale = 'en' | 'ru';

export interface Contact {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export type ISOYearMonth = `${number}-${number}`;

export interface Period {
  from: ISOYearMonth;
  to: ISOYearMonth | null;
}

export interface Bullet {
  lead?: string;
  text: string;
}

export interface BulletGroup {
  title?: string;
  bullets: Bullet[];
}

export interface Job {
  title: string;
  company: string;
  companyNote: string;
  period: Period;
  location: string;
  intro: string;
  bulletGroups: BulletGroup[];
}

export interface Resume {
  name: string;
  role: string;
  contacts: Contact[];
  location: string[];
  summary: string;
  skills: SkillGroup[];
  experience: Job[];
  languages: string[];
}