import { useEffect, useState } from 'react';
import './styles/animations.css';
import Lenis from 'lenis';

import SplashScreen from "./components/SplashScreen";
import Header from './components/Header';
import Landing from './components/sections/Landing.tsx';
import AboutWuff from './components/sections/AboutWuff.tsx';
import AboutQuokka from './components/sections/AboutQuokka.tsx';
import Laws from './components/sections/Laws.tsx';
import FollowCursor from "./components/CursorQuokka.tsx";
import ComicWuff from "./components/sections/ComicWuff.tsx";
import ComicQuokka from "./components/sections/ComicQuokka.tsx";

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const lenis = new Lenis();
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  useEffect(() => {
    const timeout = setTimeout(() => setIsSplashVisible(false), 1500); // 1.5 sec
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <SplashScreen isVisible={isSplashVisible} />
    {
      !isSplashVisible && 
      <div className="App">
        {isMobile ? null : <FollowCursor />}
        <Header />
        <main>
          <Landing />
          <AboutWuff />
          <ComicWuff />
          <AboutQuokka />
          <ComicQuokka />
          <Laws />
        </main>
      </div>
    }
    </>
  );
}

export default App;