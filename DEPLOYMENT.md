# Deployment Guide

## Deploy to Vercel

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/naos-kampanya)

### Manual Deployment Steps

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your `naos-kampanya` repository
   - Configure:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`

3. **Add Environment Variables**
   In Vercel project settings, add:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app
   - You'll get a URL like: `https://naos-kampanya.vercel.app`

## Environment Variables Required

- `VITE_GOOGLE_MAPS_API_KEY` - Your Google Maps JavaScript API key

## Build Locally

```bash
npm install
npm run build
npm run preview
```

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Show build logs and errors

## Custom Domain (Optional)

In Vercel project settings:
1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
