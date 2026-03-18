# Component Architecture

## Application Structure

```
App (Main Container)
│
├── Header
│   ├── Logo (NAOS placeholder)
│   └── Title: "Naos Kampanyaları"
│
├── Main Content
│   │
│   ├── CampaignBanner (Section 1)
│   │   ├── Gradient Background (pink → red)
│   │   ├── Title: "Özel Kampanya"
│   │   ├── Subtitle: "Tüm Naos ürünlerinde indirim fırsatı!"
│   │   └── CTA Button: "Kampanya Detayları"
│   │
│   ├── CampaignDetails (Section 2)
│   │   ├── Section Title: "Aktif Kampanyalar"
│   │   └── Campaign Grid (3 columns responsive)
│   │       ├── Campaign Card 1 (Bioderma - %30)
│   │       ├── Campaign Card 2 (Institut Esthederm - 2 Al 1 Öde)
│   │       └── Campaign Card 3 (Etat Pur - %25)
│   │
│   └── PharmacyLocator (Section 3)
│       ├── Section Title: "Eczane Bul"
│       └── Two-Column Layout
│           │
│           ├── Left Panel (400px)
│           │   ├── Filters Section
│           │   │   ├── Name Search Input (Eczane Adı)
│           │   │   ├── City Dropdown (İl)
│           │   │   └── District Dropdown (İlçe)
│           │   │
│           │   └── Pharmacy List
│           │       ├── List Header (Results Count)
│           │       └── Scrollable Items (max-height: 400px)
│           │           ├── Pharmacy Item 1
│           │           ├── Pharmacy Item 2
│           │           └── ... (8 total pharmacies)
│           │
│           └── Right Panel (Flexible)
│               └── Google Maps Container
│                   ├── Map (600px height)
│                   └── Markers (8 pharmacy locations)
│
└── Footer
    └── Copyright: "© 2026 Naos. Tüm hakları saklıdır."
```

## Data Flow

```
PharmacyLocator Component
│
├── State Management
│   ├── selectedCity (string)
│   ├── selectedDistrict (string)
│   ├── searchName (string)
│   └── selectedPharmacy (object|null)
│
├── Computed Values (useMemo)
│   ├── cities[] (unique from mockPharmacies)
│   ├── districts[] (filtered by selectedCity)
│   ├── filteredPharmacies[] (filtered by all criteria)
│   └── mapCenter {lat, lng} (based on selection)
│
└── Event Handlers
    ├── handlePharmacyClick(pharmacy)
    ├── setSelectedCity(city)
    ├── setSelectedDistrict(district)
    └── setSearchName(name)
```

## Responsive Breakpoints

```
Desktop (Default)
├── Two-column layout
├── Full-width filters
└── 600px map height

Tablet (< 1024px)
├── Single-column stack
├── Panel adjustments
└── Map remains 600px

Mobile (< 768px)
├── Single-column stack
├── Compact filters
├── Reduced padding
└── 400px map height
```

## Color Scheme

```
Primary Gradient: #667eea → #764ba2 (purple)
Secondary Gradient: #f093fb → #f5576c (pink → red)
Background: #f5f5f5
Text: #2d3748
Light Text: #718096
White: #ffffff
Hover/Active: #edf2f7
```

## Mock Data Structure

```javascript
Pharmacy Object:
{
  id: number,
  name: string,
  city: string,
  district: string,
  lat: number,
  lng: number
}

Campaign Object:
{
  id: number,
  title: string,
  description: string,
  discount: string,
  validUntil: string
}
```

## File Organization

```
src/
├── components/
│   ├── CampaignBanner/
│   │   ├── CampaignBanner.jsx (30 lines)
│   │   └── CampaignBanner.css (70 lines)
│   │
│   ├── CampaignDetails/
│   │   ├── CampaignDetails.jsx (50 lines)
│   │   └── CampaignDetails.css (100 lines)
│   │
│   └── PharmacyLocator/
│       ├── PharmacyLocator.jsx (180 lines)
│       └── PharmacyLocator.css (150 lines)
│
├── App.jsx (30 lines)
├── App.css (80 lines)
├── main.jsx (10 lines)
└── index.css (20 lines)
```
