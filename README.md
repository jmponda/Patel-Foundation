# Patel Foundation Trust — Website

A fast, modern, single-page static website. No build step. Hosts free on GitHub Pages.

## Publish on GitHub Pages (about 5 minutes)

1. Create a free account at https://github.com and click **New repository**.
   - Name it `patel-foundation` (or `<your-username>.github.io` to get a root URL).
   - Set it to **Public**, then click **Create repository**.
2. Click **uploading an existing file**, drag in **everything in this folder** (`index.html`, `assets/`, `.nojekyll`, `README.md`) and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, pick branch `main` and folder `/ (root)`, then **Save**.
4. After about a minute your site is live at `https://<your-username>.github.io/patel-foundation/`.

### Custom domain (optional)
In **Settings → Pages → Custom domain**, enter your domain (for example `patelfoundation.org`) and follow GitHub's DNS instructions. Then tick **Enforce HTTPS**.

## Editing content

| What | Where |
|---|---|
| Contact email | `index.html` (search for `impact@patel.it`) and `assets/js/main.js` → `SITE` |
| Projects and stories | `assets/js/main.js` → `PROJECTS` array |
| Page text (About, Mission, Recent projects timeline, Kenya, Donate, Governance) | `index.html` |
| Colours (earth palette) and fonts | `assets/css/styles.css` → `:root` |
| Theme colour code (Health, Education & skills, Community, Entrepreneurship, Partnerships) | `assets/css/styles.css` → `--th-*` variables. Add `t-health`, `t-education`, `t-community`, `t-enterprise` or `t-partners` to a section frame or card. In `PROJECTS`, set `theme: "enterprise"` to override a card's colour. |
| Medical camp gallery | `index.html` → section `#gallery` |
| Social share image | `assets/img/og-image.jpg` |
| Logo | `assets/img/logo.png` |

### Photos
- **Real project photos** load from the Steelmakers (smlzim.com) website and postimg.cc.
- **Stock photos** load from Unsplash (free to use under the Unsplash License). In `main.js` they are the `U("photo-…")` entries.

To swap in your own photos (recommended whenever you have real ones):
1. Save the photos into `assets/img/projects/`.
2. In `PROJECTS`, replace the URLs with local paths, e.g. `images: ["assets/img/projects/eye-clinic-1.jpg"]`.

Projects without photos show a coloured placeholder, so you can add photos one by one.

### Contact form
The form opens the visitor's email app with the message ready to send, so no server is needed. For a form that submits directly, sign up for a free service such as Formspree and point the form at it.

### Partner logos
Partners currently show as name tiles with generic icons. Once a partner gives permission to use its logo:
1. Save the logo as `assets/img/partners/<name>.png` (square, transparent background works best).
2. In `index.html`, replace that partner's `<span class="mono">…</span>` with
   `<img class="logo" src="assets/img/partners/<name>.png" alt="<Partner name> logo">`.
