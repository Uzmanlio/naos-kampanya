# Naos Kampanya - Institut Esthederm Campaign Website

A modern React-based landing page for Institut Esthederm (NAOS) pharmacy campaigns with pharmacy locator functionality.

## 🎨 Design Features

- **Esthederm Branding**: Authentic Institut Esthederm color scheme and design language
- **Professional Header & Footer**: Matching the official Esthederm website
- **Hero Section**: Campaign showcase with elegant typography
- **3-Grid Campaign Layout**: Exactly as per visual reference with customizable backgrounds
- **Store Locator**: Professional pharmacy finder with Google Maps integration

## 🚀 Features

### Header
- Institut Esthederm branding
- Navigation menu (Anasayfa, Kampanyalar, Yetkili Eczaneler, İletişim)
- Contact phone number
- Sticky navigation

### Hero Section
- "GÜNCEL KAMPANYALAR" showcase
- Esthederm-themed gradient background
- Elegant typography

### Campaign Grid (3 Columns)
- Campaign badge labels
- Customizable background colors per campaign
- Price tags and special offers
- "KEŞFEDİN!" call-to-action buttons
- Responsive grid layout

### Store Locator
- **Left Sidebar (400px)**:
  - Search by pharmacy name
  - Filter by city (İl)
  - Filter by district (İlçe) - dependent dropdown
  - Filterable pharmacy list
  - Results count display
  
- **Right Panel**:
  - Full Google Maps integration
  - Interactive markers
  - Click to select pharmacy
  - Auto-zoom and centering

### Footer
- Multi-column layout (Marka, Hızlı Linkler, E-Bülten)
- Newsletter subscription
- Social media icons
- "Cilt Bir Ekosistemdir" tagline
- Copyright information

## 🎨 Color Scheme (Esthederm)

```css
Primary Blue: #2c5f7c
Light Blue: #d4e8ef
Background: #f8f8f8
Dark Footer: #2c3e50
```

## 💻 Tech Stack

- **React 19.2**: Latest React features
- **Vite 8.0**: Lightning-fast build tool
- **Google Maps API**: Interactive pharmacy mapping
- **@react-google-maps/api**: React wrapper for Google Maps

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 Configuration

### Google Maps API Key

1. Get your API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Open `src/components/StoreLocator.jsx`
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual key

```javascript
<LoadScript googleMapsApiKey="YOUR_ACTUAL_API_KEY">
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx/css          # Esthederm header
│   ├── HeroSection.jsx/css     # Campaign hero banner
│   ├── CampaignGrid.jsx/css    # 3-grid campaign cards
│   ├── StoreLocator.jsx/css    # Pharmacy locator with map
│   └── Footer.jsx/css          # Esthederm footer
├── App.jsx/css                 # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🎯 Campaign Configuration

Edit `src/components/CampaignGrid.jsx` to modify campaigns:

```javascript
const campaigns = [
  {
    id: 1,
    badge: 'ÖNE ÇIKAN KAMPANYA',
    title: 'Campaign Title',
    subtitle: 'Optional Subtitle',
    highlight: 'ÖZEL FİYAT!',
    price: '399,90 TL',
    description: 'Campaign description',
    bgColor: '#c8e6e6',
    textColor: '#2c5f7c'
  },
  // Add more campaigns...
];
```

## 🗺️ Pharmacy Data

Currently using mock data. To integrate with real API:

1. Update `mockPharmacies` array in `src/components/StoreLocator.jsx`
2. Or replace with API fetch:

```javascript
useEffect(() => {
  fetch('YOUR_API_ENDPOINT')
    .then(res => res.json())
    .then(data => setPharmacies(data));
}, []);
```

Required pharmacy data structure:
```javascript
{
  id: number,
  name: string,
  city: string,
  district: string,
  address: string,
  lat: number,
  lng: number
}
```

## 📱 Responsive Design

- **Desktop**: Full 3-column campaign grid, side-by-side locator
- **Tablet (< 1024px)**: 2-column campaigns, stacked locator
- **Mobile (< 768px)**: Single column layout

## 🚀 Development

```bash
npm run dev      # http://localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Code linting
```

## 📋 To-Do

- [ ] Add real Google Maps API key
- [ ] Integrate pharmacy API
- [ ] Add campaign detail pages
- [ ] Implement newsletter subscription backend
- [ ] Add loading states
- [ ] Add error handling
- [ ] Optimize images
- [ ] Add analytics

## 📄 License

© 2026 Institut Esthederm Paris / NAOS. All rights reserved.

## 🤝 Support

For support and questions, please contact the NAOS team.
