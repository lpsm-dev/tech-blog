---
title: How to Publish Your Obsidian Notes to Your Blog
subtitle: A complete guide to publishing your digital garden
description: Learn how to publish your Obsidian notes to your personal blog using this template, including all the necessary frontmatter configurations.
tags: [obsidian, guide, digital-garden, blogging]
created_date: 2023-12-16
featured_image: https://obsidian.md/images/banner.png
publish: true
---

# Publishing Your Obsidian Notes to Your Blog

This guide will walk you through how to publish your Obsidian notes to your blog using this template. The key is understanding how to properly format your notes with the correct frontmatter.

## Required Frontmatter

Every blog post must include these two essential fields in the frontmatter:

```yaml
---
title: Your Post Title # The main title of your post
publish: true # Must be true for the post to appear on your site
---
```

## Optional Frontmatter

While only `title` and `publish` are required, you can enhance your posts with these optional fields:

```yaml
---
subtitle: A shorter subtitle # Appears below the title
description: A brief summary # Used for SEO and post previews
tags: [tag1, tag2] # Categories for your post
created_date: YYYY-MM-DD # Publication date
featured_image: URL # Hero image for your post
---
```

## Frontmatter Fallbacks and Validation

The template includes smart fallbacks to handle missing or invalid frontmatter:

1. **Publishing Status**:

   - `publish: true` - Will publish the post
   - `publish: false` - Won't publish
   - No publish field - Defaults to not publishing
   - `draft: true` - Won't publish
   - `draft: false` - Will publish

2. **Dates**:

   - `created_date` - Handles multiple scenarios:
     - Valid date string (e.g., "2023-12-16") - Uses the specified date
     - Invalid date - Falls back to current date
     - Missing date - Falls back to current date
     - Malformed date - Falls back to current date
   - `updated_date` - Similar handling:
     - Only shown if it's a valid date newer than created_date
     - Invalid dates are ignored
     - Missing dates are ignored

3. **Optional Fields**:
   - `subtitle`, `description`, `tags` - Can be safely omitted
   - `featured_image` - Post displays properly without it
   - Empty or invalid fields are handled gracefully

## Publishing Workflow

1. Create your note in Obsidian
2. Add the required frontmatter at the top of your note
3. Set `publish: true` when you're ready to make it public
4. Place the note in the `Blog` folder
5. Commit and push your changes
6. The site will automatically rebuild and publish your new post

## Tips for Better Publishing

1. **Consistent Naming**: Use descriptive, URL-friendly filenames for your posts
2. **Images**: Store images in a dedicated folder and use relative paths
3. **Links**: Internal links will be automatically processed
4. **Drafts**: Set `publish: false` to keep posts private
5. **Organization**: Use tags to categorize your posts

## Troubleshooting

If your post isn't appearing on the site, check:

1. Is `publish: true` set in the frontmatter?
2. Is the file in the correct `Blog` folder?
3. Are there any syntax errors in the frontmatter?
4. Did you commit and push your changes?

Remember, only posts with `publish: true` will appear on your site. This allows you to keep work-in-progress posts private until they're ready for publication.
