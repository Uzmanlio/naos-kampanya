import './CampaignDetails.css';

const CampaignDetails = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Bioderma İndirim',
      description: 'Tüm Bioderma ürünlerinde %30 indirim',
      discount: '%30',
      validUntil: '31 Mart 2026'
    },
    {
      id: 2,
      title: 'Institut Esthederm Kampanyası',
      description: '2 Al 1 Öde fırsatı',
      discount: '2 Al 1 Öde',
      validUntil: '15 Nisan 2026'
    },
    {
      id: 3,
      title: 'Etat Pur Özel Fiyat',
      description: 'Seçili ürünlerde özel indirim',
      discount: '%25',
      validUntil: '30 Nisan 2026'
    }
  ];

  return (
    <section className="campaign-details">
      <h2 className="section-title">Aktif Kampanyalar</h2>
      <div className="campaigns-grid">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="campaign-card">
            <div className="campaign-badge">{campaign.discount}</div>
            <h3 className="campaign-title">{campaign.title}</h3>
            <p className="campaign-description">{campaign.description}</p>
            <div className="campaign-footer">
              <span className="campaign-date">Son: {campaign.validUntil}</span>
              <button className="campaign-button">Detaylar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampaignDetails;
