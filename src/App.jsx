import './App.css';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CampaignGrid from './components/CampaignGrid';
import StoreLocator from './components/StoreLocator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <TopHeader />
      <Header />
      <main>
        <HeroSection />
        <CampaignGrid />
        <StoreLocator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
