import React, { useEffect, useState } from 'react'
import "./backToTop.scss"

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const handleScroll = () => {
        if (window.scrollY > 250) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <button className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={handleScrollToTop}>
         <i className="fa-solid fa-arrow-up"></i>
        </button>
    )
}
