/**
 * KUYLAND Official Website Configuration
 * ------------------------------------------------------------------
 * Seluruh data server, tautan unduhan, dan informasi komunitas
 * dapat dikonfigurasi melalui berkas ini secara terpusat.
 */

export const siteConfig = {
  // Informasi Server
  server: {
    name: "KUYLAND New Era",
    tagline: "Buat. cerita mu. sendiri.",
    platform: "open.mp (GTA San Andreas Multiplayer)",
    devices: "PC & Android",
    ip: "xxxxx", // Ganti dengan IP atau domain server aktif Anda
    port: "xxxx",
    // Status server: "online" | "offline" | "maintenance" | "unknown"
    status: "online", 
    statusLabel: "Server siap / online",
    // Jika tidak ada data live query server, biarkan null untuk mencegah statistik palsu
    playerCount: null, 
    maxPlayers: null,
    versionRequirement: "GTA:SA v1.0 US Clean (open.mp compatible)",
  },

  // Tautan Komunitas & Media Sosial
  community: {
    discord: "https://discord.gg/jS3jNPmky", // Placeholder resmi Discord Kuyland
    whatsappGroup: "", // Opsional jika tersedia
    tiktok: "https://tiktok.com/@kuyland.rp",
    youtube: "https://youtube.com/@kuylandrp",
    instagram: "https://instagram.com/kuyland.rp",
    forum: "", // Opsional
    supportEmail: "support@kuyland.id",
  },

  // Pusat Unduhan (Downloads)
  // Catatan: Gunakan URL placeholder "#" atau tautan berkas resmi.
  downloads: {
    pc: [
      {
        id: "gta-kuyland",
        name: "GTA FOR KUYLAND",
        category: "PC",
        version: "-",
        fileSize: "999 MB",
        updatedAt: "Terbaru",
        recommended: true,
        description: "gta khusus kuyland.",
        downloadUrl: "https://pixeldrain.com/u/S2zdMq6T", // Placeholder: Ganti dengan URL direct download berkas riil
        requirements: "Windows 10 / 11 (64-bit), GTA San Andreas v1.0 US",
        guide: [
          "Unduh installer Kuyland Launcher.",
          "Jalankan setup dan arahkan direktori ke folder instalasi GTA San Andreas Anda.",
          "Buka Kuyland Launcher dan tekan 'Main Sekarang'."
        ]
      },
      {
        id: "pc-openmp-client",
        name: "open.mp Client Standalone",
        category: "PC",
        version: "v1.2.1.2662",
        fileSize: "14.2 MB",
        updatedAt: "Rilis Resmi",
        recommended: false,
        description: "Client resmi open.mp versi standalone bagi pemain yang ingin menyambungkan secara manual tanpa launcher.",
        downloadUrl: "https://open.mp/id/downloads/launcher", // Placeholder
        requirements: "Windows 7 / 8 / 10 / 11",
        guide: [
          "Ekstrak file client ke folder direktori utama GTA San Andreas.",
          "Jalankan open.mp.exe atau sa-mp.exe.",
          "Tambahkan IP server 'play.kuyland.id:7777' ke tab Favorites."
        ]
      },
      {
        id: "pc-cleo-cef",
        name: "SA.cleo.ultimate_ASI_Loader",
        category: "PC",
        version: "v5.4.0",
        fileSize: "2.53 MB",
        updatedAt: "Pilihan",
        recommended: true,
        description: "cleo untuk memuat cef.",
        downloadUrl: "https://pixeldrain.com/u/iPwNooqH", // Placeholder
        requirements: "Ekstrak ke folder instalasi GTA San Andreas",
        guide: [
          "Ekstrak arsip .zip ke folder utama GTA San Andreas.",
          "Pastikan d3d9.dll dan SilentPatchSA.asi berada di folder game."
        ]
      }
    ],
    android: [
      {
        id: "android-apk",
        name: "Kuyland Android Client APK",
        category: "Android",
        version: "stable",
        fileSize: "48.2 MB",
        updatedAt: "Terbaru",
        recommended: true,
        description: "Aplikasi khusus Android untuk memainkan Kuyland Roleplay dengan kontrol sentuh optimal dan dukungan open.mp.",
        downloadUrl: "https://pixeldrain.com/u/XP8U5Wre", // Placeholder
        requirements: "Android 8.0 ke atas, RAM minimal 3GB",
        guide: [
          "Unduh file APK Kuyland Android.",
          "Izinkan penginstalan dari sumber tidak dikenal pada pengaturan ponsel Anda.",
          "Pasang APK dan ikuti panduan data obb jika diperlukan."
        ]
      },
      {
        id: "-",
        name: "-",
        category: "-",
        version: "-",
        fileSize: "-",
        updatedAt: "-",
        recommended: false,
        description: "-",
        downloadUrl: "#", // Placeholder
        requirements: "-",
        guide: [
          "-",
          "-"
        ]
      }
    ],
    plugins: [
      {
        id: "plugin-cef",
        name: "Kuyland Cef Plugin",
        category: "Plugins",
        version: "-",
        fileSize: "2.53 MB",
        updatedAt: "Disarankan",
        recommended: true,
        description: "Plugin untuk memuat cef.",
        downloadUrl: "https://pixeldrain.com/u/rZetXjKh", // Placeholder
        requirements: "Khusus PC: Pasang di folder GTA San Andreas",
        guide: [
          "Salin berkas .asi dan folder audio ke root direktori GTA San Andreas.",
          "Konfigurasikan tombol Push-to-Talk di dalam game (Default: Z atau CapsLock)."
        ]
      },
      {
        id: "samp-voice",
        name: "samp voice",
        category: "Plugins",
        version: "-",
        fileSize: "460 KB",
        updatedAt: "Opsional",
        recommended: true,
        description: "samp voice yang di develop.",
        downloadUrl: "https://pixeldrain.com/u/S2zdMq6T", // Placeholder
        requirements: "Kompatibel untuk PC",
        guide: [
          "Ekstrak dan pasang ke file direktori gta anda."
        ]
      }
    ]
  },

  // FAQ Items
  faq: [
    {
      question: "Apakah bermain di Kuyland Roleplay sepenuhnya gratis?",
      answer: "Ya, 100% gratis. Anda tidak perlu membayar biaya pendaftaran apapun untuk bermain di server Kuyland. Cukup unduh client yang sesuai dengan perangkat Anda dan hubungkan ke server kami."
    },
    {
      question: "Apakah saya bisa bermain menggunakan HP Android?",
      answer: "Tentu saja! Kuyland mendukung sistem cross-platform penuh antara PC dan Android. Pemain di smartphone Android dapat berinteraksi langsung dalam satu kota dan satu dunia dengan pemain di PC."
    },
    {
      question: "Apakah saya memerlukan plugin khusus sebelum bermain?",
      answer: "Untuk bermain dasar, Anda hanya membutuhkan Client open.mp atau Launcher Kuyland. Namun, kami sangat menyarankan mengunduh Spatial Voice Plugin (PC) agar Anda dapat menikmati fitur komunikasi suara 3D in-game."
    },
    {
      question: "Bagaimana aturan dasar roleplay di server Kuyland?",
      answer: "Kuyland mengusung konsep Medium-to-Hard Roleplay yang ramah pemula namun tetap tertib. Anda diharapkan memainkan karakter layaknya manusia nyata di dunia nyata (In-Character), mematuhi prinsip No-DM (Deathmatch tanpa alasan RP), No-Powergaming, dan menghargai alur cerita pemain lain."
    },
    {
      question: "Di mana saya dapat melaporkan bug atau meminta bantuan staf?",
      answer: "Seluruh laporan kendala teknis, bug, pengaduan pemain, dan saran pembaruan ditangani secara resmi melalui saluran Discord Kuyland di kategori tiket bantuan (Support Ticket)."
    }
  ]
};

