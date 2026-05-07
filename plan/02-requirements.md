# 02 - Requirements

## 1. Purpose
Dokumen ini menjelaskan kebutuhan website portofolio frontend pribadi milik fauzan azmi alfiansyah.

## 2. Product Scope
Website ini digunakan untuk menampilkan profil profesional, skill utama, project pilihan, dan kontak secara ringkas, jelas, dan menarik.

## 3. Target Users
- Recruiter
- Technical reviewer
- Calon klien
- Kolaborator

## 4. Functional Requirements

### FR-01 Hero Section
**Deskripsi:** Website harus memiliki hero section yang memperkenalkan nama, role, dan value proposition secara cepat.  
**Acceptance Criteria:**
- Nama dan role tampil jelas di area atas.
- Terdapat CTA ke project dan kontak.
- Informasi utama terlihat tanpa perlu scroll jauh di desktop.[web:46]

### FR-02 Featured Projects
**Deskripsi:** Website harus menampilkan project unggulan sebagai fokus utama portofolio.  
**Acceptance Criteria:**
- Menampilkan 3–5 project pilihan.[web:42]
- Setiap project memiliki nama, deskripsi singkat, stack, peran, dan link demo/GitHub.[web:42][web:50]
- Project dapat dipindai cepat tanpa klik berlapis.[web:38][web:40]

### FR-03 Skills Section
**Deskripsi:** Website menampilkan teknologi dan tools yang dikuasai.  
**Acceptance Criteria:**
- Skill dikelompokkan dengan rapi, misalnya frontend, backend, database, tools.
- Stack utama seperti React, Vite, JavaScript, Spring Boot, MySQL dapat terlihat jelas.[cite:16][cite:17]

### FR-04 About Section
**Deskripsi:** Website menampilkan ringkasan profil singkat.  
**Acceptance Criteria:**
- About tidak terlalu panjang.
- Menjelaskan latar belakang, fokus pengembangan, dan minat profesional.

### FR-05 Contact Section
**Deskripsi:** Website menyediakan cara mudah untuk menghubungi pemilik portofolio.  
**Acceptance Criteria:**
- Email dan link profesional tampil jelas.[web:40][web:41]
- Terdapat tombol/link ke GitHub, LinkedIn, dan CV.[web:41]
- Contact mudah ditemukan dari navigation atau CTA.[web:46]

### FR-06 Responsive Navigation
**Deskripsi:** Website memiliki navigasi sederhana ke setiap section utama.  
**Acceptance Criteria:**
- Navigation berisi section penting saja.
- Navigasi mudah digunakan di mobile.
- Tidak membutuhkan terlalu banyak klik untuk mencapai section tujuan.[web:38][web:40]

## 5. Non-Functional Requirements

### NFR-01 Responsiveness
- Website harus nyaman di mobile, tablet, dan desktop.[web:47][web:50]

### NFR-02 Performance
- Gambar dan aset dioptimalkan agar loading cepat.[web:50]

### NFR-03 Accessibility
- Teks terbaca jelas, kontras memadai, dan gambar memiliki alt text.[web:50]

### NFR-04 Maintainability
- Konten project mudah diperbarui dari data terpusat.
- Komponen dipisah secara modular.

## 6. Constraints
- Frontend only, tanpa backend.
- Dibangun dengan React + Vite sesuai preferensi stack user.[cite:16][cite:17]
- Fokus MVP satu halaman scroll.

## 7. Edge Cases
- Tidak ada project demo live, hanya GitHub.
- Project screenshot belum tersedia.
- Pengunjung membuka dari layar kecil.
- Salah satu link eksternal tidak aktif.