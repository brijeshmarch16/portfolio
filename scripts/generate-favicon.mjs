import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// SVG favicon content - matches the logo design
const svgFavicon = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .logo-bg { fill: #ffdb33; }
      .logo-text { fill: #000; font-family: 'Archivo Black', sans-serif; font-weight: 900; font-size: 13px; letter-spacing: -0.02em; }
    </style>
  </defs>
  <g transform="rotate(-3 16 16)">
    <rect class="logo-bg" x="4" y="4" width="24" height="24"/>
    <text class="logo-text" x="16" y="16.5" text-anchor="middle" dominant-baseline="central">BY</text>
  </g>
</svg>`;

// Create SVG favicon
const svgPath = join(rootDir, "src/app/icon.svg");
writeFileSync(svgPath, svgFavicon);
console.log("✓ Created icon.svg");

// Create Apple touch icon (180x180)
const appleIconSvg = `<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .logo-bg { fill: #ffdb33; }
      .logo-text { fill: #000; font-family: 'Archivo Black', sans-serif; font-weight: 900; font-size: 90px; letter-spacing: -0.02em; }
    </style>
  </defs>
  <g transform="rotate(-3 90 90)">
    <rect class="logo-bg" x="4" y="4" width="172" height="172"/>
    <text class="logo-text" x="90" y="90" text-anchor="middle" dominant-baseline="central">BY</text>
  </g>
</svg>`;

const appleIconPath = join(rootDir, "src/app/apple-icon.svg");
writeFileSync(appleIconPath, appleIconSvg);
console.log("✓ Created apple-icon.svg");
console.log(
  "\nNext.js will automatically use icon.svg and apple-icon.svg from the app directory.",
);
