# Coordinate Mapping Fix

## Issue
The API's `Xaxis` and `Yaxis` naming was opposite to standard geographic conventions.

## Standard Convention
- **Latitude (lat)** = Y-axis = North/South (-90 to 90°)
- **Longitude (lng)** = X-axis = East/West (-180 to 180°)

## API Field Naming (Actual Values)
Based on testing, the API uses:
- **`Xaxis`** = Contains **latitude** values (e.g., 41.xxx for Istanbul)
- **`Yaxis`** = Contains **longitude** values (e.g., 29.xxx for Istanbul)

This is opposite to the standard naming convention!

## Solution Applied

### Before (WRONG - locations showed incorrectly):
```javascript
lat: parseFloat(pharmacy.Yaxis),  // ❌ Wrong
lng: parseFloat(pharmacy.Xaxis)   // ❌ Wrong
```

### After (CORRECT):
```javascript
lat: parseFloat(pharmacy.Xaxis),  // ✅ Correct (Xaxis contains latitude)
lng: parseFloat(pharmacy.Yaxis)   // ✅ Correct (Yaxis contains longitude)
```

## Changes Made

All occurrences in `StoreLocator.jsx` were updated:

1. **Map Center Calculation** (Line ~91, ~96)
   ```javascript
   lat: parseFloat(selectedPharmacy.Xaxis)
   lng: parseFloat(selectedPharmacy.Yaxis)
   ```

2. **Marker Positions** (Line ~274)
   ```javascript
   position={{ lat: parseFloat(pharmacy.Xaxis), lng: parseFloat(pharmacy.Yaxis) }}
   ```

3. **InfoWindow Position** (Line ~283-284)
   ```javascript
   lat: parseFloat(selectedPharmacy.Xaxis)
   lng: parseFloat(selectedPharmacy.Yaxis)
   ```

4. **Get Directions URL** (Line ~109)
   ```javascript
   destination=${pharmacy.Xaxis},${pharmacy.Yaxis}
   ```
   Note: Google Maps directions format is `lat,lng`

## Verification

To verify coordinates are correct:

1. **Check a known pharmacy** (e.g., in Istanbul)
   - Istanbul latitude: ~41° (should be in `Xaxis`)
   - Istanbul longitude: ~29° (should be in `Yaxis`)

2. **Test on map**
   - Markers should appear in correct locations
   - "Yol Tarifi Al" should navigate to correct address

3. **Console verification**
   ```javascript
   console.log(`Lat: ${pharmacy.Xaxis}, Lng: ${pharmacy.Yaxis}`);
   // Should show: Lat: 41.xxx, Lng: 29.xxx for Istanbul
   ```

## API Documentation Update

If you control the API, consider updating field names for clarity:

### Current (Confusing):
```json
{
  "Xaxis": "41.0123",  // Actually latitude
  "Yaxis": "29.0456"   // Actually longitude
}
```

### Recommended (Clear):
```json
{
  "Latitude": "41.0123",   // or "lat"
  "Longitude": "29.0456"   // or "lng"
}
```

Or keep current names but update documentation:
```
Xaxis = Latitude (Y-coordinate on map)
Yaxis = Longitude (X-coordinate on map)
```

---

**Fixed:** March 18, 2026  
**Status:** ✅ Coordinates now display correctly on Google Maps
