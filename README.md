# Daprel Portfolio

Website portofolio pribadi Muhamad Daffa Rial, dibangun dengan React + Vite + Tailwind CSS dan di-deploy ke GitHub Pages (`/portofolio/`).

## Menjalankan

```bash
npm install
npm run dev      # server pengembangan
npm run build    # build produksi ke dist/
npm run lint
```

## Struktur

```
src/
  pages/        HomePage (/) — satu halaman berisi semua section
  sections/     bagian-bagian halaman, satu folder per section
                (hero, projects, internships, research, tools, profile, contact)
  components/
    layout/     Navbar, Footer
    showcase/   pola "showcase + kartu": FeaturedShowcase, CaseStudySection,
                ProjectCard, ProjectDetailModal, ExpandableGrid, badge-badge
    ui/         komponen dasar: SectionHeader, ImageLightbox, BrandLogo, Tag, ...
  data/         konten portofolio, dipisah per topik (profile, projects,
                internships, experience, credentials, skills, tools, navigation)
  hooks/        useSectionNavigation (navigasi navbar & footer)
  utils/        asset() untuk path public/, scrollToSection()
public/
  favicon.png, apple-touch-icon.png
  images/
    brand/        logo Daprel (varian "-on-dark" bertulisan putih)
    profile/      foto formal & foto profil
    tools/        logo software
    projects/     satu folder per project (mis. capstone-design-epr/)
    internships/  satu folder per tempat magang (mis. ptpn/)
assets-archive/ gambar yang tidak dipakai — tidak ikut ter-deploy
private/        dokumen pribadi — diabaikan Git, jangan dipindah ke public/
```

- **Mengubah konten** (pengalaman, proyek, publikasi, sertifikasi, tools): cukup edit file di `src/data/`, tanpa menyentuh komponen.
- **Showcase vs kartu**: item dengan `featured: true` (di projects, internships, publications, intellectualProperty) tampil besar di atas section; sisanya jadi kartu.
- **Gambar**: nama file & folder memakai kebab-case (huruf kecil, tanda hubung, tanpa spasi), mis. `images/internships/ptpn/ptpn-internship-1.jpg`. Panggil lewat `asset('images/...')` dari `src/utils/asset.js` agar base path `/portofolio/` otomatis ditambahkan.
- **Warna brand**: gunakan token tema (`primary`, `primary-light`, `primary-dark`, `sand`) yang didefinisikan di `src/index.css`, bukan kode hex.
- **Menambah section di beranda**: buat folder di `src/sections/`, pasang di `HomePage.jsx`, lalu tambahkan id-nya ke `src/data/navigation.js`.
