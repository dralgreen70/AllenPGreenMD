import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SRC = path.join(root, "public/images/blog/me-amicus-2.jpg");
const OUT = path.join(root, "public/images/tpe-evidence-og.jpg");
const WIDTH = 1200;
const HEIGHT = 630;
const BG = "#0f1b2d";

async function main() {
  // Load and resize source so it fits fully within the canvas
  const resized = await sharp(SRC)
    .resize({
      width: Math.round(WIDTH * 0.6),   // leave horizontal margin
      height: Math.round(HEIGHT * 0.9), // leave vertical margin
      fit: "inside",
    })
    .toBuffer();

  const meta = await sharp(resized).metadata();
  const imgW = meta.width;
  const imgH = meta.height;

  // Center on navy canvas
  const left = Math.round((WIDTH - imgW) / 2);
  const top = Math.round((HEIGHT - imgH) / 2);

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: BG,
    },
  })
    .composite([{ input: resized, left, top }])
    .jpeg({ quality: 85 })
    .toFile(OUT);

  console.log(`✓ Wrote ${OUT} (${WIDTH}×${HEIGHT})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
