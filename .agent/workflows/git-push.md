---
description: Pre-push workflow - increment portfolio version before every git push
---

# Git Push Workflow

This workflow MUST be followed before every `git push` to ensure the portfolio version is incremented correctly.

## Version Increment Rules

The portfolio version follows a `vX.Y` format where:
- **X (Major)** = commit count ÷ 10 (integer division)
- **Y (Minor)** = commit count % 10 (remainder)
- Examples:
  - 15 commits → v1.5
  - 20 commits → v2.0
  - 23 commits → v2.3
  - 29 commits → v2.9
  - 30 commits → v3.0
- The version is stored in the **"Personal Portfolio"** project card title in `app/projects/page.tsx`

## Pre-Push Steps

### 1. Check current commit count
// turbo
```bash
git rev-list --count HEAD
```

### 2. Calculate the version
- Major = commit_count ÷ 10
- Minor = commit_count % 10
- Version = vMAJOR.MINOR

### 3. Update the version in `app/projects/page.tsx`
Find the line in the `deployedProjects` array:
```tsx
title: "Personal Portfolio VX.Y",
```
Update to the calculated version.

### 4. Stage and commit
```bash
git add -A
git commit -m "Your commit message (vX.Y)"
```

### 5. Push to GitHub
// turbo
```bash
git push origin main
```

## Example

If you're about to make the 16th commit:
- Run `git rev-list --count HEAD` → shows 15
- After your commit, it will be 16
- Major = 16 ÷ 10 = 1, Minor = 16 % 10 = 6
- Update version to: `Personal Portfolio V1.6`

---

**IMPORTANT**: Always run `/git-push` or review this workflow before pushing to ensure version consistency!
