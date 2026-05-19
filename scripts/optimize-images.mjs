/**
 * One-off asset pipeline: hero WebP + blog cover JPEGs.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const BLOG_COVERS = [
  {
    dir: "2026-05-15-bulk-payouts-explained",
    accent: "#83EFC5",
    label: "PAYOUTS",
  },
  {
    dir: "2026-05-08-tax-season-checklist",
    accent: "#C2D3FF",
    label: "COMPLIANCE",
  },
  {
    dir: "2026-04-28-cross-border-creator-payouts",
    accent: "#FFB7F8",
    label: "GLOBAL",
  },
];

async function optimizeHero() {
  const src = path.join(PUBLIC, "videos", "Dashboard.png");
  const dest = path.join(PUBLIC, "videos", "Dashboard.webp");
  const meta = await sharp(src).metadata();
  await sharp(src)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(dest);
  const outStat = fs.statSync(dest);
  console.log(
    `Hero: ${meta.width}x${meta.height} PNG → ${(outStat.size / 1024).toFixed(0)}KB WebP (1920w max)`,
  );
}

/** Swiss editorial cover: paper field + spectrum accent bar + label. */
async function createBlogCover({ dir, accent, label }) {
  const width = 1600;
  const height = 900;
  const paper = "#F5F6F6";
  const ink = "#313131";

  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${paper}"/>
  <defs>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="${ink}" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <rect x="0" y="0" width="12" height="${height}" fill="${accent}"/>
  <rect x="80" y="120" width="720" height="4" fill="${ink}"/>
  <text x="80" y="200" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="700"
        fill="${ink}" opacity="0.5" letter-spacing="8">RIFF JOURNAL</text>
  <text x="80" y="320" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="900"
        fill="${ink}" letter-spacing="2">${label}</text>
  <rect x="80" y="360" width="200" height="200" fill="none" stroke="${accent}" stroke-width="6"/>
  <circle cx="680" cy="460" r="100" fill="none" stroke="${ink}" stroke-width="4" opacity="0.25"/>
</svg>`;

  const outDir = path.join(PUBLIC, "blog", dir);
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "cover.jpg");
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outPath);
  const stat = fs.statSync(outPath);
  console.log(`Cover ${dir}: ${(stat.size / 1024).toFixed(0)}KB`);
}

async function main() {
  await optimizeHero();
  for (const cover of BLOG_COVERS) {
    await createBlogCover(cover);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
