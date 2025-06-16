import React from 'react';
import comic_quokka from '../../public/comic-quokka.jpeg';

const ComicQuokka: React.FC = () => {
    return (
        <section id="comic_quokka" className="bg-white bg-opacity-25 flex items-center md:pb-16 z-3 md:pt-16">
            <div className="opacity-0 animate-slideInRight animation-delay-1200 mx-auto">
                <img src={comic_quokka} alt='comic_quokka'/>
            </div>
        </section>
    );
};

export default ComicQuokka;

