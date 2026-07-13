# AllenPGreenMD — Working Rules

This folder is the **live allenpgreenmd.com website** (Next.js) and a **public git repo**.
Anything committed here can end up published. Treat commits as publishing.

## Git hygiene — READ BEFORE COMMITTING

1. **Never `git add -A` or `git add .`** Stage files explicitly by path, or run
   `git status` first and confirm every path. Blind adds sweep in junk.

2. **Only these belong in commits by default:**
   - `content/posts/*.md` (blog posts)
   - `public/images/blog/*` (post images)
   - specific `app/` / component files you actually edited
   Anything else — ask first.

3. **Never commit:**
   - `.claude/worktrees/` or any nested/embedded git repo
   - local working notes, audits, marketing plans, book-launch docs, scratch files
   - any new top-level file that isn't website code/content

4. **After staging, run `git status --short` and read it back to the user**
   before committing, so stray files get caught.

## Non-website work goes ELSEWHERE

Site audits, marketing plans, book-launch planning, and similar business work
do **not** belong in this folder. They live in `~/Desktop/AllenPGreen-Business/`
(`audits/`, `marketing/`, `book-launch/`). If the user asks for that kind of
work here, create/write the files in the business folder instead — never inside
this repo.

## Adding a blog post

See the user's memory note "Blog post conventions" for the full workflow
(custom frontmatter parser, raw `<figure>` for images, dynamic Article JSON-LD,
non-www URLs).
