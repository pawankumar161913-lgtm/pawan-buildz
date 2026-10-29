# PAWAN BUILDZ — Python Developer Portfolio (PWA)

Dark futuristic portfolio + installable web app for **Pawan (Pawan Buildz)**.
Zero-cost stack: plain HTML/CSS/JS, no backend, no API keys. Free hosting ready.

## 📁 What's inside

```
pawan-buildz/
├── index.html                 # whole site: Home, Projects, About, Skills, Contact, Install
├── 404.html                   # friendly not-found page (GitHub Pages uses it automatically)
├── manifest.webmanifest       # PWA manifest (name, icons, colours)
├── sw.js                      # service worker (offline support)
├── robots.txt                 # search-engine rules + sitemap pointer
├── sitemap.xml                # sitemap (update URLs after deploy)
├── README.md                  # this file
└── assets/
    ├── css/styles.css         # all styling (dark + neon green + cyan)
    ├── js/
    │   ├── projects.js        # ★ EDIT THIS to add/edit projects
    │   └── app.js             # rendering, search, filters, PWA install, nav
    ├── icons/                 # favicon, PWA icons (192/512/maskable), apple icon
    └── images/
        ├── profile.png        # your photo
        └── og-cover.png       # social-share cover image
```

## 🚀 Run locally (preview)

Any static server works. Easiest options:

```bash
cd pawan-buildz
python -m http.server 8000
# open http://localhost:8000
```

or with Node:

```bash
npx serve pawan-buildz
```

> Service workers need `http://localhost` or `https` — opening `index.html`
> directly from disk works, but Install/offline features need the server above.

## ✏️ How to edit

### Add / replace a project (30 seconds)
1. Open `assets/js/projects.js`.
2. Copy one project block, paste at the **top** of the list, edit fields:
   - `title`, `description`, `technologies` (list), `category`, `status`, `repo`, `demo`
   - `category` must be one of: `Python`, `Automation`, `Web Apps`, `Data Tools`
   - `status` must be one of: `Completed`, `In progress`, `Sample`
   - No link yet? Use `"#"` — the site shows "Coming soon" automatically.
3. The 3 built-in cards are **labelled SAMPLE placeholders** — delete them once
   you add real projects. Never invent fake GitHub links.

### Edit skills
Open `index.html`, find the `Skills` section (`id="skills"`), edit/reorder the
`<li class="skill">` cards. The last dashed card is "Currently learning…".

### Your email (already added ✅)
The contact card links to `p23988087@gmail.com` via `mailto:`. To change it,
edit the `#emailCard` link in `index.html`.

### Add social links
In the Contact section, the third card is a placeholder. Replace it with real
anchor(s), e.g. LinkedIn / X, only for profiles you own.

### Your photo (already added ✅)
`assets/images/profile.png` is your portrait photo. To swap it later, replace
the file (keep the name) — no code changes needed. Keep the `alt` text descriptive.

## 🌐 Deploy FREE on GitHub Pages (step by step)

1. **Create a GitHub account** (free): https://github.com/signup
2. **Create a repository**: `+` → New repository → name it `pawan-buildz` →
   Public → Create. (Keep the name lowercase, no spaces.)
3. **Upload files**: in the repo click *Add file → Upload files*, drag in the
   **contents** of the `pawan-buildz/` folder (index.html must be at repo root),
   then Commit.
4. **Enable hosting**: repo *Settings → Pages* → Source: `Deploy from a branch`
   → Branch: `main`, folder `/ (root)` → Save.
5. **Get your URL** (after ~1–2 min): `https://YOUR-USERNAME.github.io/pawan-buildz/`
6. **Update SEO/canonical URLs**: in `index.html`, `sitemap.xml`, `robots.txt`,
   replace every `https://pawankumar161913-lgtm.github.io/pawan-buildz/` with your
   real URL. Same for `og:url` / `og:image` meta tags.
7. **Republish updates anytime**: edit files → upload/commit again (or
   `git push`). Changes go live in ~1 minute.

No custom domain needed — the free `*.github.io` subdomain is enough.

## 🔍 Make "Pawan Buildz" discoverable on Google

1. **Search Console**: go to https://search.google.com/search-console →
   Add property (URL prefix = your Pages URL) → verify via the HTML-file method
   (download the file, add to repo root, deploy, Verify).
2. **Submit sitemap**: Search Console → Sitemaps → enter `sitemap.xml` → Submit.
3. **Request indexing**: top URL-inspection bar → paste your homepage URL →
   *Request indexing*. Repeat for the site after big updates.
4. **Consistent branding**: use exactly **"Pawan Buildz"** everywhere —
   page title, GitHub profile name/bio, repo description, social bios.
   Add the site URL to your GitHub profile (`github.com/YOUR-USERNAME` → Edit profile → Website).
5. **Get linked**: share the URL on your GitHub profile README, project READMEs
   and any profiles you own. Fresh content (new projects) helps re-crawling.

> Honest note: these steps make the site *eligible* to appear when people
> search "Pawan Buildz". No one can guarantee #1 rankings — beware anyone who
> promises that. Testimonials, addresses, credentials or results are not
> included anywhere here; only add them if they're real.

## 📲 Install as an app (PWA)

- **Android/Chrome/Edge**: site menu (⋮) → *Install app* / *Add to Home screen*.
- **iPhone/Safari**: Share → *Add to Home Screen*.
- **Desktop Chrome/Edge**: install icon in the address bar.
- The on-page Install section shows an **Install App** button automatically
  when the browser allows it.

## ✅ Checks before sharing publicly

- [x] Real projects with live repo + demo links (Code Vexa, SmartSpend AI)
- [x] Real email added (p23988087@gmail.com)
- [x] Your photo added
- [ ] Added LinkedIn/X links if you want them (Contact section)
- [ ] Updated canonical/OG/sitemap URLs to the real deployed URL
- [ ] Tested on phone + desktop; search + filter buttons work

## 🔒 Notes

- No database, backend, tracking or cookies. The contact email button uses a
  `mailto:` link; form-free by design (free hosting has no server).
- All JavaScript is vanilla; fonts load from Google Fonts with system fallbacks.
