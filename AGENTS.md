# Maintaining this site

Jekyll 4 site of Dr. Zhang Chang-kai (chx-zh.cc): the academic gateway, leading to the projects, articles and comments. Never describe it as a "personal website" or "main entrance". The owner writes the content; agents handle structure, styling and tooling. Keep the site looking and behaving exactly as it does unless a visible change is explicitly requested.

## Toolchain

- Ruby from `.ruby-version` (rbenv: `export PATH="$HOME/.rbenv/shims:$PATH"`; system Ruby is too old), gems via Bundler. Preview: `bundle exec jekyll serve --livereload`; restart after editing `_config.yml`.
- Deployment: push to `master` runs `.github/workflows/pages.yml` (GitHub Actions, Pages source must be "GitHub Actions"). Development happens on a branch and is merged into `master`.
- Plugins: jekyll-feed, jekyll-seo-tag (`{% seo title=false %}`; the layout writes `<title>` itself), jekyll-sitemap. Do not add plugins without need; GitHub's legacy builder is not used.

## Layout of the repository

- Top-level `*.md` / `index.html` are the pages; `permalink: /:title`. `_pages/*.md` are pages with explicit permalinks.
- Never edit the four `layout: null` files in `_pages/` (`All-Roads-Lead-To-Rome.md`, `My-Road-to-a-Final-Theory.md`, `Two-Kinds-of-Unification.md`, `NucParPhys-Online.md`) or `assets/HTMLFiles/`: they are self-contained exports with their own CSS and Font Awesome and are out of scope by decision.
- `_layouts/default.html` holds the header/footer; `post.html`, `list.html`, `blog.html` add per-layout CSS through `head_css`.
- `_data/`: `contact.yml` (address), `social.yml` (footer links), `gallery.yml` (one travel cover per place: `src`, `date`, `name`, `title`, `place`) and `galleries.yml` (lightbox photos: `src`, `title`, `place`, grouped to a cover by `place`).
- `css/main.css` is the single site stylesheet (HTML5 UP base plus the grid components `.work-row`, `.work-list`, `.contact-grid`, `.gallery-grid`, `.form-grid`, driven by `--gutter` / `--bleed` / `--thumb-indent`). `css/list.css` and `css/post.css` are small per-layout overrides. No Sass, no build step.
- `js/main.js` only wires GLightbox (CDN) to `#blog a.glightbox`.

## Conventions

- Every page has `title:` and `description:` front matter (the home page has only `description:`; its title is the site title).
- Internal links and images are root-relative (`/Exhibition`, `/images/x.png`); downloadable assets use `{{ '/assets/x.pdf' | relative_url }}`. No `{{ site.url }}` in new links.
- Thumbnails and gallery covers carry `width`/`height`, `loading="lazy"`, `decoding="async"`; the avatar stays eager. `.image img` has `height: auto`, so the attributes only reserve the aspect ratio.
- Images: research title-page thumbnails are 1080 px wide 8-bit PNGs (2x their largest rendered width). Travel photos in `images/gallery/` and `images/galleries/` are shown full size in the lightbox: never resize or recompress them. Never rename or delete files under `images/` or `assets/`; they may be linked from outside the site.
- The footer and address icons (`github`, `snapchat` for Resume, `telegram` for Email, `podcast` for Address) are deliberate choices. Change the delivery mechanism if needed, never the glyphs.
- Markup uses semantic classes and CSS rules; no inline `style` attributes, no Skel grid classes (`row`, `6u`, `12u$`), no jQuery.
- Delete code only after grep-verifying it is unused across layouts, pages, data and JS (excluding `_site/` and `.jekyll-cache/`).

## Verifying changes

- Compare against the previous commit, not against memory: build `HEAD` into a temp dir (`git archive HEAD | tar -x -C /tmp/x && bundle exec jekyll build -s /tmp/x -d /tmp/x/_site`), serve it on another port, and compare element geometry and computed styles on every page at 1920, 1440, 1280, 980, 736, 480 and 375 px. Zero differences is the expected result for technical cleanups.
- Beware of cached CSS and lingering device-emulation overrides in the preview tab when two builds appear to differ.
- Keep verification scripts and scratch files outside the repository.

## Git habits

- Do not commit until the owner has reviewed the preview and given explicit consent.
- One topic per commit; a topic may span several files, but unrelated changes never share a commit. Split a file across commits when it contains several topics.
- Commit messages: a single descriptive line in the imperative, stating what changed and why (no conventional-commit prefixes).
- Never commit `_site/`, `.jekyll-cache/`, `.cursor/` or editor files (see `.gitignore`).
