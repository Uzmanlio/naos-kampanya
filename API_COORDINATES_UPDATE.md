# API Coordinates Update

## Changes Made

### ✅ Removed Geocoding API
All Google Maps Geocoding API related code has been removed from the project.

### 📍 Single Source of Truth: API
The pharmacy coordinates (Xaxis, Yaxis) are now expected to come **directly from the API**:

```
GET https://api2.naosstars.com/api/campaign-pharmacies/WG6SoD3PQa51wzyf
```

### Required API Fields
Each pharmacy object should include:
```json
{
  "Id": "unique-id",
  "Name": "PHARMACY NAME",
  "CityName": "İstanbul",
  "CountyName": "Sarıyer",
  "AddressDetail": "Full address",
  "PhoneNumber": "0212XXXXXXX",
  "Xaxis": "29.0123456",  // Longitude (required for map display)
  "Yaxis": "41.0123456"   // Latitude (required for map display)
}
```

### What Still Works

✅ **Google Maps Display** - Shows pharmacies on map using API coordinates  
✅ **Pharmacy List** - Searchable list with İl/İlçe filters  
✅ **Search Functionality** - Filter by pharmacy name, city, district  
✅ **Directions** - "Yol Tarifi Al" opens Google Maps with coordinates  
✅ **Call Functionality** - "Ara" button to call pharmacy  
✅ **Info Windows** - Click markers to see pharmacy details  

### What Was Removed

❌ Geocoding API calls  
❌ Automatic coordinate calculation  
❌ Geocoding validation  
❌ Geocoding progress indicators  
❌ LocalStorage caching for geocoded data  
❌ Geocoding badges (✓📍, 📍⚠️)  

### Map Display Logic

**Pharmacies WITH coordinates (Xaxis AND Yaxis):**
- ✅ Displayed on map
- ✅ Clickable markers
- ✅ Info windows with details
- ✅ "Yol Tarifi Al" uses coordinates

**Pharmacies WITHOUT coordinates:**
- ❌ Not shown on map
- ✅ Still shown in pharmacy list
- ⚠️ "Yol Tarifi Al" falls back to address search

### How to Update Coordinates on API

To ensure pharmacies appear on the map:

1. **Get Coordinates from Google Maps:**
   - Go to https://www.google.com/maps
   - Search for pharmacy address
   - Right-click on the location pin
   - Click "Copy coordinates" (format: lat, lng)

2. **Update API Database:**
   ```sql
   UPDATE pharmacies 
   SET Xaxis = '29.0123456',  -- Longitude (2nd number)
       Yaxis = '41.0123456'   -- Latitude (1st number)
   WHERE Id = 'pharmacy-id';
   ```

3. **Verify:**
   - Refresh the website
   - Check if pharmacy appears on map
   - Verify location accuracy

### Benefits of This Approach

✅ **Single Source of Truth** - API is the only data source  
✅ **No Client-Side API Calls** - Faster page loads  
✅ **No Rate Limits** - No geocoding API quota issues  
✅ **Accurate Locations** - Coordinates verified before adding to API  
✅ **Simpler Codebase** - Less complexity, easier maintenance  
✅ **Better Performance** - No waiting for geocoding to complete  

### Migration Checklist

If you need to update existing pharmacies:

1. [ ] Export all pharmacies from API without coordinates
2. [ ] For each pharmacy, get accurate coordinates from Google Maps
3. [ ] Update API database with coordinates
4. [ ] Test each pharmacy on the website
5. [ ] Verify "Yol Tarifi Al" works correctly

### Support

For questions about:
- **Frontend code**: Check StoreLocator.jsx component
- **API updates**: Contact API/database administrator
- **Google Maps API**: Only used for display (no geocoding)

---

**Last Updated:** March 17, 2026  
**Geocoding API Removed:** Yes ✅  
**API Source:** https://api2.naosstars.com/api/campaign-pharmacies/WG6SoD3PQa51wzyf
