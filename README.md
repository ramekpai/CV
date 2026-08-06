# CV as code

[![CI](https://github.com/ramekpai/CV/actions/workflows/ci.yml/badge.svg)](https://github.com/ramekpai/CV/actions/workflows/ci.yml)

My resume as typed TypeScript data, rendered to PDF by a zero-dependency pipeline.

**[View PDF (EN)](https://ramekpai.github.io/CV/cv.pdf)** · **[View PDF (RU)](https://ramekpai.github.io/CV/cv.ru.pdf)**

Or grab it from the [latest release](https://github.com/ramekpai/CV/releases/tag/latest)

## How it works

```
src/resume.*.ts  ──▶  src/template.ts  ──▶  tmp/*.html  ──▶  headless Chrome  ──▶  *.pdf
   typed data          HTML renderer                          scripts/build.sh
```

- **Single source of truth.** The resume lives as typed data (`src/resume.en.ts`, `src/resume.ru.ts`) validated against `src/schema.ts` by `tsc` — a typo in a field name fails the build. The same data is designed to be consumed by my personal site as a `github:` dependency.
- **Zero runtime dependencies.** No frameworks, no template engines, no build step: Node 24 runs the TypeScript sources natively via type stripping. The only devDependency is `typescript`, used for typechecking.
- **Safe HTML by construction.** A small tagged template (`src/html.ts`) auto-escapes every interpolation. Trusted fragments must be marked with an explicit `raw()`.
- **Artifacts can't go stale.** Nothing generated is committed. CI typechecks, renders, prints PDFs with headless Chrome and publishes them to the [latest release](https://github.com/ramekpai/CV/releases/latest) on every push to `main`.

## Build locally

```sh
pnpm install
pnpm build   # render HTML to tmp/ and print PDFs with headless Chrome
```

Works out of the box on macOS with Google Chrome installed. Elsewhere, point `CHROME` at any Chrome/Chromium binary:

```sh
CHROME="$(command -v chromium)" pnpm build
```

## License

The code is [MIT](LICENSE). The resume content (`src/resume.*.ts`) is **not** covered by the MIT license: it is personal data describing a real person, Maksim Tarasov, all rights reserved. Please do not use my personal data 🙏
