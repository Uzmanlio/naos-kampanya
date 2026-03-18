import { useState, useEffect, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Select from 'react-select';
import { getCityOptions, getDistrictOptions } from '../data/turkeyData';
import './StoreLocator.css';

const API_KEY = 'WG6SoD3PQa51wzyf';
const API_URL = `https://api2.naosstars.com/api/campaign-pharmacies/${API_KEY}`;
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';

const StoreLocator = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
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
        console.log('API Response:', data); // Debug log
        
        // Handle different response structures
        let pharmacyList = [];
        if (Array.isArray(data)) {
          pharmacyList = data;
        } else if (data && Array.isArray(data.pharmacies)) {
          pharmacyList = data.pharmacies;
        } else if (data && Array.isArray(data.data)) {
          pharmacyList = data.data;
        } else {
          console.error('Unexpected API response structure:', data);
          throw new Error('Beklenmeyen veri formatı');
        }
        
        setPharmacies(pharmacyList);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching pharmacies:', err);
        setPharmacies([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchPharmacies();
  }, []);

  const cityOptions = getCityOptions();
  const districtOptions = selectedCity ? getDistrictOptions(selectedCity.value) : [];

  // Filter pharmacies
  const filteredPharmacies = useMemo(() => {
    if (!Array.isArray(pharmacies)) {
      console.error('Pharmacies is not an array:', pharmacies);
      return [];
    }
    
    return pharmacies.filter(pharmacy => {
      const nameMatch = !searchName || pharmacy.Name?.toLowerCase().includes(searchName.toLowerCase());
      const cityMatch = !selectedCity || pharmacy.CityName === selectedCity.value;
      const districtMatch = !selectedDistrict || pharmacy.CountyName === selectedDistrict.value;
      return nameMatch && cityMatch && districtMatch;
    });
  }, [searchName, selectedCity, selectedDistrict, pharmacies]);

  const clearFilters = () => {
    setSearchName('');
    setSelectedCity(null);
    setSelectedDistrict(null);
    setSelectedPharmacy(null);
  };

  const hasActiveFilters = searchName || selectedCity || selectedDistrict;

  // Map center based on filtered results
  const mapCenter = useMemo(() => {
    if (selectedPharmacy && selectedPharmacy.Yaxis && selectedPharmacy.Xaxis) {
      return { lat: parseFloat(selectedPharmacy.Xaxis), lng: parseFloat(selectedPharmacy.Yaxis) };
    }
    if (filteredPharmacies.length > 0) {
      const firstWithCoords = filteredPharmacies.find(p => p.Yaxis && p.Xaxis);
      if (firstWithCoords) {
        return { lat: parseFloat(firstWithCoords.Xaxis), lng: parseFloat(firstWithCoords.Yaxis) };
      }
    }
    return { lat: 39.9334, lng: 32.8597 }; // Turkey center
  }, [filteredPharmacies, selectedPharmacy]);

  // Get pharmacies with valid coordinates for map display
  const pharmaciesWithCoords = useMemo(() => {
    return filteredPharmacies.filter(p => p.Yaxis && p.Xaxis);
  }, [filteredPharmacies]);

  const handleGetDirections = (pharmacy) => {
    if (pharmacy.Yaxis && pharmacy.Xaxis) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${pharmacy.Xaxis},${pharmacy.Yaxis}`;
      window.open(url, '_blank');
    } else {
      // If no coordinates, search by address
      const address = encodeURIComponent(`${pharmacy.Name} ${pharmacy.AddressDetail}`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    }
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    minHeight: '600px'
  };

  return (
    <section id="kampanya-eczaneleri" className="store-locator">
      <div className="store-locator-header">
        <h2>Kampanyaya Dahil Olan Eczaneler</h2>
        <p>Kampanyaların geçerli olduğu eczanelerimizi keşfedin!</p>
      </div>

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
        <div className="store-locator-content">
        {/* Left Panel - Filters and List */}
        <div className="store-sidebar">
          <div className="sidebar-header">
            <h3 className="sidebar-title">Eczane Ara</h3>
            {hasActiveFilters && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                ✕ Filtreleri Temizle
              </button>
            )}
          </div>

          <div className="store-filters">
            <div className="filter-item">
              <input
                type="text"
                placeholder="Eczane adı ara..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="filter-input"
              />
            </div>

            <div className="filter-item">
              <Select
                value={selectedCity}
                onChange={(option) => {
                  setSelectedCity(option);
                  setSelectedDistrict(null);
                }}
                options={cityOptions}
                placeholder="İl seçiniz"
                isClearable
                isSearchable
                noOptionsMessage={() => "Sonuç bulunamadı"}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>

            <div className="filter-item">
              <Select
                value={selectedDistrict}
                onChange={setSelectedDistrict}
                options={districtOptions}
                placeholder="İlçe seçiniz"
                isClearable
                isSearchable
                isDisabled={!selectedCity}
                noOptionsMessage={() => "Sonuç bulunamadı"}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
          </div>

          <div className="pharmacy-results">
            {filteredPharmacies.length > 0 ? (
              <>
                <h4 className="results-title">
                  Eczane Listesi ({filteredPharmacies.length})
                </h4>
                <div className="pharmacy-list">
                  {filteredPharmacies.map(pharmacy => (
                    <div
                      key={pharmacy.Id}
                      className={`pharmacy-card ${selectedPharmacy?.Id === pharmacy.Id ? 'active' : ''}`}
                      onClick={() => setSelectedPharmacy(pharmacy)}
                    >
                      <h5 className="pharmacy-name">{pharmacy.Name}</h5>
                      
                      <p className="pharmacy-address">
                        {pharmacy.CountyName} / {pharmacy.CityName}
                      </p>
                      <p className="pharmacy-address-detail">{pharmacy.AddressDetail}</p>
                      
                      <div className="pharmacy-actions">
                        <button 
                          className="pharmacy-btn pharmacy-btn-directions"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleGetDirections(pharmacy);
                          }}
                        >
                          📍 Yol Tarifi Al
                        </button>
                        <button 
                          className="pharmacy-btn pharmacy-btn-call"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCall(pharmacy.PhoneNumber);
                          }}
                        >
                          📞 Ara
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="no-results">
                <p>Eczaneleri görüntülemek için lütfen filtre uygulayın</p>
                <p className="no-results-sub">İl, ilçe seçin veya eczane adı arayın</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className="store-map">
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={selectedPharmacy ? 17 : 6}
              options={{
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: true,
              }}
            >
              {pharmaciesWithCoords.map(pharmacy => (
                <Marker
                  key={pharmacy.Id}
                  position={{ lat: parseFloat(pharmacy.Xaxis), lng: parseFloat(pharmacy.Yaxis) }}
                  onClick={() => setSelectedPharmacy(pharmacy)}
                  title={pharmacy.Name}
                />
              ))}
              
              {selectedPharmacy && selectedPharmacy.Yaxis && selectedPharmacy.Xaxis && (
                <InfoWindow
                  position={{ 
                    lat: parseFloat(selectedPharmacy.Xaxis), 
                    lng: parseFloat(selectedPharmacy.Yaxis) 
                  }}
                  onCloseClick={() => setSelectedPharmacy(null)}
                >
                  <div className="map-info-window">
                    <h3 className="info-window-title">{selectedPharmacy.Name}</h3>
                    <p className="info-window-location">
                      {selectedPharmacy.CountyName} / {selectedPharmacy.CityName}
                    </p>
                    <p className="info-window-address">{selectedPharmacy.AddressDetail}</p>
                    {selectedPharmacy.PhoneNumber && (
                      <p className="info-window-phone">📞 {selectedPharmacy.PhoneNumber}</p>
                    )}
                    <div className="info-window-actions">
                      <button 
                        className="info-btn info-btn-directions"
                        onClick={() => handleGetDirections(selectedPharmacy)}
                      >
                        📍 Yol Tarifi Al
                      </button>
                      <button 
                        className="info-btn info-btn-call"
                        onClick={() => handleCall(selectedPharmacy.PhoneNumber)}
                      >
                        📞 Ara
                      </button>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
        </div>
      )}
    </section>
  );
};

export default StoreLocator;
