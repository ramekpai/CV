import { type Resume } from './schema.ts';
import { contacts } from './contacts.ts';

export const resume = {
  name: 'Maksim Tarasov',
  role: 'Senior Frontend Engineer',
  contacts,
  location: [
    'Tjumen, Russland',
    'Offen für Relocation (EU / USA - Visa-Sponsoring nötig)',
    'Remote möglich',
  ],
  summary: 'Senior Frontend Engineer, 8+ Jahre Erfahrung mit B2C- und B2B-Plattformen unter hoher Last. Alleiniger Frontend-Entwickler zweier Produktdomänen eines internationalen Food-Tech-Unternehmens (1.600+ Filialen, 27 Länder): ca. 40 React-Microfrontends plus UI-Bibliothek. Frontend-CI von 16 auf 1–3 Minuten verkürzt (5–20×), Tablet-Produkt für 278 Filialen ausgeliefert, Design System gebaut, seit Jahren ohne kritischen Bug in Produktion. Bei Bedarf auch C# und Node.js. Offen für Relocation (Visa-Sponsoring nötig).',
  skills: [
    {
      title: 'Kern-Stack',
      items: [
        'TypeScript',
        'JavaScript',
        'React',
        'HTML',
        'CSS',
      ],
    },
    {
      title: 'Frameworks / Bibliotheken',
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
      title: 'Tools / Plattformen',
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
        'Micro-Frontend-Architektur (import maps, SystemJS)',
        'Azure + Yandex Cloud',
      ],
    },
    {
      title: 'Praktiken',
      items: [
        'Design Systems',
        'Barrierefreiheit (a11y)',
        'i18n/l10n',
        'Performance-Optimierung & Virtualisierung',
        'Observability',
        'Schwachstellen-Behebung (Trivy/Semgrep)',
        'KI-gestützte Entwicklung (Agent Skills, Review-Instruktionen)',
        'Code-Review & Mentoring',
        'Agile',
      ],
    }
  ],
  experience: [
    {
      title: 'Senior Frontend Engineer',
      company: 'Dodo Brands',
      companyNote: 'internationales Food-Tech-Unternehmen (Dodo Pizza, Drinkit), 1.600+ Filialen in 27 Ländern',
      period: {
        from: '2024-10',
        to: null,
      },
      location: 'Remote',
      intro: 'Alleiniger Frontend-Entwickler der Domänen Buchhaltung & Bestandsführung: ca. 40 React-Microfrontends hinter B2B-Oberflächen (Desktop, Tablet) in Pizzerien und Coffeeshops weltweit. Verantwortet alle Frontend-Kernentscheidungen und die Migration der Legacy-Apps auf einen modernen Stack (bisher 9 Apps auf Vite). Eintritt als Middle+, Senior beim ersten Performance-Review nach sechs Monaten.',
      bulletGroups: [
        {
          title: 'Kernergebnisse',
          bullets: [
            {
              lead: 'Produkt von Grund auf (278 Filialen)',
              text: 'Write-offs Tablet komplett gebaut (React, TypeScript, Vite); täglich in 278 Pizzerien genutzt, für den internen Produktpreis nominiert. 3.200+ Zeilen auf ca. 32 DOM-Knoten virtualisiert - flüssig auf den günstigen Filial-Tablets, von denen die Einführung abhing.',
            },
            {
              lead: 'CI-Tempo (5–20× schneller)',
              text: 'Frontend-CI-Checks von ca. 16 auf 1–3 Min. verkürzt (-96 % bei Commits ohne Frontend-Änderung): Turborepo-Remote-Cache repariert, falsche Job-Abhängigkeiten entfernt, Checks parallelisiert; sporadische 30–50-Min.-Hänger als OOM erkannt und beseitigt.',
            },
            {
              lead: 'Migrations-Blueprint',
              text: 'Legacy-App „Productions“ (Filial-Speisenproduktion) auf modernem Stack neu gebaut: Restyling mit Designer-Review, neue Playwright-e2e-Infrastruktur, erstes Microfrontend, das alle unternehmensweiten nichtfunktionalen Anforderungen erfüllt; ein Nachbarteam übernahm das Playbook.',
            },
            {
              lead: 'API-Verträge automatisiert',
              text: 'Stillen Contract-Drift zwischen Front- und Backend beendet: API-Typen aus dem C#-Backend generiert (NSwag/OpenAPI, 377 Interfaces + 40 Enums, 10 API-Domänen), CI-Gate stoppt Builds bei Abweichung; C#-Seite selbst geschrieben, Setup in zweitem Produkt wiederholt.',
            },
            {
              lead: 'Multitasking-UX',
              text: 'Multitasking im Prep Tablet umgesetzt: bis zu 4 Aufgaben parallel (zuvor eine), Aufgabenwechsel ohne Fortschrittsverlust; App-weite Re-Renders bei jedem Timer-Tick und Timer-Drift in inaktiven Tabs beseitigt.',
            },
            {
              lead: 'Mentoring',
              text: 'Individuellen 5-monatigen Entwicklungsplan aufgesetzt und geführt (wöchentliche Sessions, Code-Reviews, Curriculum): Frontend-Skills eines Fullstack-Entwicklers von Junior auf Middle gehoben; liefert heute eigenständig Frontend-Features in Produktion.',
            },
          ],
        },
        {
          title: 'Plattform & Architektur',
          bullets: [
            {
              text: 'Team-Monorepo von Webpack auf Vite migriert, React Compiler in 9 Microfrontends aktiviert, zwei Monorepos auf React 18 und Yarn 4 gehoben.'
            },
            {
              text: 'Durchgängige Frontend-Observability aufgebaut: Client-Logging in den Team-Apps, Kusto-Log-Views für zwei Teams, Importmap-Fallbacks bei CDN-Ausfall, Startup-Race in der single-spa-Shell behoben.'
            },
            {
              text: 'Gesamten Trivy/Semgrep-Schwachstellen-Backlog in zwei Repos abgearbeitet, Security-Scans build-blockierend gemacht.'
            },
            {
              text: 'Alleiniger Owner des internen UI-Kits (elements), Refactoring Richtung headless + CSS Modules und Public Release vorangetrieben; Beiträge zum Ant-Design-basierten Design System (Lokalisierungs-API, styled-components v6).'
            },
            {
              text: 'Autor interner KI-Agent-Skills und Code-Review-Instruktionen - Tooling, mit dem viele Fullstack-Entwickler Frontend-Aufgaben korrekt und schnell erledigen.'
            },
          ],
        },
      ],
    },
    {
      title: 'Frontend Engineer',
      company: 'Etagi',
      companyNote: 'größte Immobilienagentur Russlands (etagi.com)',
      period: {
        from: '2016-01',
        to: '2024-10',
      },
      location: 'Tjumen, Russland',
      intro: 'Einstieg im IT-Support, Webentwicklung autodidaktisch erlernt, zum zentralen Frontend-Entwickler im Hauptwebsite-Team gewachsen (zwei Beförderungen: Junior → Middle → Middle+).',
      bulletGroups: [
        {
          bullets: [
            {
              lead: 'Design System im Alleingang (bis heute live)',
              text: 'Firmen-UI-Kit in ca. 8 Monaten allein gebaut - Co-Design in Figma, CI/CD-Publishing in private Registry, öffentliches Storybook ([storybook.etagi.com](https://storybook.etagi.com)) - und Legacy-Komponenten auf etagi.com komplett ersetzt. Deckt Jahre später noch den Bedarf, kein kritischer Bug.',
            },
            {
              lead: 'Hypotheken-Strecke',
              text: 'Frontend von Grund auf neu geschrieben, messbar höhere Conversion in einem zentralen Funnel.',
            },
            {
              lead: 'TypeScript-Einführung',
              text: 'TypeScript im Alleingang im großen Monorepo der Firma eingeführt - Tooling, Konfiguration, Migrationspfad.',
            },
            {
              lead: 'Performance',
              text: 'Website-weite Lighthouse-Optimierungen (Bundle, Bilder, Rendering) - bessere UX und Suchmaschinen-Werte.',
            },
            {
              lead: 'DX-Tooling',
              text: 'Telegram-Bot für GitLab-Code-Reviews (Node.js, Fastify, Telegraf, GitLab Webhooks, Sentry), täglich vom Team genutzt.',
            },
            {
              lead: 'Produktarbeit',
              text: 'Kundenkonto für Verkäufer und Käufer (Deal-Phasen, Online-Vertragsunterzeichnung, WebOTP-Auth), Stellenanzeigen-Modul auf Microservice-API, Call-Tracking für Marketing-Analytics, A/B-getestete Features; tägliche Code-Reviews.',
            },
          ],
        }
      ],
    },
  ],
  languages: [
    'Englisch - B2 (sicher im beruflichen Alltag)',
    'Russisch - Muttersprache',
    'Deutsch - noch keine Kenntnisse, Lernbereitschaft vorhanden',
  ],

} satisfies Resume;
