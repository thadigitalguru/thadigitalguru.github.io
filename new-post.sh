#!/bin/bash

# Blog post creation script for Jekyll
# Usage: ./new-post.sh "Your Post Title"

if [ -z "$1" ]; then
    echo "Usage: ./new-post.sh \"Your Post Title\""
    exit 1
fi

# Get current date
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M:%S)

# Convert title to filename format
TITLE="$1"
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g')

# Create the post file
POST_FILE="_posts/${DATE}-${FILENAME}.md"

# Create post content
cat > "$POST_FILE" << EOF
---
layout: post
title: "$TITLE"
subtitle: "Brief description of your post"
date: $DATE $TIME +0300
author: Titus Kores
tags: [SEO, Digital Marketing]
categories: [Blog]
image: /assets/img/default-post.jpg
description: "Meta description for SEO (150-160 characters)"
---

## Introduction

Write your introduction here...

## Main Content

Your main content goes here...

## Conclusion

Wrap up your thoughts...

---

*What are your thoughts on this topic? Share your experience in the comments below!*
EOF

echo "✅ Created new post: $POST_FILE"
echo "📝 Edit the file to add your content"
echo "🏷️  Don't forget to update tags, subtitle, and description"
echo "🖼️  Add a featured image to /assets/img/ and update the image field"
EOF
