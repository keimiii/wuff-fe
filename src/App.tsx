import { useEffect, useState } from 'react';
import SplashScreen from "./components/SplashScreen";
import Header from './components/Header';
import Hero from './components/sections/Hero';
import AboutWuff from './components/sections/AboutWuff.tsx';
import AboutQuokka from './components/sections/AboutQuokka.tsx';
import './styles/animations.css';
import Lenis from 'lenis';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  useEffect(() => {
    const timeout = setTimeout(() => setIsSplashVisible(false), 2000); // 2 sec
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <SplashScreen isVisible={isSplashVisible} />
    {
      !isSplashVisible && <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutWuff />
        <AboutQuokka />
        {/*<Services />*/}
        {/*<Portfolio />*/}
        {/*<Contact />*/}
      </main>
      {/*<Footer />*/}
    </div>
    }
    </>
  );
}

export default App;