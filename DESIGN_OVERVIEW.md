# 🎨 Landing Page Design Overview

## Complete Redesign - Institut Esthederm Theme

The landing page has been transformed to match the Institut Esthederm brand identity with professional layout and Esthederm color palette.

---

## 📐 Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
│  INSTITUT ESTHEDERM | Nav Links | 📞 212 290 70 70         │
│  (White background, sticky, border-bottom)                  │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                           │
│            GÜNCEL KAMPANYALAR                              │
│       Naos markalarında özel fırsatlar                     │
│  (Gradient: #d4e8ef → #b8d8e6)                            │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   CAMPAIGN GRID (3 Columns)                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │  Campaign 1 │  │  Campaign 2 │  │  Campaign 3 │       │
│  │  Mint BG    │  │  Gold BG    │  │  Teal BG    │       │
│  │  #c8e6e6    │  │  #f9e8b8    │  │  #d4ede8    │       │
│  │             │  │             │  │             │       │
│  │  Badge      │  │  Badge      │  │  Badge      │       │
│  │  Title      │  │  Title      │  │  Title      │       │
│  │  Highlight  │  │  Highlight  │  │  Highlight  │       │
│  │  Price Tag  │  │  Price Tag  │  │  Price Tag  │       │
│  │  Desc       │  │  Desc       │  │  Desc       │       │
│  │  [Button]   │  │  [Button]   │  │  [Button]   │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   STORE LOCATOR                             │
│  ┌──────────────┐  ┌─────────────────────────────────────┐ │
│  │  SIDEBAR     │  │      GOOGLE MAPS                    │ │
│  │  (400px)     │  │      (Flexible width)               │ │
│  │              │  │                                     │ │
│  │  Search      │  │      [Interactive Map]              │ │
│  │  [Input]     │  │                                     │ │
│  │              │  │      • Markers for all pharmacies   │ │
│  │  İl          │  │      • Click to select              │ │
│  │  [Select]    │  │      • Auto zoom                    │ │
│  │              │  │      • Full height                  │ │
│  │  İlçe        │  │                                     │ │
│  │  [Select]    │  │                                     │ │
│  │              │  │                                     │ │
│  │  [Filter Btn]│  │                                     │ │
│  │              │  │                                     │ │
│  │  Results: 8  │  │                                     │ │
│  │  ──────────  │  │                                     │ │
│  │  Pharmacy 1  │  │                                     │ │
│  │  Pharmacy 2  │  │                                     │ │
│  │  Pharmacy 3  │  │                                     │ │
│  │  ...         │  │                                     │ │
│  └──────────────┘  └─────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                         FOOTER                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │   Marka     │  │Hızlı Linkler│  │  E-Bülten   │       │
│  │  • Links    │  │  • Links    │  │  [Email]    │       │
│  │             │  │             │  │  [Subscribe]│       │
│  │             │  │             │  │  Social     │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
│  ──────────────────────────────────────────────────────   │
│  © 2026 Institut Esthederm | Cilt Bir Ekosistemdir.      │
│  (Dark background #2c3e50)                                │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Scheme

### Primary Colors (Esthederm)
- **Brand Blue**: `#2c5f7c` - Used for headers, buttons, accents
- **Light Blue**: `#d4e8ef` - Hero gradient start
- **Footer Dark**: `#2c3e50` - Footer background

### Campaign Backgrounds
- **Mint Green**: `#c8e6e6` - Campaign Card 1
- **Gold/Yellow**: `#f9e8b8` - Campaign Card 2
- **Teal Green**: `#d4ede8` - Campaign Card 3

### Accent Colors
- **Pink**: `#f5576c` - Price tags, special offers
- **Gray**: `#f8f8f8` - Sidebar background
- **White**: `#ffffff` - Main backgrounds

---

## 📦 Component Breakdown

### 1. Header.jsx
```
Features:
✓ Sticky navigation
✓ INSTITUT ESTHEDERM branding
✓ Navigation links (Anasayfa, Kampanyalar, Eczaneler, İletişim)
✓ Phone number display
✓ Hover effects on links
✓ Responsive mobile menu
```

### 2. HeroSection.jsx
```
Features:
✓ Gradient background
✓ Large italic "GÜNCEL KAMPANYALAR" title
✓ Subtitle with brand message
✓ Letter-spacing and typography
✓ Responsive font sizes
```

### 3. CampaignGrid.jsx
```
Features:
✓ 3-column responsive grid
✓ Custom background colors per campaign
✓ Top-left badge labels
✓ Title, subtitle, highlight text
✓ Optional price bubble (pink)
✓ Description text
✓ Black "KEŞFEDİN!" button
✓ Hover elevation effects
✓ Mobile: 1 column, Tablet: 2 columns
```

### 4. StoreLocator.jsx
```
Features:
✓ Two-panel layout (400px sidebar + flexible map)
✓ Search by pharmacy name
✓ City filter (İl)
✓ District filter (İlçe) - dependent on city
✓ Filterable pharmacy list
✓ Results count display
✓ Google Maps integration
✓ Interactive markers
✓ Click to select pharmacy
✓ Active state highlighting
✓ Pharmacy details (name, location, address)
✓ Auto-zoom on selection
```

### 5. Footer.jsx
```
Features:
✓ 3-column layout
✓ Marka section (brand links)
✓ Hızlı Linkler (quick links)
✓ E-Bülten (newsletter signup)
✓ Social media icons
✓ "Cilt Bir Ekosistemdir" tagline
✓ Copyright information
✓ Dark background (#2c3e50)
```

---

## 📱 Responsive Behavior

### Desktop (> 1024px)
- 3-column campaign grid
- Side-by-side store locator (400px sidebar + map)
- Full footer 3-column layout

### Tablet (768px - 1024px)
- 2-column campaign grid
- Stacked store locator (sidebar on top, map below)
- 2-column footer

### Mobile (< 768px)
- 1-column campaign grid
- Stacked store locator
- 1-column footer
- Compact header with wrapped navigation

---

## 🎯 Key Features Matching Reference

### Campaign Cards (Like Visual Reference)
✅ Badge on top-left corner
✅ Custom background colors (mint, gold, teal)
✅ Large title text in custom colors
✅ Highlighted offer text
✅ Pink circular price tag (399,90 TL style)
✅ Small description text
✅ Black bottom button "KEŞFEDİN!"
✅ Hover effects

### Store Locator (Like NAOS Stars)
✅ Fixed-width left sidebar (400px)
✅ Gray background (#f8f8f8)
✅ Search input at top
✅ City and district dropdowns
✅ Blue "Filtrele" button
✅ Results count display
✅ Scrollable pharmacy list
✅ Full-width map on right
✅ Interactive markers
✅ Selection highlighting

### Header & Footer (Like Esthederm.com.tr)
✅ Clean white header with border
✅ Brand name typography
✅ Navigation links with hover effects
✅ Dark footer with multi-column layout
✅ Newsletter signup
✅ Social media integration
✅ Brand tagline

---

## 📊 Sample Data Included

### Campaigns (3)
1. **2250TL Özel Fiyat** - Mint background
2. **Hediye Setleri** - Gold background
3. **Cilt Bakım Rutini** - Teal background

### Pharmacies (8)
- İstanbul (5): Kadıköy, Beşiktaş, Şişli, Üsküdar
- Ankara (2): Çankaya, Kızılay
- İzmir (2): Konak, Karşıyaka

---

## ✅ Completion Checklist

- [x] Header with Esthederm branding
- [x] Hero section with campaign title
- [x] 3-grid campaign cards with custom backgrounds
- [x] Store locator with filters
- [x] Google Maps integration
- [x] Footer with newsletter and links
- [x] Responsive design
- [x] Esthederm color palette
- [x] Hover effects and interactions
- [x] Professional typography

---

**Status**: ✅ Complete
**Theme**: Institut Esthederm
**Framework**: React + Vite
**Maps**: Google Maps API (needs key)
**Access**: http://localhost:5173
