---
title: 'First-Time Obsidian Git Setup: Complete Guide'
description: 'A step-by-step guide for setting up Obsidian Git for beginners, including repository creation and plugin configuration'
publish: true
created_date: 2024-01-20
slug: git-setup-for-obsidian
tags:
  - obsidian
  - git
  - tutorial
---

# First-Time Obsidian Git Setup Guide

This guide walks you through setting up Obsidian Git from scratch, perfect for beginners who are just starting with version control for their Obsidian vault.

## Prerequisites
- [Git](https://git-scm.com/downloads) installed on your computer
- [GitHub](https://github.com) account
- [Obsidian](https://obsidian.md) installed with your vault created

## Step-by-Step Setup

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "obsidian-vault")
4. Keep it private if you want your notes private
5. Don't initialize with README
6. Click "Create repository"

### Step 2: Initialize Your Obsidian Vault with Git

Open your terminal and run these commands:

```bash
# Navigate to your Obsidian vault
cd path/to/your/obsidian/vault

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-repository.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Install and Configure Obsidian Git Plugin

1. Open Obsidian
2. Go to Settings (gear icon)
3. Select "Community plugins"
4. Click "Browse" and search for "Obsidian Git"
5. Install and enable the plugin

### Step 4: Configure Plugin Settings

In Obsidian settings, under "Community plugins" → "Obsidian Git":

1. Set basic configurations:
   - Backup interval: 10 (or your preferred minutes)
   - Commit message: "vault backup: {{date}}"
   - Pull updates on startup: Enabled
   - Push on backup: Enabled

2. Optional but recommended settings:
   - Show status bar: Enabled
   - Auto pull interval: 10 minutes
   - Disable notifications: According to preference

## Using Obsidian Git

### Basic Operations

1. **Manual Backup**
   - Click the Git icon in the left ribbon
   - Select "Commit and push all changes"

2. **View Changes**
   - Click "View changes" in the Git menu
   - Review what files have been modified

3. **Pull Changes**
   - Use "Pull" from the Git menu to get updates
   - Useful when working across multiple devices

### Common Issues and Solutions

1. **Authentication Issues**
   ```bash
   # If you're prompted for credentials, set up SSH or use:
   git config --global credential.helper cache
   ```

2. **Merge Conflicts**
   - Pull changes before making modifications
   - Use the built-in merge conflict resolver
   - When in doubt, make a backup before resolving

3. **Large Files**
   ```bash
   # Add to .gitignore if needed
   echo "large-file.pdf" >> .gitignore
   ```

## Best Practices

1. **Regular Commits**
   - Let automatic backup handle regular saves
   - Manually commit important changes with meaningful messages

2. **Organize Your Vault**
   - Keep a clean structure
   - Use .gitignore for private or large files

3. **Backup Strategy**
   - Enable automatic backups
   - Periodically verify your remote repository

## Conclusion

With these settings in place, your Obsidian vault is now version-controlled and backed up to GitHub. The plugin will handle most operations automatically, but you can always perform manual operations when needed.

Remember to:
- Pull changes when starting work on a different device
- Check the status bar for sync status
- Keep your Git plugin updated

Now you're ready to safely version control your Obsidian vault and sync across devices!
