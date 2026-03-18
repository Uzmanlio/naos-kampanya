import './CampaignBanner.css';

const CampaignBanner = () => {
  return (
    <section className="campaign-banner">
      <div className="banner-content">
        <div className="banner-overlay">
          <h2 className="banner-title">Özel Kampanya</h2>
          <p className="banner-subtitle">Tüm Naos ürünlerinde indirim fırsatı!</p>
          <button className="banner-cta">Kampanya Detayları</button>
        </div>
      </div>
    </section>
  );
};

export default CampaignBanner;
