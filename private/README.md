# Private / Personal Documents

Semua isi folder ini (selain `.gitkeep` dan `README.md`) **diabaikan Git** melalui [.gitignore](../.gitignore), jadi tidak akan ter-push ke GitHub.

Folder ini adalah **arsip sumber asli** (foto resolusi penuh, PDF, sertifikat, CV). File yang ditampilkan di website adalah *salinan* yang sudah dikompres dan dibersihkan metadata-nya (termasuk lokasi GPS) di `public/images/`.

## Struktur

```
cv/                  CV
projects/            <nama-project>/
competitions/        <nama-lomba-tahun>/
internships/         <tempat-magang>/
community-service/   <nama-kegiatan>/
```

## Aturan

- Nama file & folder: kebab-case (huruf kecil, tanda hubung, tanpa spasi), diawali nama kegiatan, mis. `riksa-thesis/riksa-team-photo.jpg`.
- Tambahkan `deskripsi.md` di folder kegiatan (apa, kapan, peran, hasil) agar isi kartu di website bisa ditulis akurat.
- Dokumen yang memuat data pribadi (NIM, NIK, nomor HP, sertifikat) **jangan** disalin ke `public/`.
