import { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/lipbalmbanner.png',
      title: 'GÜNCEL KAMPANYALAR',
      subtitle: 'Naos markalarında özel fırsatlar'
    },
    {
      image: '/collagen-banner.png',
      title: 'GÜNCEL KAMPANYALAR',
      subtitle: 'Naos markalarında özel fırsatlar'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToPharmacies = () => {
    const storeLocator = document.querySelector('.store-locator');
    if (storeLocator) {
      storeLocator.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToCampaigns = () => {
    const campaigns = document.getElementById('kampanyalar');
    if (campaigns) {
      campaigns.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section">
      {/* Title and Subtitle Above Carousel */}
      <div className="hero-header">
        <h1 className="hero-title">Institut Esthederm Ürünlerinde Özel Fırsatları Kaçırmayın</h1>
        <p className="hero-subtitle">
          Kampanyadan yararlanmak için kampanyaya dahil eczane listesine{' '}
          <button className="hero-cta-btn" onClick={scrollToPharmacies}>
            Göz Atın!
          </button>
        </p>
        <button className="hero-discover-btn" onClick={scrollToCampaigns}>
          Kampanyaları Keşfet
        </button>
      </div>

      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          ›
        </button>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
