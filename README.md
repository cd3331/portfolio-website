# Portfolio Website

A clean, modern portfolio website for developers built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Project showcase with dynamic loading
- Clean, professional design
- Easy to customize

## Getting Started

1. Open `index.html` in your browser to view the site
2. Customize the content to match your information

## Customization Guide

### Personal Information (index.html)

1. **Hero Section** - Update your name and title:
   - Line 27: Change "Your Name" to your actual name
   - Line 28: Update "Software Developer & Problem Solver" to your title
   - Line 29-31: Update the description

2. **About Section** - Update your bio and skills:
   - Lines 46-54: Replace with your own story
   - Lines 58-63: Update the skill tags with your skills

3. **Contact Section** - Add your contact information:
   - Line 88: Update email address
   - Line 92: Update GitHub username
   - Line 96: Update LinkedIn username

### Projects (script.js)

Edit the `projects` array (lines 2-47) to add your own projects:

```javascript
{
    title: "Your Project Name",
    description: "Brief description of your project",
    tags: ["Tech1", "Tech2", "Tech3"],
    image: "🚀", // Any emoji or leave empty
    github: "https://github.com/yourusername/repo",
    demo: "https://your-demo-url.com"
}
```

### Colors and Styling (styles.css)

Customize the color scheme by editing CSS variables (lines 2-10):

- `--primary-color`: Main brand color
- `--secondary-color`: Accent color
- `--text-dark`: Primary text color
- `--text-light`: Secondary text color

## File Structure

```
portfolio-projects/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Deployment

You can deploy this site to any static hosting service:

- **GitHub Pages**: Push to GitHub and enable Pages in repository settings
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Import the project from GitHub
- **Cloudflare Pages**: Connect your repository

## Browser Support

Works on all modern browsers including Chrome, Firefox, Safari, and Edge.
