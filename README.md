# Portfolio — Nekyolla

Website portfolio pribadi yang dibangun dengan Next.js 16, menampilkan profil, pengalaman kerja, pendidikan, organisasi, skills, project, sertifikat, dan galeri kegiatan.

> **Live Demo:** [https://portfolio-astral-express.vercel.app/](https://portfolio-astral-express.vercel.app/)

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Bahasa | TypeScript |
| Styling | TailwindCSS v4 + design tokens (CSS custom properties) |
| Tipografi | Newsreader (serif display) · Inter (teks) · Geist Mono (label) — self-hosted via `next/font` |
| Animasi | Framer Motion + Lenis (smooth scroll) |
| Icons | Lucide React + React Icons (Simple Icons, Font Awesome) — semuanya di-bundle, tanpa CDN |
| Arsitektur | Static Site Generation (SSG) — data-driven via file `.ts` |
| Deployment | Vercel |

---

## Desain

- **Editorial serif** — judul memakai Newsreader (alternatif gratis yang mirip Tiempos/Anthropic Serif), body memakai Inter.
- **Light & dark theme** — palet kertas ivory yang hangat dan charcoal, dengan aksen *clay*. Mengikuti setelan OS, bisa diganti lewat toggle (pilihan disimpan, transisi lingkaran via View Transitions API).
- **Gerak yang tenang** — smooth scroll (Lenis), reveal judul per kata, blur-fade saat scroll, marquee, parallax foto. Semua otomatis mati untuk pengunjung yang memilih *reduced motion*.

## Sections

| Section | Deskripsi |
|---|---|
| **Hero** | Nama besar (serif), bio, roles, tombol Download CV + Get in touch, social links, foto berbentuk arch |
| **About** | Bio panjang + detail (lokasi, kampus, program, GPA, minat, email + tombol copy) |
| **Experience** | Pengalaman kerja/magang: peran, instansi, poin pekerjaan, dan tech stack |
| **Education** | Daftar pendidikan dengan GPA / nilai akhir |
| **Organizations** | Riwayat organisasi; highlight bisa dibuka-tutup (accordion) |
| **Skills** | Dikelompokkan per kategori (Languages, AI / ML, Frameworks, Databases, Tools) |
| **Process** | Cara kerja dalam 4 langkah + angka (count-up) yang diambil dari data project |
| **Projects** | Daftar project (urut sesuai CV) dengan baris *impact* (bukti singkat); seluruh baris bisa diklik, ada halaman detail per project (`/projects/[slug]`) dengan navigasi prev/next |
| **Certificates** | Grid preview sertifikat + filter per penerbit; dialog dengan preview, verifikasi, buka PDF, dan download |
| **Gallery** | Foto kegiatan + lightbox — otomatis muncul begitu `data/gallery.ts` berisi foto |
| **Contact** | Ajakan kontak, email (dengan tombol copy), social links, CV |

---

## Mengubah konten

Semua konten ada di `data/*.ts` — tidak perlu menyentuh komponen.

| File | Isi |
|---|---|
| `data/profile.ts` | Nama, bio, roles, focus areas (marquee), tagline footer, link sosial, URL situs |
| `data/experience.ts` | Pengalaman kerja/magang |
| `data/education.ts` | Riwayat pendidikan |
| `data/organizations.ts` | Organisasi; urutan di file = urutan tampil. Prestasi berformat `"1st Place - Nama Lomba 2026"` otomatis tampil sebagai badge dan diurutkan (juara 1 → 3, tahun terbaru dulu) |
| `data/skills.ts` | Skill: `icon` = key dari `components/ui/SkillIcon.tsx`, `category`, `color` (warna brand saat hover) |
| `data/projects.ts` | Project; urutan di file = urutan tampil (paling penting di atas). `impact` = satu baris bukti (angka/hasil) yang tampil di daftar dan halaman detail. Angka yang dipakai di beberapa tempat ada di `projectFacts` |
| `data/process.ts` | Langkah "How I work" dan angka statistiknya — angka diambil otomatis dari `projectFacts` di `data/projects.ts` |
| `data/certificates.ts` | Sertifikat; `date` berformat `"Month YYYY"` (diurutkan terbaru dulu; di bulan yang sama mengikuti urutan file) |
| `data/gallery.ts` | Foto kegiatan (section disembunyikan selama kosong) |

**Menambah skill dengan ikon baru:** import ikonnya dari `react-icons/si` di `components/ui/SkillIcon.tsx`, daftarkan key-nya, lalu pakai key itu di `data/skills.ts`.

**Menambah sertifikat:** taruh PDF di `public/certificate/`, lalu buat preview halaman pertamanya (opsional, tapi disarankan karena preview PDF via iframe tidak jalan di HP):

```bash
pdftoppm -f 1 -l 1 -r 150 -png public/certificate/nama.pdf /tmp/nama
# konversi ke WebP lebar ±1400px, simpan sebagai public/certificate/previews/nama.webp
```

**Menambah foto:** hapus dulu metadata lokasi (GPS) dari foto HP sebelum di-commit, misalnya `exiftool -all= foto.jpg`.

---

## Privasi, performa & aksesibilitas

- Tidak ada request ke pihak ketiga: font, ikon, dan gambar semuanya self-hosted. Content-Security-Policy dan security headers diatur di `next.config.ts`.
- Metadata EXIF/GPS sudah dihapus dari semua gambar; gambar dikompres ke WebP dan disajikan lewat `next/image` (AVIF/WebP, responsive).
- Sebagian besar komponen adalah Server Component; animasi hero memakai CSS sehingga langsung tampil sebelum JavaScript selesai dimuat.
- SEO: metadata per halaman, Open Graph image yang di-generate, `sitemap.xml`, `robots.txt`, dan JSON-LD `Person`.
- Aksesibilitas: skip link, heading yang terstruktur, fokus terlihat, dialog dengan focus trap + Esc, `aria-current` di navbar, kontras warna lolos WCAG AA, dan dukungan *reduced motion*. Diaudit dengan axe-core (0 pelanggaran).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```
