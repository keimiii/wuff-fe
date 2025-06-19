import {useEffect, useState} from 'react';
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

    const isMobile = width <= 768;

    useEffect(() => {
        if (isMobile) {
            setIsSplashVisible(false);
        }
        const timeout = setTimeout(() => setIsSplashVisible(false), 1500); // 1.5 sec
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


    return (
        <>
            <SplashScreen isVisible={isSplashVisible}/>
            <div className="App">
                {isMobile ? null : <FollowCursor/>}
                <Header/>
                <main>
                    <Landing/>
                    <AboutWuff/>
                    <ComicWuff/>
                    <AboutQuokka/>
                    <ComicQuokka/>
                    <Laws/>
                </main>
            </div>
        </>
    );
}

export default App;