#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

// Read vestimenta directory
const vestiDir = path.join(__dirname, 'vestimenta');

if (!fs.existsSync(vestiDir)) {
  console.log('✗ vestimenta directory not found');
  process.exit(1);
}

// Get all image files
const files = fs.readdirSync(vestiDir)
  .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
  .sort();

if (files.length === 0) {
  console.log('✗ No images found in vestimenta directory');
  process.exit(1);
}

console.log(`✓ Found ${files.length} images`);

// Read the template
const vestiTemplate = fs.readFileSync(path.join(__dirname, 'vestimenta.html'), 'utf-8');

// Generate image HTML
const imageHtml = files.map(file =>
  `      <div class="gallery-item"><img src="vestimenta/${file}" alt="Dress code inspiration" loading="lazy"></div>`
).join('\n');

// Replace the placeholder comment
const updated = vestiTemplate.replace(
  /      <!-- Images will be added here -->[\s\S]*?<!-- Template:[\s\S]*?-->/,
  imageHtml
);

// Write back
fs.writeFileSync(path.join(__dirname, 'vestimenta.html'), updated);

console.log(`✓ Updated vestimenta.html with ${files.length} images`);
console.log(`\nImages added:`);
files.forEach(f => console.log(`  • ${f}`));
