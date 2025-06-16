import React from 'react';
import comic_wuff from '../../public/comic-wuff.jpeg';

const ComicWuff: React.FC = () => {
    return (
        <section id="comic_wuff" className="bg-white bg-opacity-25 flex items-center z-3 md:py-16">
            <div className="opacity-0 animate-slideInRight animation-delay-900 mx-auto">
                <img src={comic_wuff} alt='comic_wuff'/>
            </div>
        </section>
    );
};

export default ComicWuff;

