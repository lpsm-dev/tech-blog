import sharp from "sharp";
import path from "path";
import fs from "fs";
import fetch from "node-fetch";

const outputDir = path.join(process.cwd(), "public", "resized-images");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadImage(url: string, outputPath: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image from ${url}`);
  }
  const buffer = await response.buffer();
  fs.writeFileSync(outputPath, buffer);
}

export async function resizeImage(
  imageUrl: string,
  width: number,
  height: number,
): Promise<string> {
  const imageName = path.basename(imageUrl, path.extname(imageUrl));
  const outputFileName = `${imageName}-${width}x${height}${path.extname(imageUrl)}`;
  const outputPath = path.join(outputDir, outputFileName);

  if (!fs.existsSync(outputPath)) {
    const tempImagePath = path.join(
      outputDir,
      imageName + path.extname(imageUrl),
    );
    await downloadImage(imageUrl, tempImagePath);
    await sharp(tempImagePath).resize(width, height).toFile(outputPath);
    fs.unlinkSync(tempImagePath);
  }

  return `/resized-images/${outputFileName}`;
}
