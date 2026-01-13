# Catherine François - Portfolio Website

Professional portfolio website for painter Catherine François, showcasing 16 unique artworks with an elegant, responsive design.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Desktop Modal**: Full-screen image viewer for paintings (desktop only)
- **Animated Gallery**: Staggered entrance animations with scroll effects
- **Textured Frames**: Custom CSS textures on painting frames for authentic gallery feel
- **Multi-color Frames**: 5 different frame colors (coral, teal, purple, rose, ocean)
- **Smooth Interactions**: Hover effects and transitions throughout
- **Bilingual Content**: French language with professional typography
- **Print-Ready**: Optimized styles for print media

## 📁 Project Structure

```
CaTH SITE/
├── index.html                          # Main HTML file
├── package.json                        # Project metadata and scripts
├── .gitignore                         # Git ignore rules
├── netlify.toml                       # Netlify deployment config
├── README.md                          # This file
│
├── css/
│   └── styles.css                     # All styling (responsive, animations, frames)
│
├── js/
│   └── script.js                      # Modal functionality and animations
│
└── assets/
    └── images/
        ├── paintings/                 # 16 painting images (1-16.jpg)
        │   ├── 1.jpg
        │   ├── 2.jpg
        │   ├── ... (3-15)
        │   └── 16.jpg
        └── profile/
            └── cath.jpg               # Portrait photo
```

## 🚀 Getting Started

### Local Development

1. **Using Python's built-in server** (recommended):
   ```bash
   npm start
   # Opens on http://localhost:8000
   ```

2. **Using any HTTP server**:
   - Live Server (VS Code extension)
   - `php -S localhost:8000`
   - `npx http-server`

3. **Direct file opening**:
   - Simply open `index.html` in your browser (limited functionality)

### Dependencies

- **No build tools required** - Pure HTML/CSS/JavaScript
- **External fonts**: Google Fonts (Cormorant Garamond, Montserrat)
- **No npm packages needed** (optional for development tools)

## 🎯 Key Sections

### Bio Section
- Circular profile photo with border and shadow effects
- Artist biography with 3 paragraphs
- Responsive typography scaling

### Portfolio Gallery
- 16 paintings in responsive grid (1 column mobile, 2 tablets, 3 desktop)
- Each painting includes:
  - Colored frame border (5 colors)
  - Paper texture overlay
  - Title, year, and medium information
  - Hover animations

### Desktop Modal
- Click any painting to view fullscreen
- Dark background with backdrop blur
- Close button, escape key, or overlay click to exit
- **Mobile/Tablet**: Modal disabled, paintings are static

### Contact Section
- Phone number with tel: link
- Email with mailto: link
- Responsive layout with hover effects

## 🎨 Design System

### Colors
- **Coral**: `#FF6B4A`
- **Teal**: `#2D9B9B`
- **Purple**: `#6B4C93`
- **Rose**: `#E75C88`
- **Ocean**: `#1A5F7A`
- **Background**: Gradient cream to warm white

### Typography
- **Headlines**: Cormorant Garamond (elegant serif)
- **Body**: Montserrat (clean sans-serif)
- Font sizes scale responsively with `clamp()`

### Breakpoints
- **Mobile**: 0-768px (1 column grid)
- **Tablet**: 769px-1200px (2 columns)
- **Desktop**: 1201px+ (3 columns)

## 📱 Responsive Features

- Flexible container with max-width constraints
- Responsive padding and gap adjustments
- Image-based element scaling
- Touch-friendly contact links on mobile
- Modal disabled on mobile/tablet for better UX

## 🔧 Customization

### Add a New Painting
1. Place image in `assets/images/paintings/`
2. Add new painting-item div in HTML:
   ```html
   <div class="painting-item" data-frame="coral" style="--offset: 0">
       <div class="painting-frame">
           <img src="assets/images/paintings/new.jpg" alt="Title">
       </div>
       <div class="painting-info">
           <span class="painting-title">Title</span>
           <span class="painting-year">2024</span>
           <span class="painting-medium">Medium</span>
       </div>
   </div>
   ```

### Change Frame Colors
- Modify `data-frame` attribute: `coral`, `teal`, `purple`, `rose`, or `ocean`
- Add new colors in `:root` CSS variables

### Adjust Animations
- Edit `--offset` CSS variable for stagger timing
- Modify `@keyframes` animations in `css/styles.css`

## 🚀 Deployment

### Netlify
Configured with `netlify.toml`:
- No build step required
- All files served as-is
- Redirects index.html for SPA compatibility

**Deploy**: Push to git repository and connect to Netlify

### Other Platforms
- **GitHub Pages**: Drag and drop into repository
- **Vercel**: Connect git repository
- **Traditional Hosting**: FTP upload all files

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## ✅ Best Practices Implemented

- Semantic HTML5
- WCAG accessibility (alt text, aria labels)
- Mobile-first responsive design
- CSS custom properties for theming
- Graceful image error handling
- Smooth performance animations
- Print-friendly styles

## 📝 File Sizes

- `index.html`: ~12 KB
- `css/styles.css`: ~8 KB
- `js/script.js`: ~3 KB
- **Total (HTML/CSS/JS)**: ~23 KB
- Images: Variable (optimize before deployment)

## 🤝 License

MIT License - Feel free to use and modify

## 📧 Contact

- **Phone**: +1 514-895-0961
- **Email**: Cathfrancois@gmail.com

---

**Last Updated**: 2024
**Version**: 1.0.0