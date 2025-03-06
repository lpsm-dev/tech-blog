import { join } from 'path';
import { writeFileSync, mkdirSync } from 'fs';
import { format } from 'date-fns';
import slugify from 'slugify';

const args = process.argv.slice(2);
const title = args[0];

if (!title) {
  console.error('Please provide a post title');
  process.exit(1);
}

const slug = slugify(title, { lower: true });
const date = format(new Date(), 'yyyy-MM-dd');
const postsDir = join(process.cwd(), 'posts');

// Create posts directory if it doesn't exist
mkdirSync(postsDir, { recursive: true });

const template = `---
title: "${title}"
description: ""
publish: false
created_date: ${date}
tags: []
---

# Introduction

Write your post content here...
`;

const filePath = join(postsDir, `${slug}.md`);
writeFileSync(filePath, template);

console.log(`Created new post: ${filePath}`);