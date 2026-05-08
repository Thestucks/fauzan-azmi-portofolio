## R — Role
Siapa AI dalam konteks ini?

AI berperan sebagai **Senior Frontend Developer & UI Designer** yang membantu membangun website portofolio personal dari awal hingga deploy. AI bertanggung jawab atas arsitektur komponen, implementasi desain, konfigurasi build/deploy, serta memastikan kualitas visual dan teknis sesuai standar profesional.

---

## T — Task
Apa tugas utama project ini?

Membangun **website portofolio single-page** untuk Fauzan Azmi Alfiansyah sebagai fresh graduate IT, dengan tujuan:
1. Menampilkan identitas profesional (Hero section dengan headline, tagline, dan social links)
2. Menampilkan **featured projects** (IHCS, Setia Jaya Training Center, Kujang Tracking System) dan other projects dalam bentuk card interaktif
3. Menampilkan **skills & tech stack** yang dikategorikan (UI & UX, Frontend, Backend, Database, Tools & Others) dengan level indikator (Confident / Familiar / Beginner)
4. Menyediakan **About Me** dengan key points (Education, Focus, Goal)
5. Menyediakan **Contact section** dengan link ke Email, GitHub, LinkedIn, dan fitur download CV (PDF)
6. Men-deploy ke **GitHub Pages** via `gh-pages`

---

## C — Context
Tech stack, constraints, standards:

- Tech:
  - **React 19** — library UI utama (komponen berbasis function component + hooks)
  - **Vite 8** — build tool & dev server
  - **Tailwind CSS 4** — utility-first CSS framework (menggunakan `@tailwindcss/vite` plugin)
  - **Lucide React** — icon library
  - **Google Fonts (Inter)** — typography
  - **gh-pages** — deployment ke GitHub Pages

- Approach:
  - **Single Page Application (SPA)** — semua section dalam satu halaman scroll (Hero → Projects → Skills → About → Contact)
  - **Component-based architecture** — komponen reusable (Navbar, Footer, SectionTitle, ProjectCard, SkillGroup, Icons)
  - **Static data** — data project (`projects.js`) dan skills (`skills.js`) disimpan sebagai file JavaScript lokal, bukan dari API/CMS
  - **Mobile-first responsive** — layout menggunakan Tailwind responsive breakpoints (`sm:`, `md:`, `lg:`)
  - **Dark theme** — palet warna berbasis slate (950–100) dengan aksen indigo (#6366f1)
  - **Smooth scroll** — navigasi antar section dengan `scroll-behavior: smooth`

- Audience:
  - Recruiter / HR tech
  - Mentor / reviewer teknis
  - Calon klien freelance
  - Teman kolaborasi / tim project

---

## C — Constraints
Yang TIDAK boleh:

- ❌ Tidak menggunakan backend/server — murni static site
- ❌ Tidak ada CMS / admin panel
- ❌ Tidak ada multi-language / i18n
- ❌ Tidak ada dark/light mode toggle (fixed dark theme)
- ❌ Tidak ada blog atau halaman detail terpisah per project
- ❌ Tidak menggunakan React Router — navigasi hanya via anchor links (#section)
- ❌ Tidak ada analytics / tracking

Yang WAJIB:

- ✅ Responsive di semua device (mobile, tablet, desktop)
- ✅ Navbar sticky dengan efek backdrop-blur saat scroll
- ✅ Mobile hamburger menu dengan animasi open/close
- ✅ Project card menampilkan: title, role, description, highlights, tech stack badges, link GitHub & demo
- ✅ Skills dikelompokkan per kategori dengan level indikator (dot color)
- ✅ Contact section dengan link Email, GitHub, LinkedIn, dan download CV
- ✅ Footer dengan social links dan tombol back-to-top
- ✅ Custom scrollbar styling
- ✅ Animasi fade-in, fade-in-up, dan slide-in pada elemen
- ✅ Deploy otomatis ke GitHub Pages (`npm run deploy`)
- ✅ Base path dikonfigurasi untuk GitHub Pages (`/fauzan-azmi-portofolio/`)
- ✅ SEO dasar (meta description, title tag, semantic HTML)

---

## O — Output
Format yang diinginkan:

**Struktur File Project:**

```
fauzan-azmi-portofolio/
├── index.html                    # Entry point HTML
├── vite.config.js                # Konfigurasi Vite (base path + plugins)
├── package.json                  # Dependencies & scripts
├── plan/
│   ├── 01-brainstorm.md          # Dokumen brainstorming
│   └── 02-details.md             # Dokumen detail (file ini)
└── src/
    ├── main.jsx                  # React entry point
    ├── App.jsx                   # Root component (layout)
    ├── index.css                 # Design tokens, animasi, base styles
    ├── assets/
    │   └── CV_Fauzan Azmi Alfiansyah.pdf
    ├── components/
    │   ├── Navbar.jsx            # Sticky navbar + mobile menu
    │   ├── Footer.jsx            # Footer + social links
    │   ├── SectionTitle.jsx      # Reusable section heading
    │   ├── ProjectCard.jsx       # Card untuk setiap project
    │   ├── SkillGroup.jsx        # Grup skill per kategori
    │   └── Icons.jsx             # Custom SVG icons (GitHub, LinkedIn)
    ├── sections/
    │   ├── HeroSection.jsx       # Hero: headline, CTA, social links
    │   ├── ProjectsSection.jsx   # Featured & other projects grid
    │   ├── SkillsSection.jsx     # Skills grid + legend
    │   ├── AboutSection.jsx      # About me + key points
    │   └── ContactSection.jsx    # Contact links + CV download
    └── data/
        ├── projects.js           # Data 4 project (3 featured, 1 other)
        └── skills.js             # Data 5 kategori skill
```

**Hasil Akhir:**
- Website single-page portofolio yang sudah live di: `https://thestucks.github.io/fauzan-azmi-portofolio/`
- Visual dark theme modern dengan warna aksen indigo
- Fully responsive (mobile → desktop)
- Build production ~243 KB JS + ~28 KB CSS (gzipped: ~73 KB total)
