import { type Resume } from './schema.ts';
import { contacts } from './contacts.ts';

export const resume = {
  name: 'Maksim Tarasov',
  role: 'Senior Frontend Engineer',
  contacts,
  location: [
    'Tyumen, Russia',
    'Open to relocation (EU / US - visa sponsorship required)',
    'Remote-friendly',
  ],
  summary: 'Senior Frontend Engineer with 8+ years building high-load B2C and B2B platforms. Sole frontend engineer for two product domains at an international food-tech company (1,600+ stores, 27 countries): ~40 React microfrontends and a UI library. Cut frontend CI from 16 to 1–3 minutes (5–20×), shipped a tablet product used in 278 locations, built a design system running in production for years without a critical bug. Hands-on with C# and Node.js when needed. Open to relocation (visa sponsorship required).',
  skills: [
    {
      title: 'Core Stack',
      items: [
        'TypeScript',
        'JavaScript',
        'React',
        'HTML',
        'CSS',
      ],
    },
    {
      title: 'Frameworks / Libraries',
      items: [
        'TanStack Query',
        'TanStack Router',
        'Redux',
        'React Router',
        'styled-components',
        'Ant Design',
        'i18next',
        'Node.js (Fastify, Nuxt/Nitro)',
        'single-spa',
      ],
    },
    {
      title: 'Testing',
      items: [
        'Vitest',
        'Jest',
        'React Testing Library',
        'Playwright (e2e)',
        'MSW',
      ],
    },
    {
      title: 'Tools / Platforms',
      items: [
        'Vite',
        'Webpack',
        'Turborepo',
        'Yarn 4',
        'GitHub Actions CI/CD',
        'NSwag / OpenAPI codegen',
        'Storybook',
        'Figma',
        'Kusto (Azure Data Explorer)',
        'Micro-frontend architecture (import maps, SystemJS)',
        'Azure + Yandex Cloud',
      ],
    },
    {
      title: 'Practices',
      items: [
        'Design systems',
        'Accessibility (a11y)',
        'i18n/l10n',
        'Performance optimization & virtualization',
        'Observability',
        'Security remediation (Trivy/Semgrep)',
        'AI-assisted development (agent skills, custom review instructions)',
        'Code review & mentorship',
        'Agile',
      ],
    }
  ],
  experience: [
    {
      title: 'Senior Frontend Engineer',
      company: 'Dodo Brands',
      companyNote: 'international food-tech company (Dodo Pizza, Drinkit), 1,600+ stores across 27 countries',
      period: {
        from: '2024-10',
        to: null,
      },
      location: 'Remote',
      intro: 'Sole frontend engineer for the accounting & inventory domains: ~40 React microfrontends behind B2B desktop and tablet interfaces used in pizzerias and coffee shops worldwide. Drive all key frontend decisions and the migration of the legacy fleet to a modern stack (9 apps on Vite so far). Joined as a Middle+ engineer; promoted to Senior at the first performance review, six months in.',
      bulletGroups: [
        {
          title: 'Key Results',
          bullets: [
            {
              lead: 'Product from scratch (278 locations)',
              text: 'Built the Write-offs Tablet end-to-end (React, TypeScript, Vite); used daily in 278 pizzerias, nominated for the company\'s product award. Virtualized 3,200+ row lists to ~32 DOM nodes - smooth on the cheap tablets stores already own, which adoption depended on.',
            },
            {
              lead: 'CI speed (5–20× faster)',
              text: 'Cut frontend CI checks from ~16 min to 1–3 min (-96% for commits without frontend changes): fixed a broken Turborepo remote cache, removed false job dependencies, parallelized checks; also traced intermittent 30–50-min hangs to OOM and eliminated them.',
            },
            {
              lead: 'Migration blueprint',
              text: 'Rewrote the legacy "Productions" app (in-store food production) on the modern stack: designer-reviewed restyle, new Playwright e2e infrastructure, first microfrontend fully compliant with company-wide non-functional requirements; migration playbook adopted by an adjacent team.',
            },
            {
              lead: 'API contract automation',
              text: 'Ended silent frontend/backend contract drift: API types now generated from the C# backend (NSwag/OpenAPI, 377 interfaces + 40 enums, 10 API domains) with a CI gate failing builds on mismatch; wrote the C# side myself, replicated the setup in a second product.',
            },
            {
              lead: 'Multitasking UX',
              text: 'Shipped Prep Tablet multitasking: up to 4 prep jobs in parallel (previously one) with task switching and no lost progress; eliminated app-wide re-renders on every timer tick and timer drift in inactive browser tabs.',
            },
            {
              lead: 'Mentorship',
              text: 'Designed and ran a 5-month individual development plan (weekly sessions, code reviews, curated curriculum) that took a fullstack engineer\'s frontend skills from junior to middle level; he now ships production frontend features end-to-end.',
            },
          ],
        },
        {
          title: 'Platform & Architecture',
          bullets: [
            {
              text: 'Migrated the team\'s monorepo from Webpack to Vite, enabled React Compiler across 9 microfrontends, upgraded two monorepos to React 18 and Yarn 4.'
            },
            {
              text: 'Rolled out end-to-end frontend observability: client-side logging across team apps, Kusto log views for two teams, CDN-failure importmap fallbacks, fixed a startup race in the single-spa shell.'
            },
            {
              text: 'Cleared the entire Trivy/Semgrep vulnerability backlog across two repositories and made security scans build-blocking.'
            },
            {
              text: 'Sole owner of the in-house UI kit (elements), driving its refactor toward headless + CSS Modules and a public release; contribute to the company\'s Ant Design-based design system (localization API, styled-components v6).'
            },
            {
              text: 'Author internal AI-agent skills and code-review instructions - tooling that lets the company\'s many fullstack engineers do frontend work correctly and fast.'
            },
          ],
        },
      ],
    },
    {
      title: 'Frontend Engineer',
      company: 'Etagi',
      companyNote: 'Russia\'s largest real-estate agency (etagi.com)',
      period: {
        from: '2016-01',
        to: '2024-10',
      },
      location: 'Tyumen, Russia',
      intro: 'Joined the company in tech support, taught myself web development, and grew into a core frontend engineer on the main website team (promoted twice: Junior → Middle → Middle+).',
      bulletGroups: [
        {
          bullets: [
            {
              lead: 'Design system solo (still in production)',
              text: 'Single-handedly built the company\'s UI kit in ~8 months - Figma co-design, CI/CD publishing to a private registry, public Storybook ([storybook.etagi.com](https://storybook.etagi.com)) - and fully replaced legacy components across etagi.com. Still covers the site\'s needs years later, zero critical bugs.',
            },
            {
              lead: 'Mortgage flow rewrite',
              text: 'Rewrote the mortgage section frontend from scratch, measurably increasing conversion in a key funnel.',
            },
            {
              lead: 'TypeScript adoption',
              text: 'Single-handedly introduced TypeScript across the company\'s large monorepo - tooling, configuration, and migration path.',
            },
            {
              lead: 'Performance',
              text: 'Shipped site-wide Lighthouse-driven optimizations (bundle, images, rendering) improving UX and search performance scores.',
            },
            {
              lead: 'DX tooling',
              text: 'Built a GitLab code-review Telegram bot (Node.js, Fastify, Telegraf, GitLab webhooks, Sentry) used daily by the team.',
            },
            {
              lead: 'Product work',
              text: 'Seller/buyer personal account (deal stages, online contract signing, WebOTP auth), vacancies module on a microservice API, call-tracking integration for marketing analytics, A/B-tested features; daily code reviews.',
            },
          ],
        }
      ],
    },
  ],
  languages: [
    'English - B2 (professional working proficiency)',
    'Russian - native',
  ],
  
} satisfies Resume;