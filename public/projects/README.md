# Folder Berkas Pendukung Portofolio (Publik)

Folder ini khusus untuk menyimpan file-file dokumentasi pendukung proyek/kegiatan yang **akan ditampilkan di website dan di-host secara publik via GitHub Pages**.

> ⚠️ **Catatan Privasi:** Seluruh file di dalam folder `public/` ini **bersifat publik** dan akan terkirim ke GitHub serta dapat diakses oleh publik di website. Jangan letakkan data sensitif (seperti NIK, KTP, kontak pribadi non-publik) di sini. Dokumen pribadi tetap simpan di folder `private/`.

---

## Struktur Folder Per Kegiatan:

1. **`01-riksa-webgis/`**
   - *Kegiatan:* Tugas Akhir Skripsi & Riset bersama BP2D Jabar.
   - *File yang cocok:* Tangkapan layar antarmuka peta WebGIS Mapbox, grafik dashboard, diagram arsitektur sistem spasial, poster riset.

2. **`02-capstone-smart-bin/`**
   - *Kegiatan:* 1st Best Product Capstone Design (Smart Bottle Sorter).
   - *File yang cocok:* Foto prototipe fisik alat, tangkapan layar antarmuka pendeteksi computer vision, skema sensor IoT, video demonstrasi `.mp4`.

3. **`03-sinarmas-procurement/`**
   - *Kegiatan:* Procurement Intern Asset Disposal di Sinarmas CBS.
   - *File yang cocok:* Diagram alur proses sourcing di Coupa, flowchart alur tiket SAP, template visual Quotation Comparison Form (QCF) non-confidential, foto lingkungan kerja / sertifikat magang.

4. **`04-ptpn-supply-chain/`**
   - *Kegiatan:* Supply Chain Intern di PTPN I Regional 2.
   - *File yang cocok:* Tangkapan layar pemodelan Excel Solver, grafik visualisasi safety stock 50+ SKU, foto kunjungan pabrik / gudang komoditas teh.

5. **`05-isilogic-smart-waste/`**
   - *Kegiatan:* Kompetisi Nasional ISILOGIC 2024 (Juara 2 Karsa Cipta & Juara 3 Riset).
   - *File yang cocok:* Foto prototipe tong sampah pintar IoT, sertifikat penghargaan, visualisasi analisis sentimen text mining.

6. **`06-research-publications/`**
   - *Kegiatan:* Konferensi Internasional (ICOEINS 2026, ICSMech 2026) & Jurnal SINTA.
   - *File yang cocok:* Foto saat presentasi conference, sertifikat presenter/author, grafik hasil clustering K-Means.

7. **`07-gtx-laboratory/`**
   - *Kegiatan:* Koordinator & Asisten Laboratorium Gambar Teknik (GTX).
   - *File yang cocok:* Foto sesi mengajar software CAD, dokumentasi maintenance laboratorium komputer, sertifikat asisten lab.

8. **`08-teaching-algorithms/`**
   - *Kegiatan:* Asisten Praktikum Dosen Algoritma Pemrograman.
   - *File yang cocok:* Dokumentasi praktikum kelas Python, modul/game-based exercise yang dirancang.

---

## Cara Memanggil File di Kode React / Vite:
Semua file yang diletakkan di `public/projects/<nama-folder>/<nama-file>` dapat langsung dipanggil di kode dengan awalan `${basePath}projects/...`:

```jsx
const basePath = import.meta.env.BASE_URL;

// Contoh memanggil foto di proyek Riksa:
const fotoRiksa = `${basePath}projects/01-riksa-webgis/dashboard_map.png`;

// Contoh memanggil video di proyek Capstone:
const videoCapstone = `${basePath}projects/02-capstone-smart-bin/demo.mp4`;
```
