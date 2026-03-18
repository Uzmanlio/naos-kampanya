import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Icon Section */}
      <div className="footer-icons">
        <div className="footer-icons-container">
          <div className="icon-item">
            <img src="https://esthederm.com.tr/assets/img/pictolar/cilt-bakimi.png" alt="Cilt Bakımı" />
            <p>CİLT BAKIMI</p>
          </div>
          <div className="icon-item">
            <img src="https://esthederm.com.tr/assets/img/pictolar/hucresel-su.png" alt="Hücresel Su" />
            <p>HÜCRESEL SU</p>
          </div>
          <div className="icon-item">
            <img src="https://esthederm.com.tr/assets/img/pictolar/ekobiyolojik.png" alt="Ekobiyolojik" />
            <p>EKOBİYOLOJİK</p>
          </div>
          <div className="icon-item">
            <img src="https://esthederm.com.tr/assets/img/pictolar/patentli-icerik.png" alt="Patentli İçerik" />
            <p>PATENTLİ İÇERİK</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="https://esthederm.com.tr/assets/img/logo/logo.png" 
              alt="Institut Esthederm Paris" 
              className="footer-logo"
            />
          </div>

          <div className="footer-section">
            <h3>Marka</h3>
            <ul>
              <li><a href="/hakkimizda">Hakkımızda</a></li>
              <li><a href="/kurucumuz">Kurucumuz</a></li>
              <li><a href="/essiz-ozellikler">Eşsiz Özellikler</a></li>
              <li><a href="/hucresel-bilim">Hücresel Bilim</a></li>
              <li><a href="/bronzlasma">Bronzlaşma Sanatı</a></li>
              <li><a href="/naos">NAOS</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <ul>
              <li><a href="/seriler">Seriler</a></li>
              <li><a href="/cilt-koclari">Cilt Koçları</a></li>
              <li><a href="/enstitü-bakimi">Enstitü Bakımı</a></li>
              <li><a href="/yetkili-eczaneler">Yetkili Eczaneler</a></li>
              <li><a href="/yetkili-klinikler">Yetkili Klinikler</a></li>
              <li><a href="/iletisim">İletişim</a></li>
              <li><a href="/yasal-uyarilar">Yasal Uyarılar</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>E-Bülteminize Katılın.</h3>
            <p>E-posta adresinizi girin.</p>
            <div className="newsletter">
              <input type="email" placeholder="E-posta adresinizi girin." />
              <button>✉️</button>
            </div>
            <div className="footer-privacy">
              <label>
                <input type="checkbox" />
                <span>
                  <a href="/gizlilik">Gizlilik ve Kişisel Veri Koruma Politikası</a>'na uygun olarak kişisel verilerimin işlenmesine onay veriyorum. <a href="/kisisel-verilerin-islenmesi">Kişisel Verilerin İşlenmesine Dair Aydınlatma Metnini</a> okudum.
                </span>
              </label>
            </div>
            <div className="footer-app-stores">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
