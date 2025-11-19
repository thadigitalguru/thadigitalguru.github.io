# Claude Development Guide for thadigitalguru.github.io

**Project Type:** Jekyll Static Site  
**Hosted On:** GitHub Pages  
**Primary Focus:** Digital Marketing and SEO Blog  
**Last Updated:** November 19, 2025

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Working with Claude](#working-with-claude)
3. [Common Tasks & Commands](#common-tasks--commands)
4. [Project Structure](#project-structure)
5. [Content Creation Guidelines](#content-creation-guidelines)
6. [Development Workflow](#development-workflow)
7. [SEO Best Practices](#seo-best-practices)
8. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a Jekyll-based static site blog focused on digital marketing and SEO. The site is:
- Forked from `daattali/beautiful-jekyll`
- Currently 17 commits ahead and 12 commits behind the original repo
- Deployed automatically via GitHub Pages
- Using MIT license

### Key Technologies
- **Jekyll 4.x** - Static site generator
- **Liquid** - Templating language
- **Markdown** - Content format
- **HTML/CSS/JavaScript** - Frontend (60.3% HTML, 30.9% CSS, 6.5% JS)
- **SCSS** - Styling (0.1%)
- **Ruby** - Build tool (2.2%)

### Site Information
- **URL:** https://thadigitalguru.github.io/
- **Repository:** https://github.com/thadigitalguru/thadigitalguru.github.io
- **Branch:** master
- **License:** MIT

---

## Working with Claude

### Desktop Commander Setup

To work effectively on this project with Claude, ensure Desktop Commander has access to your project directory:

```bash
# Check current configuration
DC: get_config

# Set allowed directory (adjust path to your local clone)
DC: set_config_value key="allowedDirectories" value=["/Users/yourname/path/to/thadigitalguru.github.io"]
```

### Best Practices for Asking Claude

**✅ GOOD Requests:**
- "Create a new blog post about GPT-5 and SEO optimization"
- "Analyze my _config.yml and suggest improvements"
- "Find all posts that mention 'digital marketing'"
- "Update the footer layout in _includes/footer.html to add Twitter"
- "Debug this Jekyll build error: [paste full error output]"
- "Optimize images in the assets folder"
- "Review my latest post for SEO best practices"

**❌ AVOID:**
- "Make my site better" (too vague)
- "Fix everything" (too broad)
- Requests without providing file paths or context
- Not specifying which file to edit
- Forgetting to mention if you want drafts or published posts

### Claude's Capabilities for This Project

#### 1. Content Creation
- Write SEO-optimized blog posts in markdown
- Generate compelling titles and meta descriptions
- Create structured content with proper headings
- Add front matter with categories and tags
- Optimize content for target keywords

#### 2. Code Editing
- Modify layouts in `_layouts/`
- Update includes in `_includes/`
- Edit configuration in `_config.yml`
- Customize CSS/SCSS styling
- Add new JavaScript functionality

#### 3. File Management
- Create new posts with correct naming: `YYYY-MM-DD-title.md`
- Organize assets and images
- Manage drafts in `_drafts/`
- Structure navigation and menus

#### 4. Development Support
- Run Jekyll build commands
- Analyze build errors and suggest fixes
- Test site locally before deployment
- Review git status and manage commits

#### 5. SEO & Analytics
- Audit on-page SEO elements
- Suggest meta tag improvements
- Review structured data implementation
- Optimize page load performance

---

## Common Tasks & Commands

### Starting Development

```bash
# Navigate to project
cd ~/path/to/thadigitalguru.github.io

# Install/update dependencies
bundle install

# Start local server with live reload
bundle exec jekyll serve --livereload

# Start server with drafts visible
bundle exec jekyll serve --livereload --drafts

# Access site
# Open browser to: http://localhost:4000
```

### Creating Content

**Ask Claude:**
```
Create a new blog post about [topic] with:
- SEO-optimized title
- Meta description under 160 characters
- 1500+ words
- Proper heading structure
- Internal linking opportunities
- Call-to-action at the end
```

**Manual Creation:**
```bash
# Create new post file
touch _posts/2025-11-19-my-new-post.md

# Or create draft
touch _drafts/draft-post-title.md
```

### Building & Testing

```bash
# Build site (outputs to _site/)
bundle exec jekyll build

# Build with verbose output
bundle exec jekyll build --verbose

# Clean build artifacts
bundle exec jekyll clean

# Check for configuration issues
bundle exec jekyll doctor
```

### Git Workflow

```bash
# Check status
git status

# View changes
git diff

# Stage all changes
git add .

# Stage specific file
git add _posts/2025-11-19-new-post.md

# Commit with descriptive message
git commit -m "Add blog post about GPT-5 SEO strategies"

# Push to GitHub (triggers automatic deployment)
git push origin master

# View commit history
git log --oneline -10
```

### Working with Claude via Desktop Commander

```bash
# Read a file
"Read my _config.yml file and suggest SEO improvements"

# Edit a file
"Update _layouts/post.html to add social sharing buttons"

# Search for content
"Find all blog posts that mention 'keyword research'"

# Create new content
"Write a 2000-word blog post about local SEO strategies"

# Analyze structure
"List all files in _posts/ and show me their front matter"

# Run commands
"Run bundle exec jekyll build and tell me if there are any errors"
```

---

## Project Structure

```
thadigitalguru.github.io/
├── _data/              # YAML data files
├── _includes/          # Reusable HTML components
│   ├── footer.html
│   ├── header.html
│   └── nav.html
├── _layouts/           # Page templates
│   ├── default.html
│   ├── post.html
│   └── page.html
├── _posts/             # Published blog posts (YYYY-MM-DD-title.md)
├── _drafts/            # Draft posts (optional)
├── assets/             # Static files
│   ├── css/
│   ├── js/
│   └── images/
├── blog/               # Blog listing pages
├── clients/            # Client-related pages
├── _config.yml         # Main configuration
├── Gemfile             # Ruby dependencies
├── Gemfile.lock        # Locked dependency versions
├── README.md           # Project documentation
└── index.html          # Homepage
```

### Important Files to Know

**`_config.yml`** - Site-wide configuration
```yaml
title: Your Site Title
description: Your site description
url: https://thadigitalguru.github.io
author: Your Name
# ... other settings
```

**`Gemfile`** - Ruby dependencies
```ruby
source "https://rubygems.org"
gem "jekyll"
gem "jekyll-feed"
gem "jekyll-seo-tag"
# ... other gems
```

**Post Front Matter** - Metadata for each post
```yaml
---
layout: post
title: "Your Post Title"
subtitle: "Optional subtitle"
date: 2025-11-19
categories: [SEO, Digital-Marketing]
tags: [keyword1, keyword2]
author: Your Name
---
```

---

## Content Creation Guidelines

### Blog Post Structure

Every blog post should follow this structure:

```markdown
---
layout: post
title: "Compelling, SEO-Optimized Title (Under 60 Characters)"
subtitle: "Engaging subtitle that adds context"
date: 2025-11-19
categories: [SEO, Digital-Marketing]
tags: [keyword-research, on-page-seo, content-marketing]
author: ThaDigitalGuru
description: "Meta description under 160 characters that includes primary keyword"
image: /assets/images/post-featured-image.jpg
---

# Introduction (H1 - automatic from title)

Opening paragraph that hooks the reader and includes the primary keyword naturally.

## Main Section 1 (H2)

Content with supporting details, examples, and insights.

### Subsection (H3)

More detailed information or step-by-step instructions.

## Main Section 2 (H2)

Continue with structured content...

## Conclusion

Summarize key takeaways and include a clear call-to-action.

---

**Related Posts:**
- [Link to related post 1]
- [Link to related post 2]
```

### SEO Checklist for Each Post

- [ ] Title includes primary keyword (under 60 characters)
- [ ] Meta description is compelling (under 160 characters)
- [ ] URL slug is clean and keyword-rich
- [ ] H1 tag (title) is unique and descriptive
- [ ] H2 and H3 tags structure content logically
- [ ] Primary keyword appears in first 100 words
- [ ] Images have descriptive alt text
- [ ] Internal links to related posts (2-3 minimum)
- [ ] External links to authoritative sources
- [ ] Content is 1000+ words (1500+ ideal)
- [ ] Call-to-action is clear and compelling
- [ ] Categories and tags are relevant

### Writing Style Guide

**Tone:**
- Professional yet conversational
- Authoritative but approachable
- Educational and helpful

**Formatting:**
- Use short paragraphs (2-3 sentences)
- Include bullet points and numbered lists
- Add subheadings every 300-400 words
- Use bold for emphasis sparingly
- Include code blocks for technical content
- Add images, charts, or screenshots when relevant

**Keywords:**
- Use primary keyword naturally 5-7 times
- Include semantic variations
- Don't keyword stuff
- Focus on user intent

---

## Development Workflow

### Typical Development Session

1. **Start Local Server**
   ```bash
   bundle exec jekyll serve --livereload
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Create/Edit Content**
   - Use Claude to generate or edit content
   - Preview changes at localhost:4000

4. **Test Changes**
   - Check formatting
   - Verify links work
   - Test on mobile viewport
   - Validate HTML/CSS

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "Descriptive message"
   git push origin master
   ```

6. **Verify Deployment**
   - Wait 1-2 minutes for GitHub Pages build
   - Check live site at https://thadigitalguru.github.io

### Working with Drafts

```bash
# Create draft
touch _drafts/my-draft-post.md

# View drafts locally
bundle exec jekyll serve --drafts

# Publish draft (move to _posts with date)
mv _drafts/my-draft-post.md _posts/2025-11-19-my-draft-post.md
```

### Using Claude for Batch Operations

**Example 1: Audit all posts**
```
Read all files in _posts/ and create a report showing:
- Posts missing meta descriptions
- Posts under 1000 words
- Posts without images
- Posts with broken internal links
```

**Example 2: Bulk updates**
```
Update all posts in _posts/ to add this footer:
---
*Need help with SEO? [Contact us today!](/contact)*
```

**Example 3: Content analysis**
```
Analyze the top 5 most recent posts and suggest:
- Keyword optimization improvements
- Better internal linking opportunities
- Content gaps to fill with new posts
```

---

## SEO Best Practices

### On-Page SEO Essentials

**Title Tags:**
- 50-60 characters maximum
- Include primary keyword near the beginning
- Make it compelling and click-worthy
- Each page should have unique title

**Meta Descriptions:**
- 150-160 characters
- Include primary keyword
- Write for humans, not search engines
- Include a call-to-action
- Each page should have unique description

**URL Structure:**
```
✅ GOOD: /seo-keyword-research-guide/
❌ BAD:  /p?=123&cat=seo
```

**Heading Tags:**
```html
<h1>Primary Topic - Only ONE per page</h1>
<h2>Main Sections</h2>
<h3>Subsections</h3>
<h4>Minor points</h4>
```

**Image Optimization:**
```html
<!-- Good image tag -->
<img src="/assets/images/seo-guide.jpg" 
     alt="Complete SEO keyword research guide with tools and strategies"
     width="800" 
     height="600">
```

### Technical SEO

**Sitemap:**
- Jekyll generates automatically
- Location: `/sitemap.xml`
- Submit to Google Search Console

**Robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://thadigitalguru.github.io/sitemap.xml
```

**Structured Data:**
Add to posts for rich snippets:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Your Post Title",
  "author": {
    "@type": "Person",
    "name": "ThaDigitalGuru"
  },
  "datePublished": "2025-11-19"
}
```

### Content SEO

**Internal Linking:**
- Link to 2-3 related posts in each article
- Use descriptive anchor text
- Create topic clusters around main themes

**External Linking:**
- Link to authoritative sources
- Open external links in new tab
- Use nofollow for sponsored/untrusted links

**Content Length:**
- Minimum: 1000 words
- Ideal: 1500-2500 words
- Long-form: 3000+ words for pillar content

### Performance Optimization

```bash
# Compress images before uploading
# Use tools like TinyPNG or ImageOptim

# Minify CSS and JS
# Jekyll can handle this with plugins

# Enable caching
# GitHub Pages handles this automatically

# Use a CDN for assets (optional)
# Consider Cloudflare for additional speed
```

---

## Troubleshooting

### Common Jekyll Errors

**Error: "Could not find gem..."**
```bash
# Solution: Install missing dependencies
bundle install
```

**Error: "Permission denied"**
```bash
# Solution: Install locally
bundle install --path vendor/bundle
```

**Error: "Liquid Exception"**
```bash
# Solution: Check for syntax errors in:
# - Liquid tags {{ }} or {% %}
# - YAML front matter
# - Unclosed tags
```

**Error: "GitHub Pages build failed"**
```bash
# Solution:
# 1. Check GitHub email for error details
# 2. Test locally first: bundle exec jekyll build
# 3. Ensure _config.yml is valid YAML
# 4. Check for unsupported plugins
```

### Debugging with Claude

**Share errors like this:**
```
I'm getting this error when running Jekyll:

[Paste full error output]

Here's my _config.yml:
[Paste relevant configuration]

Can you help me fix this?
```

**Get detailed diagnostics:**
```
Run these commands and show me the output:
1. bundle exec jekyll doctor
2. bundle exec jekyll build --verbose
3. git status
```

### Performance Issues

**Slow build times:**
```bash
# Exclude unnecessary files in _config.yml
exclude:
  - vendor/
  - node_modules/
  - .git/

# Use incremental builds (development only)
bundle exec jekyll serve --incremental
```

**Broken links:**
```
Ask Claude: "Check all markdown files for broken internal links and list them"
```

---

## Quick Reference Commands

### Jekyll
```bash
jekyll serve              # Start server
jekyll serve --drafts     # Include drafts
jekyll build              # Build site
jekyll clean              # Clean build files
jekyll doctor             # Check for issues
jekyll new-theme          # Create new theme
```

### Bundle
```bash
bundle install            # Install dependencies
bundle update             # Update all gems
bundle update jekyll      # Update specific gem
bundle exec [command]     # Run command with bundle context
```

### Git
```bash
git status                # Check status
git add .                 # Stage all changes
git commit -m "message"   # Commit changes
git push                  # Push to remote
git pull                  # Pull latest changes
git log                   # View commit history
git diff                  # View changes
```

### Claude Commands
```
"Read [file]"                           # Read file content
"Write a post about [topic]"            # Create content
"Update [file] to [changes]"            # Edit file
"Find all posts with [keyword]"         # Search content
"Run [command]"                         # Execute command
"List files in [directory]"             # Directory listing
"Analyze [file] for SEO"                # SEO audit
```

---

## Resources

### Official Documentation
- Jekyll Docs: https://jekyllrb.com/docs/
- Liquid Syntax: https://shopify.github.io/liquid/
- GitHub Pages: https://docs.github.com/en/pages

### SEO Resources
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com/
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo

### Useful Tools
- Markdown Editor: Typora, VS Code
- Image Optimization: TinyPNG, ImageOptim
- SEO Analysis: Screaming Frog, Ahrefs, SEMrush
- Performance: Google PageSpeed Insights

---

## Notes for Claude

### Context to Always Remember
- This is a **digital marketing and SEO** focused blog
- Content should be **authoritative and helpful**
- Always prioritize **SEO best practices**
- Keep **technical accuracy** high
- Use **professional but friendly** tone
- Include **actionable takeaways** in every post

### When Creating Content
1. Research topic thoroughly (use web search if needed)
2. Structure content with clear headings
3. Include examples and case studies
4. Add internal links to related posts
5. Optimize for target keywords naturally
6. Include meta descriptions and tags
7. Suggest relevant images or diagrams

### When Editing Code
1. Always test changes locally first
2. Follow existing code style
3. Comment complex logic
4. Validate HTML/CSS
5. Test responsive design
6. Check cross-browser compatibility

### Quality Checklist Before Committing
- [ ] Content is spell-checked and grammatically correct
- [ ] All links work (internal and external)
- [ ] Images are optimized and have alt text
- [ ] SEO elements are in place
- [ ] Code is formatted properly
- [ ] Local build succeeds without errors
- [ ] Changes are tested in browser

---

**Last Updated:** November 19, 2025  
**Maintained by:** ThaDigitalGuru with Claude AI assistance
**Version:** 1.0

---

## Getting Help

If you need assistance:
1. **Ask Claude** specific questions with context
2. **Check Jekyll docs** for technical issues
3. **Review Git history** for recent changes
4. **Test locally** before pushing to production
5. **Share error messages** completely for faster debugging

Remember: Claude can help with almost any aspect of this project - from content creation to code debugging to SEO optimization. Just provide clear context and specific requirements!
