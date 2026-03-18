import { useState, useEffect, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './PharmacyLocator.css';

const API_KEY = 'WG6SoD3PQa51wzyf';
const API_URL = `https://api2.naosstars.com/api/campaign-pharmacies/${API_KEY}`;

const PharmacyLocator = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchName, setSearchName] = useState('');
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  // Fetch pharmacies from API
  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Eczane verileri yüklenirken bir hata oluştu');
        }
        
        const data = await response.json();
        setPharmacies(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching pharmacies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPharmacies();
  }, []);

  // Get unique cities
  const cities = useMemo(() => {
    return [...new Set(pharmacies.map(p => p.city))].sort();
  }, [pharmacies]);

  // Get districts for selected city
  const districts = useMemo(() => {
    if (!selectedCity) return [];
    return [...new Set(pharmacies.filter(p => p.city === selectedCity).map(p => p.district))].sort();
  }, [selectedCity, pharmacies]);

  // Filter pharmacies
  const filteredPharmacies = useMemo(() => {
    return pharmacies.filter(pharmacy => {
      const nameMatch = !searchName || pharmacy.name.toLowerCase().includes(searchName.toLowerCase());
      const cityMatch = !selectedCity || pharmacy.city === selectedCity;
      const districtMatch = !selectedDistrict || pharmacy.district === selectedDistrict;
      return nameMatch && cityMatch && districtMatch;
    });
  }, [searchName, selectedCity, selectedDistrict, pharmacies]);

  // Map center based on filtered results
  const mapCenter = useMemo(() => {
    if (selectedPharmacy) {
      return { lat: selectedPharmacy.lat, lng: selectedPharmacy.lng };
    }
    if (filteredPharmacies.length > 0) {
      return { lat: filteredPharmacies[0].lat, lng: filteredPharmacies[0].lng };
    }
    return { lat: 39.9334, lng: 32.8597 }; // Turkey center
  }, [filteredPharmacies, selectedPharmacy]);

  const mapContainerStyle = {
    width: '100%',
    height: '600px',
    borderRadius: '12px'
  };

  const handlePharmacyClick = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
  };

  return (
    <section className="pharmacy-locator">
      <h2 className="section-title">Eczane Bul</h2>
      
      {loading && (
        <div className="loading-state">
          <p>Eczaneler yükleniyor...</p>
        </div>
      )}

      {error && (
        <div className="error-state">
          <p>Hata: {error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="locator-content">
        {/* Left Panel - Filters and List */}
        <div className="locator-panel">
          <div className="filters">
            <div className="filter-group">
              <label>Eczane Adı</label>
              <input
                type="text"
                placeholder="Eczane adı girin..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label>İl</label>
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedDistrict('');
                }}
                className="filter-select"
              >
                <option value="">Tüm İller</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>İlçe</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="filter-select"
                disabled={!selectedCity}
              >
                <option value="">Tüm İlçeler</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pharmacy-list">
            <div className="list-header">
              <h3>{filteredPharmacies.length} Eczane Bulundu</h3>
            </div>
            <div className="list-items">
              {filteredPharmacies.map(pharmacy => (
                <div
                  key={pharmacy.id}
                  className={`pharmacy-item ${selectedPharmacy?.id === pharmacy.id ? 'selected' : ''}`}
                  onClick={() => handlePharmacyClick(pharmacy)}
                >
                  <h4>{pharmacy.name}</h4>
                  <p>{pharmacy.district}, {pharmacy.city}</p>
                </div>
              ))}
              {filteredPharmacies.length === 0 && (
                <div className="no-results">
                  <p>Eczane bulunamadı</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className="map-container">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={selectedPharmacy ? 15 : 12}
            >
              {filteredPharmacies.map(pharmacy => (
                <Marker
                  key={pharmacy.id}
                  position={{ lat: pharmacy.lat, lng: pharmacy.lng }}
                  onClick={() => handlePharmacyClick(pharmacy)}
                  title={pharmacy.name}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      )}
    </section>
  );
};

export default PharmacyLocator;
