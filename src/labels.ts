import { type Locale } from './schema.ts';

interface Labels {
  summary: string;
  skills: string;
  experience: string;
  present: string;
  languages: string;
}

export const labels: Record<Locale, Labels> = {
  en: {
    summary: 'Summary',
    skills: 'Skills',
    experience: 'Experience',
    present: 'Present',
    languages: 'Languages',
  },
  ru: {
    summary: 'О себе',
    skills: 'Навыки',
    experience: 'Опыт работы',
    present: 'наст. время',
    languages: 'Языки',
  },
  de: {
    summary: 'Profil',
    skills: 'Kenntnisse',
    experience: 'Berufserfahrung',
    present: 'heute',
    languages: 'Sprachen',
  },
};