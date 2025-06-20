import React from 'react';
import { ArrowDown } from 'lucide-react';
import bg from '../../static/wuff_grass.mp4';
import '../../styles/landing.css';
import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
    children: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden whitespace-break-spaces font-titan text-white text-5xl md:text-6xl lg:text-7xl mb-2"
            style={{
                lineHeight: 0.75,
            }}
        >
            <div>
                {children.split("").map((l: string, i: number) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-105%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l: string, i: number) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};

const Landing: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about_wuff');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative">
      <video id='bg-video' className='videoTag h-dvh' autoPlay loop muted playsInline preload={"auto"}>
        <source src={bg} type='video/mp4'/>
      </video>
      <div className="container h-2/5 mx-auto px-4 text-center">
        <FlipLink>
          MEET WUFF
        </FlipLink>
      </div>
      
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 cursor-pointer"
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Landing;