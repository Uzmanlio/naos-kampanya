import './CampaignGrid.css';

const CampaignGrid = () => {
  const campaigns = [
    {
      id: 1,
      badge: 'ÖNE ÇIKAN KAMPANYA',
      title: '2250TL VE ÜZERİ ALIŞVERİŞLERDE',
      subtitle: 'AYIN ÜRÜNÜ',
      highlight: 'ÖZEL FİYAT!',
      price: '399,90 TL',
      description: '2250 TL ve üzeri alışverişe Yaş Yönetimi Ürünlerinde Hediye',
      bgColor: '#c8e6e6',
      textColor: '#2c5f7c',
      image: '/2.png'
    },
    {
      id: 2,
      badge: 'ÖNE ÇIKAN KAMPANYA',
      title: 'HEDİYE VE TANIŞMA SETLERİNDE',
      subtitle: '',
      highlight: 'ÖZEL FİYATLAR!',
      price: '',
      description: 'Esthederm ürünlerinde hediye setleri ve özel fırsatlar',
      bgColor: '#f9e8b8',
      textColor: '#8b6914',
      image: '/4.png'
    },
    {
      id: 3,
      badge: 'CİLT BAKIM RUTİNİ',
      title: 'KENDİ CİLT BAKIM RUTİNİNİ',
      subtitle: 'AVANTAJLI',
      highlight: 'FİYATLARLA OLUŞTUR!',
      price: '',
      description: 'Temizleyici bakım serisi ile cilt bakım rutininizi oluşturun',
      bgColor: '#d4ede8',
      textColor: '#1a6b5f',
      image: '/5.png'
    }
  ];

  const effectCampaigns = [
    {
      id: 4,
      badge: 'ÖNE ÇIKAN KAMPANYA',
      title: '3000 TL VE ÜZERİ ALIŞVERİŞLERİNİZE',
      highlight: 'ÖZEL',
      description: 'ORİJİNAL BOY HEDİYENİZİ KAÇIRMAYIN! Özel kampanyamızdan faydalanın ve hediye ürünlerinizi alın.',
      bgColor: '#ffffff',
      textColor: '#2c5f7c',
      image: '/2.png'
    },
    {
      id: 5,
      badge: 'ÖNE ÇIKAN KAMPANYA',
      title: 'TÜM CİLT VE SAÇ BAKIM',
      highlight: 'ÜRÜNLERİNDE',
      description: '2 ADET VE ÜZERİ %20 İNDİRİM! Cilt ve saç bakım ürünlerinde özel indirim fırsatını kaçırmayın.',
      bgColor: '#ffffff',
      textColor: '#333',
      image: '/4.png'
    },
    {
      id: 6,
      badge: 'ÖNE ÇIKAN KAMPANYA',
      title: 'TÜM PARFÜM VE MAKYAJ',
      highlight: 'ÜRÜNLERİNDE',
      description: '2 ADET VE ÜZERİ %30 İNDİRİM! Parfüm ve makyaj ürünlerinde büyük indirim fırsatı sizleri bekliyor.',
      bgColor: '#ffffff',
      textColor: '#2c5f7c',
      image: '/5.png'
    }
  ];

  return (
    <section id="kampanyalar" className="campaign-grid-section">
      {/* Banner Above Campaign Cards */}
      <div className="campaign-banner">
        <img src="/channels4_banner.jpg" alt="Institut Esthederm Banner" className="banner-image" />
      </div>

      <div className="campaign-container">
        <div className="campaigns-grid">
          {campaigns.map(campaign => (
            <div 
              key={campaign.id} 
              className="campaign-card"
              style={{ backgroundColor: campaign.bgColor }}
            >
              <div className="campaign-badge">{campaign.badge}</div>
              
              {/* Campaign Image */}
              <div className="campaign-image">
                <img src={campaign.image} alt={campaign.title} />
              </div>
              
              <div className="campaign-content">
                <h3 className="campaign-heading" style={{ color: campaign.textColor }}>
                  {campaign.title}
                </h3>
                {campaign.subtitle && (
                  <p className="campaign-subtitle" style={{ color: campaign.textColor }}>
                    {campaign.subtitle}
                  </p>
                )}
                <h2 className="campaign-highlight" style={{ color: campaign.textColor }}>
                  {campaign.highlight}
                </h2>
                {campaign.price && (
                  <div className="campaign-price">
                    {campaign.price}
                  </div>
                )}
                <p className="campaign-desc">{campaign.description}</p>
              </div>
              <button className="campaign-btn">KEŞFEDİN!</button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Campaign Section with Background Image */}
      <div className="campaign-effect-section">
        <div className="campaign-container">
          <div className="campaigns-grid">
            {effectCampaigns.map(campaign => (
              <div 
                key={campaign.id} 
                className="campaign-card campaign-card-effect"
                style={{ backgroundColor: campaign.bgColor }}
              >
                <div className="campaign-badge">{campaign.badge}</div>
                
                {/* Campaign Image */}
                <div className="campaign-image">
                  <img src={campaign.image} alt={campaign.title} />
                </div>
                
                <div className="campaign-content">
                  <h3 className="campaign-heading" style={{ color: campaign.textColor }}>
                    {campaign.title}
                  </h3>
                  <h2 className="campaign-highlight" style={{ color: campaign.textColor }}>
                    {campaign.highlight}
                  </h2>
                  <p className="campaign-desc">{campaign.description}</p>
                </div>
                <button className="campaign-btn">KEŞFEDİN!</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignGrid;
