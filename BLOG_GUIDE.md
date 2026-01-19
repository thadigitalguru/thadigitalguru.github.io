# Blog Management Guide

## Quick Start - Creating New Posts

### 1. Using the Script (Recommended)
```bash
./new-post.sh "Your Amazing Blog Post Title"
```

This creates a new post file with:
- Proper filename format (`YYYY-MM-DD-title.md`)
- Complete front matter template
- SEO-optimized structure
- Placeholder content sections

### 2. Manual Creation
Create a file in `_posts/` with format: `YYYY-MM-DD-title.md`

## Post Front Matter Template

```yaml
---
layout: post
title: "Your Post Title"
subtitle: "Brief description that appears in previews"
date: 2026-01-19 13:30:00 +0300
author: Titus Kores
tags: [SEO, Digital Marketing, Technical SEO]
categories: [Blog, Tutorials]
image: /assets/img/your-post-image.jpg
description: "SEO meta description (150-160 characters max)"
---
```

## Required Fields
- `title`: Main post title
- `date`: Publication date with timezone
- `layout`: Always use `post`

## Optional but Recommended
- `subtitle`: Shows in blog listing and post header
- `image`: Featured image (16:9 aspect ratio recommended)
- `description`: Meta description for SEO
- `tags`: For categorization and SEO
- `categories`: Broader groupings

## Image Guidelines

### Featured Images
- **Size**: 1200x675px (16:9 ratio)
- **Format**: JPG or PNG
- **Location**: `/assets/img/`
- **Naming**: Use descriptive names (e.g., `seo-audit-checklist.jpg`)

### Image Optimization
- Compress images before uploading
- Use descriptive alt text
- Consider lazy loading for performance

## Content Structure Best Practices

### 1. Introduction Hook
Start with a compelling opening that addresses the reader's pain point.

### 2. Clear Headings
Use H2 and H3 tags for structure:
```markdown
## Main Section
### Subsection
```

### 3. Actionable Content
- Include practical tips
- Use bullet points and numbered lists
- Add code examples when relevant

### 4. Call-to-Action
End with engagement:
```markdown
---
*What's your experience with [topic]? Share your thoughts in the comments below!*
```

## SEO Optimization

### Tags Strategy
- Use 3-5 relevant tags
- Mix broad and specific terms
- Examples: `[SEO, Technical SEO, Google Analytics, Website Optimization]`

### Categories
- Keep to 1-2 categories per post
- Use consistent category names
- Examples: `[Blog, Tutorials, Case Studies]`

### Meta Description
- 150-160 characters
- Include target keyword
- Make it compelling for click-through

## Publishing Workflow

1. **Create Post**: Use `./new-post.sh "Title"`
2. **Add Content**: Write your post content
3. **Add Image**: Upload featured image to `/assets/img/`
4. **Update Front Matter**: Complete all fields
5. **Preview**: Run `bundle exec jekyll serve` to preview
6. **Commit & Push**: Git commit and push to publish

## Local Development

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve

# View at http://localhost:4000
```

## Post Layout Features

### New Layout Includes:
- ✅ Featured image display
- ✅ Reading time calculation
- ✅ Author bio section
- ✅ Social sharing buttons
- ✅ Previous/next navigation
- ✅ Tag and category display
- ✅ Mobile-responsive design
- ✅ SEO optimization

### Blog Listing Features:
- ✅ Card-based grid layout
- ✅ Image previews
- ✅ Reading time estimates
- ✅ Tag previews
- ✅ Hover effects
- ✅ Mobile-responsive

## Content Ideas for Your Blog

### Technical SEO
- Site speed optimization
- Core Web Vitals guide
- Schema markup tutorials
- Technical audits

### Growth Marketing
- Conversion optimization
- A/B testing strategies
- Analytics setup guides
- ROI measurement

### AI & Search
- AI impact on SEO
- ChatGPT for content
- Voice search optimization
- Future of search

## Troubleshooting

### Common Issues
1. **Images not showing**: Check file path and case sensitivity
2. **Date format errors**: Use `YYYY-MM-DD HH:MM:SS +TIMEZONE`
3. **Build failures**: Check YAML front matter syntax

### Getting Help
- Check Jekyll documentation
- Validate YAML syntax online
- Test locally before pushing

---

Happy blogging! 🚀
