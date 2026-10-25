# KUYLAND — Official Game Server Website

Website resmi dan pusat informasi untuk server **KUYLAND Roleplay** (GTA San Andreas Multiplayer berbasis **open.mp**).

Dibuat menggunakan **HTML5 semantik**, **CSS3 murni (Modern Glassmorphism)**, dan **Vanilla JavaScript (ES6+ Modules)** tanpa ketergantungan pada UI framework berat (seperti React, Vue, Next.js, Tailwind, atau Bootstrap).

---

## 🎨 Karakteristik Desain

- **Gaya Visual:** Refined Frosted Glass / Dark Glassmorphism bernuansa sinematik.
- **Palet Warna:**
  - Dark Background: `#0B110F`
  - Secondary Surface: `#131C18`
  - Primary Emerald: `#087F5B`
  - Emerald Accent: `#10B981`
  - Primary Text: `#F2F5F3`
  - Muted Text: `#9AA9A1`
- **Background Atmosfer GTA San Andreas:** Siluet pemandangan malam Los Santos, Vinewood, dan pohon palem khas San Andreas dengan pencahayaan halus.
- **Responsif:** Mobile-first, mendukung perangkat smartphone, tablet, laptop, hingga monitor resolusi ultra-wide.

---

## 📁 Struktur Berkas

```
kuyland/
├── index.html              # Halaman utama landing page
├── README.md               # Dokumentasi proyek
├── assets/
│   ├── images/             # Latar belakang hero GTA SA & visual grafis
│   │   ├── kuyland-bg-pc.jpg       # Background resmi Kuyland Roleplay (Tampilan Desktop/PC)
│   │   ├── kuyland-bg-mobile.jpg   # Background resmi Kuyland Roleplay (Tampilan Mobile Viewport)
│   │   ├── about-visual.svg
│   ├── icons/              # Ikon SVG (PC, Android, Plugin, Discord, dll.)
│   └── fonts/
├── css/
│   ├── variables.css       # Token warna, spacing, glassmorphism, z-index
│   ├── base.css            # Reset, typography fluid clamp, dan layout
│   ├── components.css      # Tombol, glass-panel, tab, accordion, toast
│   ├── sections.css        # Gaya tata letak masing-masing seksi
│   └── responsive.css      # Breakpoints tablet & smartphone, accessibility
└── js/
    ├── config.js           # Konfigurasi terpusat (IP server, downloads, FAQ)
    ├── main.js             # Inisialisasi, clipboard copy IP, accordion FAQ
    ├── navigation.js       # Sticky nav, mobile drawer, scroll observer
    ├── downloads.js        # Logika tab dan render kartu unduhan
    └── animations.js       # Scroll reveal observer & reduced-motion check
```

---

## 🚀 Cara Menjalankan Secara Lokal

Karena proyek ini menggunakan **JavaScript ES Modules (`import`/`export`)**, halaman perlu dijalankan menggunakan web server lokal (bukan langsung membuka file via `file:///` di peramban):

### Opsi 1: Menggunakan Node.js / npx
```bash
npx serve .
# atau
npx http-server .
```

### Opsi 2: Menggunakan Python
```bash
# Python 3
python -m http.server 8000
```
Lalu buka peramban di `http://localhost:8000`.

### Opsi 3: VS Code Live Server
Cukup klik kanan pada `index.html` dan pilih **"Open with Live Server"**.

---

## ⚙️ Cara Mengubah Konfigurasi Server & Unduhan

Semua data server, tautan unduhan, dan informasi media sosial diatur secara terpusat di dalam berkas:
👉 **`js/config.js`**

### 1. Mengubah IP & Port Server
```javascript
server: {
  name: "KUYLAND Roleplay",
  ip: "play.kuyland.id",   // Ubah ke IP atau Domain server Anda
  port: "7777",            // Ubah port server
  statusLabel: "Server Siap / Online"
}
```

### 2. Memperbarui Tautan Unduhan (PC, Android, Plugin)
Di dalam `siteConfig.downloads`:
```javascript
{
  id: "pc-launcher",
  name: "Kuyland Official PC Launcher",
  version: "v1.2.0-rc",
  fileSize: "48.5 MB",
  downloadUrl: "https://kuyland.id/files/KuylandLauncher.exe", // Ganti dengan URL berkas asli
  // ...
}
```

### 3. Mengubah Tautan Komunitas (Discord, dll.)
```javascript
community: {
  discord: "https://discord.gg/kuyland",
  supportEmail: "support@kuyland.id"
}
```

---

## 🛡️ Standar Kinerja & Aksesibilitas

- Menggunakan markup HTML5 semantik (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
- Dukungan navigasi keyboard dengan status `:focus-visible` yang kontras.
- Mendukung fitur aksesibilitas sistem `prefers-reduced-motion` untuk pengguna yang sensitif terhadap animasi gerak.
- Efek blur diminimalkan pada perangkat berlayar kecil demi menjaga konsistensi 60 FPS.

---

## ⚖️ Penafian Hukum (Legal Disclaimer)

KUYLAND adalah proyek modifikasi multipemain komunitas pihak ketiga yang beroperasi secara independen menggunakan arsitektur open.mp. KUYLAND tidak berafiliasi, disponsori, didukung, maupun berhubungan dengan Rockstar Games, Take-Two Interactive, atau pemegang hak cipta Grand Theft Auto lainnya.

