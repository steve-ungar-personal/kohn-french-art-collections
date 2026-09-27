# Moving this project to another PC

GitHub only holds the site code and web images. The private files are
git-ignored on purpose and have to be moved by USB drive:

| What | Where it lives | How it moves |
|---|---|---|
| Site code, web images, data | GitHub `steve-ungar-personal/kohn-french-art-collections` | USB copy (or `git clone`) |
| `review/` (private pricing report, Word/PDF) | This PC only | USB copy |
| Original photos: `frame 1`–`frame 9`, `misc stamps/`, `philympia/`, `stamp sheets/`, `all images/`, `replaced photos/`, `overview.jpg` | This PC only | USB copy |
| `.env.local`, `.claude/`, `.vercel/` | This PC only | USB copy |
| Claude memory + chat history | `%USERPROFILE%\.claude\projects\C--Claude-Projects-kohn-french-art-collections\` | USB copy |
| Live site | Vercel (team `loser-league`, project `kohn-french-art-collections`) | Log in again, nothing to copy |

The USB copy contains the private pricing report and unblurred originals —
keep the drive private and delete `Kohn-migration` from it when done.
Never commit these files to GitHub (the repo is public).

## 1. Old PC

1. Commit and push any open work (`git status` should be clean).
2. In Command Prompt, from the project folder:

   ```
   scripts\copy-to-usb.cmd D
   ```

   This creates `D:\Kohn-migration\kohn-french-art-collections` and
   `D:\Kohn-migration\claude-project-data`, skipping `node_modules`, `dist`
   and `.astro`. Re-running it only copies changed files.

## 2. New PC

1. Install Git, Node.js (LTS) and the Claude desktop app; sign in to Claude
   with the same account.
2. Copy the project to the **same path** (Claude files its memory under a
   name built from this path):

   ```
   robocopy "D:\Kohn-migration\kohn-french-art-collections" "C:\Claude\Projects\kohn-french-art-collections" /E
   ```

3. Copy Claude's memory and history:

   ```
   robocopy "D:\Kohn-migration\claude-project-data" "%USERPROFILE%\.claude\projects\C--Claude-Projects-kohn-french-art-collections" /E
   ```

4. In the project folder:

   ```
   npm install
   git pull
   npx vercel login
   npx vercel link
   ```

   `vercel link`: pick team **loser-league**, project
   **kohn-french-art-collections**. Do not connect it to git — the site is
   deployed from the CLI on purpose. The first `git push` opens a browser to
   sign in to GitHub (Git Credential Manager).

5. Check: `npm run build` succeeds, then open the project in the Claude app
   and ask what it remembers about the Kohn site.

## 3. Day-to-day maintenance (same as before)

- New images: `npm run images`, add entries in `src/data/pages.ts` (+ `stamps.ts`).
- Build and deploy: `npm run build`, then `npx vercel deploy --prod`.
- Commit and push to GitHub after each change.
