# 🚀 Quick Start Guide

## What You Have Now

A fully functional React website for Naos pharmacy campaigns with:

✅ **Campaign Banner** - Beautiful gradient hero section  
✅ **Campaign Cards** - Grid display of 3 active promotions  
✅ **Pharmacy Locator** - Search & filter with Google Maps  
✅ **Responsive Design** - Works on all devices  
✅ **Modern UI** - Purple/pink gradients, smooth animations  

## Currently Running

Your dev server is live at: **http://localhost:5173** 🎉

## Important: Google Maps Setup

⚠️ **The map won't display until you add your API key!**

**Quick Fix (2 minutes):**

1. Get free API key: https://console.cloud.google.com/
2. Open: `src/components/PharmacyLocator.jsx`
3. Line 162: Replace `YOUR_GOOGLE_MAPS_API_KEY`
4. Save and refresh browser

See `GOOGLE_MAPS_SETUP.md` for detailed instructions.

## Test the Features

### 1. Campaign Banner
- Scroll to top
- See gradient banner with "Özel Kampanya"
- Click "Kampanya Detayları" button

### 2. Campaign Cards
- View 3 campaign cards below banner
- Hover to see elevation effect
- Check discount badges in top-right corners

### 3. Pharmacy Locator
Try these features:

**Search by Name:**
- Type "Merkez" → See Merkez Eczanesi
- Type "Sağlık" → See Sağlık Eczanesi

**Filter by City:**
- Select "İstanbul" → See 5 pharmacies
- Select "Ankara" → See 2 pharmacies
- Select "İzmir" → See 1 pharmacy

**Filter by District:**
- Select "İstanbul" first
- Then select "Kadıköy" → See 1 pharmacy
- Select "Beşiktaş" → See 1 pharmacy

**Click Pharmacies:**
- Click any pharmacy in the list
- See it highlight
- Map zooms to that location (after API key added)

## Current Sample Data

**8 Pharmacies in the system:**
- İstanbul: 5 pharmacies (Kadıköy, Beşiktaş, Şişli, Üsküdar)
- Ankara: 2 pharmacies (Çankaya, Kızılay)
- İzmir: 1 pharmacy (Konak, Karşıyaka)

**3 Active Campaigns:**
1. Bioderma - 30% off (until March 31)
2. Institut Esthederm - Buy 2 Get 1 Free (until April 15)
3. Etat Pur - 25% off (until April 30)

## Next Steps for Production

### 1. Connect Real APIs
Replace mock data in:
- `src/components/PharmacyLocator.jsx` (mockPharmacies array)
- `src/components/CampaignDetails.jsx` (campaigns array)

### 2. Add Features
- Loading spinners
- Error handling
- Pharmacy details modal
- Phone numbers & addresses
- Directions button
- Campaign detail pages

### 3. Branding
- Add real Naos logo to `public/`
- Update header in `src/App.jsx`
- Adjust colors to match brand
- Add company information to footer

### 4. Deployment
```bash
npm run build        # Creates production files in dist/
```
Then deploy `dist/` folder to your hosting service.

## Commands Reference

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

## File Structure

```
naos-kampanya/
├── src/
│   ├── components/         # All React components
│   ├── App.jsx            # Main app
│   └── index.css          # Global styles
├── public/                # Static files
├── README.md             # Full documentation
├── GOOGLE_MAPS_SETUP.md  # API key guide
├── PROJECT_SUMMARY.md    # What was built
└── ARCHITECTURE.md       # Technical details
```

## Need Help?

- Check `README.md` for detailed setup
- See `ARCHITECTURE.md` for component structure
- Follow `GOOGLE_MAPS_SETUP.md` for Maps API

## Current Status

✅ Frontend: **100% Complete**  
⏳ Google Maps: **Needs API Key**  
⏳ Backend API: **Not Started** (frontend ready to integrate)  

---

**Happy coding! 🎉**

The foundation is complete. Now you can:
1. Add your Google Maps API key
2. Connect to your pharmacy database API
3. Customize the design
4. Deploy to production
