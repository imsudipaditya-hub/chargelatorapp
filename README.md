# Chargelator v3.0 (Web PWA Version)

Chargelator v3.0 is a hyper-optimized, professional-grade operations utility tool engineered to calculate room rates, supplier markups, local prices, and partner discounts in real-time. 

This version transitions the original corporate Excel file called "Charges Tab Calculator v2" and its calculation logic into a highly resilient, lightning-fast vanilla web application deployed as a **Progressive Web App (PWA)** via GitHub Pages.

Check on CEG Confluence the original Excel filename- Charges Tab Calculator v2

---

## 🚀 Live Production URL
Access the live standalone utility anywhere across your enterprise workstations:
👉 **https://imsudipaditya-hub.github.io/chargelatorapp**

---

## 💎 Core Engineering Features

*   **Zero-Maintenance Auto-Updates:** Deployed entirely via GitHub Pages. Any code changes pushed to the repository main branch are silently synced across all user devices globally upon application launch.
*   **Progressive Web App (PWA) Integration:** Can be installed directly from the browser address bar onto desktop screens, operating inside a dedicated standalone window with native taskbar shortcuts.
*   **Network Resilience & Performance:** Backed by a background Service Worker proxy (`sw.js`) that caches core code layout assets. It launches instantly and functions seamlessly even during unstable operational network drops.
*   **State Persistence & Defensiveness:** Utilizes `localStorage` to automatically preserve data inputs across tab reloads. Built with defensive scripting parameters to completely mitigate divide-by-zero (`NaN`) crashes.
*   **Enterprise Internationalization (i18n):** Features structural data-attribute routing supporting structural localization mappings for 8 languages: English, Chinese (CN), Japanese (JP), Indonesian, Korean (KOR), Filipino, Thai, and Vietnamese.
*   **Live Currency Widget Integration:** Programmed to ping external financial APIs asynchronously to fetch historical or instantaneous exchange rate variables dynamically.


## 📂 Project Architecture

~~~
chargelatorapp/
├── index.html          # Core application structure, CSS layouts, and logical operations script
├── manifest.json       # Desktop shell layout mapping and subfolder application routing rules
├── sw.js               # Background service worker proxy responsible for runtime asset caching
└── icon.png            # High-resolution (512x512) maskable corporate visual app icon
~~~


## 🛠️ Installation on Workstations
   To install Chargelator v3 as a native desktop application:
1. Open your corporate web browser (Google Chrome, Microsoft Edge, or Brave).
2. Load the production link: https://imsudipaditya-hub.github.io/chargelatorapp/
3. Click the Install App monitor/plus icon located on the far right quadrant of your browser URL address bar.
4. Select Install.

The calculator window will instantly detach from the web browser frame, pinning itself directly to your Windows desktop workstation environment.

---

## 📜 Development & Support
**Author**: Sudip Aditya, CEG, PNQ, IND
**Engineering Specifications**: Vanilla HTML5, CSS Variables, Modular Layout Flexbox API, Web Storage API, and Service Worker Cache Intercept Policy.
**Version Control**: Managed via Git on GitHub.

---
