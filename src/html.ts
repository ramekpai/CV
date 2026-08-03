export type Html = { __html: string };

export const raw = (value: string): Html => ({ __html: value });

export const esc = (value: string): string =>
  value.replaceAll('&', '&amp;')
   .replaceAll('<', '&lt;')
   .replaceAll('>', '&gt;')
   .replaceAll('"', '&quot;')
   .replaceAll("'", '&#39;');

export const joinHtml = (items: Html[], separator: string) => raw(items.map(item => item.__html).join(separator));
export const convertLink = (value: string): string =>
  value.replaceAll(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

export const renderValue = (value: unknown): string => {
  if (Array.isArray(value)) {
    return value.map(v => renderValue(v)).join('');
  }

  if (typeof value === 'object' && value !== null && '__html' in value) {
    return (value as Html).__html;
  }

  return convertLink(esc(String(value)));
}

export const html = (strings: TemplateStringsArray, ...values: unknown[]): Html =>
  raw(strings.reduce((acc, curr, i) => {
    if (i >= values.length) {
      return acc + curr;
    }

    const value = values[i];
    const piece = renderValue(value);

    return acc + curr + piece;
  }, ''));
