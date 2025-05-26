import React, { useEffect, useState } from 'react';
import SplashScreen from "./components/SplashScreen";
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => setIsSplashVisible(false), 2000); // 2 sec
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    {isSplashVisible ? <SplashScreen /> : 
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
    }
    </>
  );
}

export default App;