# Tailwind CSS Setup Guide

This project now supports Tailwind CSS alongside the existing custom CSS.

## Quick Start

### Option 1: Using CDN (For Experimentation)
The `about.html` page uses Tailwind via CDN. Visit `/about.html` to see it in action.

### Option 2: Production Build (Recommended)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build Tailwind CSS:**
   ```bash
   npm run build:css
   ```

3. **Watch for changes (development):**
   ```bash
   npm run watch:css
   ```

4. **Build Jekyll site:**
   ```bash
   bundle exec jekyll serve
   ```

## Project Structure

```
├── assets/css/
│   ├── input.css          # Tailwind input file (edit this)
│   └── output.css         # Generated CSS (don't edit)
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Node dependencies
```

## Using Tailwind in Your Pages

### Method 1: Link the generated CSS
```html
<link rel="stylesheet" href="/assets/css/output.css">
```

### Method 2: Use CDN (quick testing)
```html
<script src="https://cdn.tailwindcss.com"></script>
```

## Custom Components

Pre-configured components in `assets/css/input.css`:

```html
<!-- Primary button -->
<button class="btn-primary">Click me</button>

<!-- Outline button -->
<button class="btn-outline">Click me</button>

<!-- Card -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

## Custom Colors

Available in your Tailwind config:

- `primary` - #4A9EFF (cyan blue)
- `primary-hover` - #7BB8FF
- `dark-bg` - #000000
- `dark-secondary` - #0a0a0a
- `light-bg` - #f5f5f5
- `light-secondary` - #ffffff

Usage:
```html
<div class="bg-primary text-dark-bg">Content</div>
```

## Dark Mode

Tailwind dark mode is configured with class strategy:

```html
<html class="dark">
  <div class="bg-white dark:bg-black">
    <!-- Adapts based on dark class -->
  </div>
</html>
```

## GitHub Actions

The workflow `.github/workflows/build-tailwind.yml` automatically:
1. Installs Node dependencies
2. Builds Tailwind CSS
3. Builds Jekyll site
4. Uploads artifacts

## Comparison: Custom CSS vs Tailwind

### Your Current Approach (Custom CSS)
✅ Highly optimized
✅ Full control
✅ Smaller bundle
❌ Slower prototyping

### With Tailwind
✅ Faster development
✅ Consistent design system
✅ Responsive utilities
❌ Larger initial bundle (mitigated with purging)

## Best Practices

1. **Use purging in production** (already configured in tailwind.config.js)
2. **Keep custom CSS for complex components**
3. **Use Tailwind for layout and spacing**
4. **Define custom utilities in input.css**

## Examples

Check `/about.html` for a full example page built with Tailwind CSS.

## Support

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
