import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="https://esthederm.com.tr/assets/img/logo/logo.png" 
            alt="Institut Esthederm Paris" 
            className="logo-image"
          />
        </div>
        <nav className="header-nav">
          <a href="#kampanyalar" onClick={(e) => { e.preventDefault(); scrollToSection('kampanyalar'); }}>
            Kampanyalar
          </a>
          <a href="#kampanya-eczaneleri" onClick={(e) => { e.preventDefault(); scrollToSection('kampanya-eczaneleri'); }}>
            Kampanya Eczaneleri
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
