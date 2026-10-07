# Portfolio — xdante68

Personal portfolio website yang dibangun dengan Next.js 16, menampilkan profil, pendidikan, organisasi, skills, project, sertifikat, dan galeri kegiatan.

> **Live Demo:** [https://nekyollas-portfolio.vercel.app/]

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Bahasa | TypeScript |
| Styling | TailwindCSS v4 + CSS custom properties |
| Animasi | Framer Motion |
| Icons | Lucide React + React Icons (Font Awesome) |
| Arsitektur | Static Site Generation (SSG) — data-driven via file `.ts` |
| Deployment | Vercel |

---

## Sections

| Section | Deskripsi |
|---|---|
| **Hero** | Nama besar, roles, bio card, foto profil, tombol Download CV + Contact Me, social links |
| **About** | Bio panjang + Personal Details card (lokasi, email, universitas) |
| **Education** | Timeline pendidikan — UNAIR + SMA, dengan GPA dan highlight |
| **Organization** | Riwayat organisasi (OSIS, BEM FVokasi, BEM UNAIR, UNAIR Esports) dengan achievement |
| **Skills** | Grid skill icons — semua skill backed oleh project nyata |
| **Projects** | Project cards dengan thumbnail, tech stack badges, dan halaman detail per project (`/projects/[slug]`) |
| **Certificates** | Sertifikat real — klik untuk modal LinkedIn-style dengan PDF preview + download |
| **Gallery** | Masonry grid untuk foto kegiatan (KKN, lomba, proker, dll) |

---

## Fitur

- **Dark mode professional** — pure black (`#000`) + putih + neutral gray
- **LinkedIn-style certificate modal** — PDF preview via iframe + tombol download
- **Dynamic project detail pages** — SSG per project slug
- **Responsive** — mobile-first layout
- **SEO optimized** — static pages dengan meta tags yang rapi
- **Data-driven** — semua konten di `data/*.ts`, tinggal edit file tanpa sentuh component
- **Smooth animations** — Framer Motion scroll reveal + hover transitions
- **Download CV** — langsung dari Hero section
