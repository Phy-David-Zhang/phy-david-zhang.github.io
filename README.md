# Academic gateway of Dr. Zhang Chang-kai

Source of my academic gateway, the site that leads to all my work, served at [chx-zh.cc](https://chx-zh.cc).

## Notice

This repository is public only because GitHub Pages requires it. It is not an open-source project and no license is granted: all content, documents and design are © Zhang Chang-kai, all rights reserved.

Forking, mirroring or deploying this site, in whole or in part, under any other name or domain is not permitted. Because the site presents my identity, academic work and contact details, any such third-party deployment will be treated as impersonation and pursued accordingly. If you wish to reuse a specific document or piece of code, ask first.

The build and deployment instructions below, and the conventions in `AGENTS.md`, are notes for myself and for the coding agent that maintains this site. They are not an invitation for others to build or run it.

## Build locally

The site is a [Jekyll](https://jekyllrb.com) 4 site. Ruby is pinned in `.ruby-version` (use rbenv or any version manager that reads it) and gems in `Gemfile.lock`.

```sh
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://127.0.0.1:4000/>. Changes to `_config.yml` require restarting the server.

## Deploy

Pushing to `master` runs `.github/workflows/pages.yml`, which builds the site with the pinned Ruby and Jekyll versions and publishes `_site/` to GitHub Pages. The repository's Pages source must be set to **GitHub Actions** (Settings > Pages > Build and deployment > Source); the legacy branch-based builder uses its own Jekyll 3 and ignores the `Gemfile`.

Conventions for maintaining the site are in `AGENTS.md`.
