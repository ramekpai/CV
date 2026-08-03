import { type Locale, type Period, type Resume } from './schema.ts';
import { labels } from './labels.ts';
import { html, joinHtml, raw } from './html.ts';

const style = `
  :root {
    --fs-base: 9.5pt;
  }

  @page {
    size: A4;
    margin: 11mm 12mm;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: var(--fs-base);
    line-height: 1.35;
    color: #111;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  header {
    text-align: center;
    margin-bottom: 6pt;
  }

  h1 {
    font-size: 20pt;
    letter-spacing: .5pt;
  }

  .role {
    font-size: 12pt;
    font-weight: 600;
    margin-top: 1pt;
  }

  .contact, .location {
    font-size: 9pt;
    color: #333;
    margin-top: 3pt;
  }

  h2 {
    font-size: 10.5pt;
    text-transform: uppercase;
    letter-spacing: 1pt;
    border-bottom: 1px solid #888;
    padding-bottom: 2pt;
    margin: 10pt 0 5pt;
  }

  .job-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 2pt;
  }

  .job-head h3 {
    font-size: 10.5pt;
  }

  .job-meta {
    font-size: 9pt;
    color: #333;
    white-space: nowrap;
  }

  .company {
    font-style: italic;
    font-size: 9.5pt;
    margin-bottom: 3pt;
  }

  .intro {
    margin: 2pt 0 4pt;
  }

  .sub {
    font-weight: 700;
    margin-top: 4pt;
  }

  ul {
    margin: 3pt 0 6pt;
    padding-left: 14pt;
  }

  li {
    margin-bottom: 3pt;
    break-inside: avoid;
  }

  .skills p {
    margin-bottom: 2pt;
  }

  section {
    break-inside: auto;
  }

  .job-head {
    break-after: avoid-page;
  }
`;

export const renderHtml = (resume: Resume, locale: Locale): string => {
  const translatedLabels = labels[locale];

  const renderWorkPeriod = (dateValue: Period['from'] | Period['to']) => {
    if (dateValue === null) {
      return translatedLabels.present;
    }

    const formatter = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
    const date = new Date(dateValue);

    return formatter.format(date);
  };

  return html`<!DOCTYPE html>
    <html lang="${locale}">
      <head>
        <meta charset="utf-8">
        <title>${resume.name} - ${resume.role}</title>
        <style>${raw(style)}</style>
      </head>

      <body>
        <header>
          <h1>${resume.name}</h1>
          <div class="role">${resume.role}</div>
          <div class="contact">
            ${joinHtml(resume.contacts.map(contact => html`<a href="${contact.href}">${contact.label}</a>`), ' · ')}
          </div>
          <div class="location">${resume.location.join(' · ')}</div>
        </header>

        <section>
          <h2>${translatedLabels.summary}</h2>
          <p>${resume.summary}</p>
        </section>

        <section class="skills">
          <h2>${translatedLabels.skills}</h2>
          ${resume.skills.map(skill => html`<p><strong>${skill.title}: </strong>${skill.items.join(', ')}</p>`)}
        </section>

        <section>
          <h2>${translatedLabels.experience}</h2>

          ${resume.experience.map(experience => html`
              <div class="job">
                <div class="job-head">
                  <h3>${experience.title}</h3>
                  <span class="job-meta">${renderWorkPeriod(experience.period.from)} – ${renderWorkPeriod(experience.period.to)} · ${experience.location}</span>
                </div>
                <div class="company">${experience.company} - ${experience.companyNote}</div>
                <p class="intro">${experience.intro}</p>
                ${experience.bulletGroups.map(group => html`
                    ${group.title ? html`<p class="sub">${group.title}:</p>` : ''}
                    <ul>
                      ${group.bullets.map(bullet => html`
                          <li>
                            ${bullet.lead ? html`<strong>${bullet.lead}: </strong>` : ''}
                            ${bullet.text}
                          </li>`)}
                    </ul>`)}
              </div>`)}
        </section>

        <section>
          <h2>${translatedLabels.languages}</h2>
          <p>${resume.languages.join(' · ')}</p>
        </section>
      </body>
    </html>`.__html;
};
