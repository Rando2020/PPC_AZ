import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const limits = {
  jsTotal: 525 * 1024,
  cssTotal: 90 * 1024,
  singleImage: 500 * 1024,
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

const files = await walk(dist);
const rows = await Promise.all(files.map(async file => ({
  file: path.relative(dist, file),
  bytes: (await stat(file)).size,
  ext: path.extname(file).toLowerCase(),
})));

const sum = exts => rows.filter(row => exts.includes(row.ext)).reduce((total, row) => total + row.bytes, 0);
const jsTotal = sum(['.js']);
const cssTotal = sum(['.css']);
const images = rows.filter(row => ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'].includes(row.ext));
const oversizedImages = images.filter(row => row.bytes > limits.singleImage);

const kb = bytes => `${(bytes / 1024).toFixed(1)} KB`;
console.log(`JavaScript total: ${kb(jsTotal)} / ${kb(limits.jsTotal)}`);
console.log(`CSS total: ${kb(cssTotal)} / ${kb(limits.cssTotal)}`);
console.log(`Largest image: ${images.length ? kb(Math.max(...images.map(row => row.bytes))) : 'none'} / ${kb(limits.singleImage)}`);

const failures = [];
if (jsTotal > limits.jsTotal) failures.push(`JavaScript exceeded budget: ${kb(jsTotal)}`);
if (cssTotal > limits.cssTotal) failures.push(`CSS exceeded budget: ${kb(cssTotal)}`);
for (const image of oversizedImages) failures.push(`Image exceeded budget: ${image.file} (${kb(image.bytes)})`);

if (failures.length) {
  console.error('\nBuild budget failed:');
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Build budget passed.');
