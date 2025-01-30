---
title: SEO Implementation Guide for Obsidian Blogger
description: 'Learn how SEO is implemented in Obsidian Blogger with detailed explanations of metadata, frontmatter, and technical optimizations.'
publish: true
slug: seo-implementation-guide
created_date: 2024-01-20
tags:
  - seo
  - optimization
  - guide
meta_title: 'Complete SEO Implementation Guide for Obsidian Blogger'
meta_description: 'Detailed guide on how SEO is implemented in Obsidian Blogger, including frontmatter usage, metadata handling, and technical optimizations.'
keywords:
  - obsidian seo
  - blog optimization
  - frontmatter seo
  - metadata optimization
og_title: 'Master SEO in Obsidian Blogger'
og_description: 'Learn how Obsidian Blogger implements SEO through frontmatter, metadata, and technical optimizations'
og_type: article
twitter_card: summary_large_image
---

# SEO Implementation in Obsidian Blogger

This guide explains how SEO is specifically implemented in Obsidian Blogger, showing you how to optimize your blog posts using the built-in features.

## Frontmatter Configuration

In Obsidian Blogger, SEO starts with the frontmatter of your markdown files. Here's how each frontmatter field affects your SEO:

```yaml
---
title: 'Your Post Title'
description: 'Your post description'
meta_title: 'Custom SEO Title'
meta_description: 'Custom SEO Description'
keywords:
  - keyword1
  - keyword2
og_title: 'Custom Social Title'
og_description: 'Custom Social Description'
og_type: article
twitter_card: summary_large_image
---
```

### Title Hierarchy
1. `meta_title`: Used specifically for SEO (if provided)
2. `title`: Falls back as SEO title if meta_title is not provided
3. `og_title`: Custom title for social sharing
4. `twitter_title`: Specific title for Twitter (falls back to og_title)

### Description Hierarchy
1. `meta_description`: Primary SEO description
2. `description`: Falls back as SEO description
3. `og_description`: Custom description for social sharing
4. `twitter_description`: Specific for Twitter (falls back to og_description)

## Technical Implementation

### BaseHead Component
The `BaseHead.astro` component handles all SEO-related meta tags:

1. **Basic Meta Tags**
```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="generator" content={Astro.generator} />
```

2. **SEO Meta Tags**
```html
<title>{finalMetaTitle}</title>
<meta name="title" content={finalMetaTitle} />
<meta name="description" content={finalMetaDescription} />
<meta name="keywords" content={keywords.join(', ')} />
<meta name="author" content={author} />
```

3. **Open Graph Tags**
```html
<meta property="og:type" content={og_type} />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={finalOgTitle} />
<meta property="og:description" content={finalOgDescription} />
<meta property="og:image" content={absoluteOgImage} />
```

4. **Twitter Cards**
```html
<meta property="twitter:card" content={twitter_card} />
<meta property="twitter:title" content={finalTwitterTitle} />
<meta property="twitter:description" content={finalTwitterDescription} />
<meta property="twitter:image" content={absoluteTwitterImage} />
```

## Image Optimization

### Featured Images
- Featured images are automatically optimized
- Alt text is required for accessibility and SEO
- Images are served with proper dimensions
- Lazy loading is implemented for better performance

```html
<img
    width={1020}
    height={510}
    src={featured_image}
    alt={featured_image_alt || ''}
/>
```

## URL Structure

URLs are automatically optimized:
1. Clean, descriptive URLs based on file names
2. Proper handling of special characters
3. SEO-friendly URL structure
4. Automatic canonical URL generation

```html
<link rel="canonical" href={canonical_url || canonicalURL} />
```

## Performance Optimization

Built-in performance features that affect SEO:

1. **CSS Optimization**
```css
/* Efficient loading of fonts */
@import url('https://api.fontshare.com/v2/css?f[]=onest@400,500,600,700&f[]=sora@400,600,700&display=swap');
```

2. **Responsive Design**
```css
@media (max-width: 768px) {
    /* Mobile-friendly optimizations */
}
```

## Content Structure

The blog automatically implements SEO-friendly content structure:

1. **Proper Heading Hierarchy**
```html
<h1>{title}</h1>
{subtitle && <div class="subtitle">{subtitle}</div>}
```

2. **Semantic HTML**
```html
<article>
    <div class="prose">
        <div class="title">
            <!-- Content -->
        </div>
    </div>
</article>
```

## How to Use

1. **Create a New Post**
   - Create a markdown file in `src/content/blog/`
   - Add the required frontmatter
   - Write your content using proper markdown structure

2. **Optimize Images**
   - Place images in the public directory
   - Use relative paths in your markdown
   - Provide descriptive alt text

3. **Add Meta Information**
   - Always include a description
   - Add relevant keywords
   - Customize social sharing metadata if needed

4. **Check Technical Aspects**
   - Ensure proper heading hierarchy
   - Use descriptive links
   - Include alt text for all images

## Best Practices

1. **Frontmatter**
   - Always provide a unique title and description
   - Keep titles under 60 characters
   - Keep descriptions between 150-160 characters

2. **Content Structure**
   - Use only one H1 per page
   - Structure content with proper heading hierarchy
   - Use descriptive anchor text for links

3. **Images**
   - Always provide alt text
   - Use descriptive file names
   - Optimize image sizes before uploading

4. **URLs**
   - Use descriptive file names for your markdown files
   - Avoid special characters in file names
   - Keep URLs concise and meaningful

## Conclusion

Obsidian Blogger's SEO implementation provides a robust foundation for search engine optimization. By properly utilizing the frontmatter fields and following the built-in conventions, your blog posts will be well-optimized for search engines and social sharing. 
