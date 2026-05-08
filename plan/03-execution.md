# Execution — Fauzan Azmi Portofolio

## Step 1: Brainstorming & Perencanaan

### Prompt
> "Bantu saya brainstorm ide untuk website portofolio personal sebagai fresh graduate IT. Saya ingin menampilkan project, skills, dan kontak. Targetnya recruiter dan klien freelance."

### RTCC-O Check
- R: ✅ — AI sebagai UI/UX consultant & developer advisor
- T: ✅ — Brainstorm ide, tentukan scope MVP, user flow, dan referensi visual
- C: ✅ — React + Vite + Tailwind CSS, single page, static data
- C: ✅ — Tidak ada backend/CMS, fokus MVP (Hero, Projects, Skills, About, Contact)
- O: ✅ — Dokumen brainstorm terstruktur (`01-brainstorm.md`)

### AI Response
AI menghasilkan dokumen brainstorm lengkap meliputi:
- Ringkasan ide dan tujuan utama
- Target user (Recruiter, Mentor, Klien, Tim)
- Scope MVP vs di luar scope
- User flow 6 langkah
- Referensi visual (clean, modern, professional, minimal, confident)
- Preferensi teknis dan risiko project

### Review
- [✅] Sesuai constraints? — Ya, scope terjaga, tidak keluar dari MVP
- [✅] Format sesuai? — Terstruktur dalam markdown sections
- [✅] Bisa dipahami? — Bahasa jelas, poin-poin actionable
- Changes: Menambahkan Open Questions di akhir (1 halaman vs multi-page, bilingual, modal vs halaman detail)

---

## Step 2: Inisialisasi Project & Struktur Kode

### Prompt
> "Buatkan website portofolio single-page menggunakan React + Vite + Tailwind CSS. Buat struktur komponen modular: Navbar, Footer, SectionTitle, dan sections terpisah (Hero, Projects, Skills, About, Contact). Gunakan dark theme dengan warna aksen indigo."

### RTCC-O Check
- R: ✅ — AI sebagai Senior Frontend Developer
- T: ✅ — Setup project, buat semua komponen dan sections
- C: ✅ — React 19, Vite 8, Tailwind CSS 4, dark theme, komponen modular
- C: ✅ — Tidak ada router (anchor links saja), static data files
- O: ✅ — Project React berjalan dengan semua section dan komponen

### AI Response
AI menghasilkan keseluruhan codebase:
- **Config:** `vite.config.js`, `package.json`, `index.html`
- **Styling:** `index.css` — design tokens (warna slate, aksen indigo #6366f1), animasi (fade-in, fade-in-up, slide-in), custom scrollbar, Google Fonts Inter
- **Components:** `Navbar.jsx` (sticky + mobile menu), `Footer.jsx`, `SectionTitle.jsx`, `ProjectCard.jsx`, `SkillGroup.jsx`, `Icons.jsx`
- **Sections:** `HeroSection.jsx`, `ProjectsSection.jsx`, `SkillsSection.jsx`, `AboutSection.jsx`, `ContactSection.jsx`
- **Data:** `projects.js` (4 project), `skills.js` (5 kategori)

### Review
- [✅] Sesuai constraints? — Dark theme, single page, no router, modular components
- [✅] Format sesuai? — Komponen terpisah per file, data di folder `data/`
- [✅] Bisa dipahami? — Nama file dan komponen self-explanatory
- Changes: Tidak ada perubahan signifikan, langsung bisa dijalankan

---

## Step 3: Konfigurasi Deploy & GitHub Pages

### Prompt
> "Deploy project ini ke GitHub Pages. Konfigurasi base path di Vite, tambahkan script deploy dengan gh-pages."

### RTCC-O Check
- R: ✅ — AI sebagai DevOps assistant
- T: ✅ — Konfigurasi deployment ke GitHub Pages
- C: ✅ — `gh-pages` package, base path `/fauzan-azmi-portofolio/`
- C: ✅ — Harus static, tidak ada server-side rendering
- O: ✅ — Website live di GitHub Pages

### AI Response
AI melakukan:
1. Set `base: '/fauzan-azmi-portofolio/'` di `vite.config.js`
2. Tambah scripts `predeploy` (build) dan `deploy` (gh-pages) di `package.json`
3. Install `gh-pages` sebagai devDependency
4. Konfigurasi asset path agar semua resource (CSS, JS, gambar, PDF) resolve dengan benar

### Review
- [✅] Sesuai constraints? — Static deploy, tidak perlu server
- [✅] Format sesuai? — Standard gh-pages workflow
- [✅] Bisa dipahami? — 3 langkah: build → publish → live
- Changes: Perlu fix path asset icon dan CV setelah deploy pertama

---

## Step 4: Update Konten & Fix CV Download

### Prompt
> "Update isi konten project, skills, dan about sesuai data saya. Pastikan CV bisa di-download dengan benar."

### RTCC-O Check
- R: ✅ — AI sebagai content integrator
- T: ✅ — Update data project, skills, about me, dan fix CV download
- C: ✅ — Data project nyata (IHCS, Setia Jaya, Kujang Tracking), skills sesuai kemampuan
- C: ✅ — CV harus bisa di-download, link GitHub & LinkedIn valid
- O: ✅ — Konten final yang akurat dan CV downloadable

### AI Response
AI melakukan:
1. Update `projects.js` — 3 featured projects (IHCS, Setia Jaya Training Center, Kujang Tracking System) + 1 other project
2. Update `skills.js` — 5 kategori: UI & UX (Figma, Canva, Stitch, Adobe Photoshop), Frontend (React, JS, Tailwind, HTML/CSS, Vite, PHP), Backend (Spring Boot, Java, Express.js, REST API), Database (MySQL, PostgreSQL), Tools (Git, VS Code, Antigravity, Postman)
3. Fix CV import di `ContactSection.jsx` — import langsung dari `src/assets/` agar Vite memproses path dengan benar
4. Update deskripsi About Me sesuai profil

### Review
- [✅] Sesuai constraints? — Semua data personal akurat
- [✅] Format sesuai? — Data terstruktur, level skill sesuai (confident/familiar/beginner)
- [✅] Bisa dipahami? — Project descriptions dalam bahasa Indonesia, clear
- Changes: Fix path CV dari public folder ke import asset Vite

---

## Step 5: Final Deploy & Verifikasi

### Prompt
> Final deployment: `git add .`, `git commit`, `git push`, `npm run deploy`

### RTCC-O Check
- R: ✅ — User sebagai deployer
- T: ✅ — Push code final dan deploy ke production
- C: ✅ — GitHub repo + GitHub Pages
- C: ✅ — Semua section berfungsi, responsive, CV downloadable
- O: ✅ — Website live dan bisa diakses publik

### AI Response
Proses deploy berhasil:
```
> vite build
✓ 1744 modules transformed.
dist/index.html                                       0.66 kB │ gzip:  0.39 kB
dist/assets/CV_Fauzan Azmi Alfiansyah-CjBDtN1H.pdf  179.16 kB
dist/assets/index-BsZcqSjP.css                       27.74 kB │ gzip:  5.69 kB
dist/assets/index-B-S67is0.js                       214.96 kB │ gzip: 67.13 kB
✓ built in 440ms
Published
```

### Review
- [✅] Sesuai constraints? — Static build, deployed successfully
- [✅] Format sesuai? — Build output clean, no errors
- [✅] Bisa dipahami? — Published confirmation dari gh-pages
- Changes: Tidak ada — final version