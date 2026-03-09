<p align="center">
  <img src="https://img.shields.io/badge/🌿-Qazi_Naturals-D4A017?style=for-the-badge&labelColor=1A1A1A" alt="Qazi Naturals" />
</p>

<h1 align="center">Qazi Naturals — Khalis Haldi 🟡</h1>

<p align="center">
  <b>Peesi Hui Khalis Haldi — Seedha Khet Se Aapke Ghar Tak</b><br/>
  <sub>100% Pure Turmeric Powder · No Milawat · High Curcumin · Farm Fresh</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Vanilla_CSS-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/WhatsApp_Ordering-25D366?style=flat-square&logo=whatsapp&logoColor=white" />
  <img src="https://img.shields.io/badge/SEO_Optimized-4285F4?style=flat-square&logo=google&logoColor=white" />
</p>

---

## ✨ What Is This?

A **trust-first, mobile-optimized** e-commerce website for selling homemade haldi (turmeric) online — built specifically for the **Pakistani market**.

No payment gateway needed. Customers browse products, add to cart, and complete orders via **WhatsApp** with a single tap.

## 🎨 Design Philosophy

| Principle | Implementation |
|---|---|
| **Trust First** | Purity proof section with process photos, social media links to real documentation |
| **Mobile First** | 90%+ traffic will be mobile — no heavy animations, CSS-only transitions |
| **Bilingual** | Roman Urdu headings ("Khalis Haldi", "Hamari Kahani") with English subtext |
| **WhatsApp Native** | Floating widget + cart checkout both generate pre-filled WhatsApp messages |
| **Performance** | No parallax, WebP-ready, `< 3s` FCP target on 4G |

## 🗂️ Project Structure

```
qazinaturals/
├── public/
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # XML sitemap for SEO
├── src/
│   ├── assets/
│   │   ├── products/           # Product images (50g, 100g, 250g, 500g)
│   │   └── purity/             # Process photos (raw, grinding, final)
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav + mobile hamburger
│   │   ├── Hero.jsx            # Landing section with CTA
│   │   ├── Products.jsx        # 4 product cards + add-to-cart
│   │   ├── PurityProof.jsx     # Process strip + trust badges + social links
│   │   ├── Benefits.jsx        # Health benefits grid
│   │   ├── Testimonials.jsx    # WhatsApp-style review bubbles
│   │   ├── Contact.jsx         # Form + delivery info
│   │   ├── Cart.jsx            # Slide-in drawer + WhatsApp order
│   │   ├── Footer.jsx          # Links + socials
│   │   └── WhatsAppFloat.jsx   # Floating chat button
│   ├── context/
│   │   └── CartContext.jsx     # Cart state + localStorage sync
│   ├── index.css               # Design system + CSS variables
│   └── App.jsx                 # Root component
└── index.html                  # SEO + JSON-LD structured data
```

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/ShujaullahQazi/qazinaturals.git
cd qazinaturals

# Install
npm install

# Dev server
npm run dev
```

Open **http://localhost:5173/** — that's it! 🎉

## 📦 Products

| Pack | Size | Price |
|---|---|---|
| 🌱 Sample Pack | 50g | Rs. 150 |
| 🏡 Ghar Ka Pack | 100g | Rs. 280 |
| 👨‍👩‍👧‍👦 Family Pack | 250g | Rs. 650 |
| ⭐ Value Pack | 500g | Rs. 1,200 |

## 🔍 SEO & GEO

- **3× JSON-LD** structured data (LocalBusiness, Product list, FAQ)
- **Open Graph** + **Twitter Card** meta tags
- **GEO meta tags** targeting Pakistan (`geo.region: PK`)
- **Bilingual keywords** (English + Urdu: خالص ہلدی)
- **XML Sitemap** + **robots.txt**
- **Canonical URL** set to `qazinaturals.pk`

## 🛒 How Ordering Works

```
Customer browses → Adds to cart → Taps "WhatsApp Pe Order Kijiye"
  → WhatsApp opens with pre-filled order summary
    → You confirm and ship! 📦
```

Cart persists in **localStorage** — even if the customer closes the tab, their cart is saved.

## 🛠️ Tech Stack

- **React 19** — Component-based UI
- **Vite 7** — Lightning-fast HMR & builds
- **Vanilla CSS** — Full control, no framework bloat
- **React Context + useReducer** — State management
- **localStorage** — Cart persistence

## 🌐 Deployment

```bash
npm run build
```

Deploy the `dist/` folder to **Vercel**, **Netlify**, or any static host.

---

<p align="center">
  <b>Qazi Naturals</b> — Khalis Haldi, Khalis Bharosa 🌿<br/>
  <sub>Made with ❤️ in Pakistan</sub>
</p>
