# Setup Dress Code Inspiration Gallery

## Quick Start

1. **Add your images** to the `vestimenta/` folder
   - Supported formats: JPG, PNG, GIF, WebP
   - Recommended: optimize images to ~200-300KB each for faster loading

2. **Generate the gallery** (run this after adding images):
   ```bash
   node generate-gallery.js
   ```

3. **Test locally**:
   - Open `index.html` in your browser
   - Click the "Inspiración" button in the VESTIMENTA section
   - You should see your dress code inspiration photos

4. **Commit and push**:
   ```bash
   git add -A
   git commit -m "Add dress code inspiration photos"
   git push
   ```

## What the Script Does

- Scans the `vestimenta/` folder for all image files
- Generates the `vestimenta.html` gallery automatically
- Formats images in a responsive grid layout
- Adds lazy loading for better performance

## File Structure

```
invitacion-matrimonio/
├── index.html                 (main invitation)
├── vestimenta.html           (dress code gallery - auto-generated)
├── vestimenta/               (folder for dress code photos)
│   ├── dress1.jpg
│   ├── dress2.jpg
│   └── ... (add all photos here)
├── generate-gallery.js       (helper script)
└── casa.png                  (illustration)
```

## Image Optimization Tips

- **Quality**: Compress images using tools like TinyPNG or Squoosh
- **Format**: Use JPEG for photos, PNG for graphics
- **Size**: Keep files under 500KB each (gallery will load faster)
- **Naming**: Use descriptive names or numbers (e.g., `dress-01.jpg`, `dress-02.jpg`)

## Troubleshooting

**"vestimenta directory not found"**
- Make sure the `vestimenta/` folder exists
- Run: `mkdir -p vestimenta/`

**No images appear in gallery**
- Check that image files are in the `vestimenta/` folder
- Make sure filenames don't have spaces (use hyphens instead)
- Run the generate script again: `node generate-gallery.js`

**Images don't load on the website**
- Check file paths in generated `vestimenta.html`
- Ensure all images are committed to git
- Wait a minute for Cloudflare Pages to deploy

## Live Preview

Your gallery will be live at: `https://invitacion-martina-vicente.pages.dev/vestimenta.html`
