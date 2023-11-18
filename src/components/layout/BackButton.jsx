import { useState, useEffect } from 'react';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import s from './BackButton.module.css';

const BackButton = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const isTop = window.scrollY < 100;
        setIsScrolled(!isTop);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${s.ScrollToTopButton} ${isScrolled ? s.Show : ''}`} onClick={scrollToTop}>
            <KeyboardArrowUpRoundedIcon></KeyboardArrowUpRoundedIcon>
        </div>
    );
};

export default BackButton;
