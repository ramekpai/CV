import { resume as EnResume } from './resume.en.ts';
import { resume as RuResume } from './resume.ru.ts';
import { renderHtml } from './template.ts';
import fs from 'node:fs';
import path from 'node:path'

const targetPath = path.resolve(import.meta.dirname, '../tmp');

fs.mkdirSync(targetPath, { recursive: true });
fs.writeFileSync(`${targetPath}/cv.html`, renderHtml(EnResume, 'en'));
fs.writeFileSync(`${targetPath}/cv.ru.html`, renderHtml(RuResume, 'ru'));
