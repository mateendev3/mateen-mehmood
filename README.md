# Mateen Mehmood — Portfolio

My personal freelance portfolio. It's a static site built with **React 19, TypeScript, Vite, Tailwind CSS v4, Motion and Lucide**, and hosted on **GitHub Pages**. There's no backend, database or CMS: all content lives in typed files under `src/data/`.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173 (drafts visible)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

Requires Node 20+ (CI uses the version in `.nvmrc`).

---

## Where to edit content

| What | File |
| --- | --- |
| Name, title, hero text, email, social links, photo, availability, stats, About text, "Why work with me", process steps, Formspree ID | `src/data/profile.ts` |
| Services (homepage cards and `/services`) | `src/data/services.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Technologies and skills | `src/data/skills.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Navigation, page titles and meta descriptions, contact-form budget and timeline options | `src/data/site.ts` |
| Colours and theme tokens | `src/styles/index.css` (`:root` and `.dark`) |

**Anything left empty is hidden automatically.** That includes the email buttons, social icons, availability badge, testimonials section, empty skill groups and unpublished projects. Nothing shows up as a broken link or a fake placeholder.

### Before going live, fill in

- [ ] `profile.email`: turns on the email buttons and the email-based contact form
- [ ] `profile.socials[].url`: LinkedIn, GitHub, Upwork (leave any you don't use empty)
- [ ] `profile.photo`: e.g. `/images/profile/mateen.jpg` (square, at least 800×800). Until it's set, the hero shows a device illustration.
- [ ] `profile.contact.formspreeId` (optional, see [Contact form](#contact-form))
- [ ] `profile.availability`: only while it's accurate, e.g. `{ status: 'available', label: 'Available for new projects' }`
- [ ] `profile.stats`: only numbers you can verify
- [ ] Review `services.ts` and `skills.ts` so they list only what you want to be hired for
- [ ] Add real projects and delete the two sample entries

---

## Adding a project

1. Create a folder for its images: `public/images/projects/<slug>/`
   - `cover.png`: card image, ideally **1600×1000 (16:10)**
   - screenshots: phone screenshots at the device's native size work well; WebP or optimised PNG/JPG is best.
2. Open `src/data/projects.ts`, copy the `TEMPLATE` from the comment at the top, and fill it in:

```ts
{
  slug: 'layla',                         // → /projects/layla
  title: 'Layla',
  subtitle: 'One-line tagline',
  summary: 'Short description used on cards and in search results.',
  category: 'Mobile Apps',               // Mobile Apps | Web Applications | Custom Software | AI & Automation
  platforms: ['iOS', 'Android'],
  technologies: ['Flutter', 'Firebase'],
  coverImage: '/images/projects/layla/cover.png',
  coverAlt: 'Layla home screen on an iPhone',
  overview: 'What it does and who it serves.\n\nBlank lines create new paragraphs.',
  challenge: '…',
  solution: '…',
  myRole: ['Flutter feature development', 'Payments integration', 'Release management'],
  teamContext: 'Part of a 5-person product team.',
  features: [
    { title: 'Smart search', description: '…', image: { src: '/images/projects/layla/search.png', alt: 'Search screen', orientation: 'portrait' } },
  ],
  gallery: [
    { src: '/images/projects/layla/1.png', alt: 'Onboarding', orientation: 'portrait' },
    { src: '/images/projects/layla/web.png', alt: 'Web dashboard', orientation: 'landscape', caption: 'Admin dashboard' },
  ],
  results: ['Only genuine outcomes'],
  links: { appStore: 'https://apps.apple.com/…', playStore: 'https://play.google.com/…' },
  featured: true,       // show on the homepage (max 4 shown)
  published: true,      // false = only visible in `npm run dev`, with a "Draft" badge
  order: 1,             // optional: lower numbers come first
}
```

3. Run `npm run dev` to preview it, then commit and push. Everything else updates on its own: the projects grid, category filters (only categories with projects are shown), the case-study page, related projects, the sitemap and page metadata.

- **Edit** a project: change its entry.
- **Hide** a project: set `published: false`.
- **Remove** a project: delete its entry and its image folder.
- **Change featured work:** toggle `featured`.

**Honesty note:** use `myRole` and `teamContext` to say exactly what *you* did. Leave out `results` you can't back up; sections without content aren't rendered.

---

## Contact form

GitHub Pages can't run a backend, so the form works in one of three modes:

| Configuration | Behaviour |
| --- | --- |
| Formspree ID set | Submits directly to [Formspree](https://formspree.io) (free tier available), with validation and success/error messages. |
| Only `profile.email` set | The form opens the visitor's email app with the message pre-filled. |
| Neither | The form is hidden. In dev, a notice reminds you to configure it. |

To enable Formspree, create a form, copy its ID (the part after `https://formspree.io/f/`), and either put it in `profile.contact.formspreeId` or add a repository variable named `FORMSPREE_ID`. A form ID isn't a secret. Never put private API keys in this project, because everything in the frontend is public.

---

## Deployment (GitHub Pages)

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages → Build and deployment** and set **Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

The base path is detected automatically:

| Repository name | Site URL | Base path |
| --- | --- | --- |
| `username.github.io` | `https://username.github.io/` | `/` |
| `portfolio` (any other name) | `https://username.github.io/portfolio/` | `/portfolio/` |

You can override either value with the repository variables `BASE_PATH` and `SITE_URL`.

To build for a sub-path locally:

```bash
BASE_PATH=/portfolio SITE_URL=https://username.github.io/portfolio npm run build && npm run preview
```

### Custom domain

1. Add `public/CNAME` containing your domain only (e.g. `mateenmehmood.com`).
2. Configure DNS as described in GitHub's [custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. Set the domain under **Settings → Pages**. The workflow then builds with base `/` and the custom URL.

---

## How routing works on GitHub Pages

The site uses clean URLs like `/projects/layla` (React Router with `BrowserRouter`). GitHub Pages only serves files, so the build step (`build/static-seo.ts`) does three things:

1. **Writes a real HTML file for every page and published project** (`dist/projects/layla/index.html`, and so on). Direct visits and page refreshes return HTTP 200, and each file already includes that page's `<title>`, meta description, canonical URL and Open Graph and Twitter tags. Link previews on LinkedIn, Slack and WhatsApp work without JavaScript.
2. **Writes `404.html`.** Unknown URLs still load the app, which shows a styled 404 page. It's marked `noindex`.
3. **Generates `sitemap.xml` and `robots.txt`** from the same data. The sitemap needs `SITE_URL`, which CI sets automatically.

The page *body* is rendered by JavaScript. Google indexes JavaScript-rendered content. If you later need fully pre-rendered HTML bodies, the per-route HTML step is the place to add it.

---

## Project structure

```
build/static-seo.ts        Build plugin: per-route HTML, 404.html, sitemap, robots
public/images/…            Profile and project images
src/
  data/                    All editable content (see table above)
  types/                   Content types (Project, Service, Profile…)
  lib/                     Helpers: content selectors, SEO, utils
  hooks/                   useTheme (light/dark + persistence), useDocumentMeta
  components/
    layout/                Header, Footer, Layout, Logo
    ui/                    Button, Section, Chip, Icon, Reveal, ThemeToggle…
    home/                  Homepage sections
    projects/              ProjectCard, ProjectCover, DeviceIllustration
    contact/               ContactForm
  pages/                   Home, Services, Projects, ProjectDetails, About, Contact, NotFound
  styles/index.css         Design tokens + Tailwind setup
```

## Notes

- **Theme:** follows the system setting until the visitor toggles it. The choice is saved in `localStorage`, and an inline script in `index.html` applies it before first paint, so there's no flash of the wrong theme.
- **Motion:** animations use Motion's lightweight `LazyMotion` bundle and are reduced automatically when the visitor has *Reduce motion* turned on.
- **Fonts:** Inter (body) and Manrope (headings) are self-hosted via Fontsource. No third-party font requests.
- **Icons:** services, skills and so on reference icons by name (see `src/components/ui/Icon.tsx`). To use another [Lucide icon](https://lucide.dev/icons), import it there and add it to the `IconName` type.
