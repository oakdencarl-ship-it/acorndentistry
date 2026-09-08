import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Home from './components/Home';
import Treatments from './components/Treatments';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showSplash, setShowSplash] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'treatments':
        return <Treatments />;
      case 'pricing':
        return <Pricing setActiveTab={setActiveTab} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      
      <div className={`min-h-screen bg-gray-50 transition-opacity duration-300 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <div className="min-h-screen">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <main>
            {renderContent()}
          </main>
        </div>
      </div>
      <WhatsAppWidget />
    </>
  );
}

export default App;