# Titus Kores - Technical SEO & Digital Marketing Blog

Personal website and blog featuring technical SEO insights, growth marketing strategies, and digital marketing content.

## 🌐 Live Site

Visit the site at: [https://thadigitalguru.github.io](https://thadigitalguru.github.io)

## 📋 Overview

This is a minimalist Jekyll-based blog focused on:
- Technical SEO strategies and best practices
- Growth marketing insights
- AI's impact on search and digital marketing
- Data-driven SEO analysis techniques

## 🛠️ Tech Stack

- **Static Site Generator**: Jekyll
- **Hosting**: GitHub Pages
- **Theme**: Custom minimal design (inspired by Luke Harries)
- **Markdown**: Kramdown
- **Plugins**:
  - jekyll-seo-tag (SEO optimization)
  - jekyll-sitemap (automatic sitemap generation)
  - jekyll-feed (RSS feed)
  - jekyll-archives (post archives)

## 📁 Project Structure

```
thadigitalguru.github.io/
├── _posts/              # Blog articles
├── _layouts/            # Jekyll layout templates
├── _includes/           # Reusable HTML components
├── assets/
│   └── img/            # Images and media files
├── index.html          # Homepage
├── blog.html           # Blog listing page
├── contact.html        # Contact page
├── _config.yml         # Jekyll configuration
├── feed.xml            # RSS feed template
└── tags.html           # Tags archive page
```

## ✨ Features

### SEO Optimized
- Meta tags (description, author, robots, canonical)
- Open Graph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data (Schema.org)
- Automatic sitemap generation
- RSS feed for subscribers

### Performance
- Minified CSS and JavaScript
- Lazy loading images
- Optimized asset delivery
- Fast page load times

### Accessibility
- ARIA labels and semantic HTML
- Skip links for keyboard navigation
- Proper heading hierarchy
- Alt text for images
- High contrast dark/light themes

### User Experience
- Dark/light mode toggle with localStorage persistence
- Responsive design (mobile-first)
- Clean, minimal interface
- Easy navigation menu
- Article preview cards

## 🚀 Local Development

### Prerequisites

- Ruby (version 2.7+ recommended, 3.x for ARM Macs)
- Bundler
- Git

### Setup

1. Clone the repository:
```bash
git clone https://github.com/thadigitalguru/thadigitalguru.github.io.git
cd thadigitalguru.github.io
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser and visit:
```
http://localhost:4000
```

### Note for ARM Mac Users

If you're using Ruby 2.6.x on an ARM Mac (M1/M2), you may encounter compatibility issues with the google-protobuf gem. Consider upgrading to Ruby 3.x for local development.

## 📝 Adding New Posts

Create a new file in the `_posts/` directory with the format:
```
YYYY-MM-DD-title-of-post.md
```

Add front matter at the top:
```yaml
---
layout: post
title: Your Article Title
subtitle: Brief description
cover-img: /assets/img/your-image.jpg
thumbnail-img: /assets/img/your-image.jpg
share-img: /assets/img/your-image.jpg
tags: [SEO, Digital Marketing, Tag3]
author: Titus Kores
date: YYYY-MM-DD
---

Your content here...
```

## 🎨 Customization

### Theme Colors

The site uses CSS custom properties for easy theming. Edit the `:root` and `[data-theme=dark]` variables in `index.html`:

```css
:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #fff;
  --text-primary: #000;
  --text-secondary: #555;
  --border-color: #000;
}
```

### Site Configuration

Edit `_config.yml` to update:
- Site title and description
- Author information
- Social media links
- Permalink structure
- Plugin settings

## 📧 Contact

- **Email**: tituskores@gmail.com
- **X (Twitter)**: [@thadigitalguru](https://x.com/thadigitalguru)
- **LinkedIn**: [Titus Kores](https://www.linkedin.com/in/titus-kores-610201200/)
- **GitHub**: [@thadigitalguru](https://github.com/thadigitalguru)

## 📄 License

Copyright © 2024 Titus Kores. All rights reserved.

## 🤝 Contributing

This is a personal blog, but if you spot any issues or have suggestions, feel free to open an issue on GitHub.

---

Built with ❤️ using Jekyll and hosted on GitHub Pages
