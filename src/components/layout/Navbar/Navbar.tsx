import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'; // ✅ Import it
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" onClick={closeMenu}>
                    {t('author')}
                </Link>
            </div>

            <div className="right-group">
                <div className="lang-switcher desktop-only">
                    <LanguageSwitcher />
                </div>
                <div className="theme-switcher desktop-only">
                    <ThemeSwitcher />
                </div>
                <div className="burger" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            <ul className={`links ${isMobileMenuOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/discover-movies" onClick={closeMenu}>
                        {t('nav-discover')}
                    </Link>
                </li>
                <li>
                    <Link to="/popular" onClick={closeMenu}>
                        {t('popular')}
                    </Link>
                </li>
                <li>
                    <Link to="/top-rated" onClick={closeMenu}>
                        {t('top-rated')}
                    </Link>
                </li>
                <li>
                    <Link to="/tv-shows" onClick={closeMenu}>
                        {t('tv-shows')}
                    </Link>
                </li>
                <li className="mobile-lang-switcher">
                    <LanguageSwitcher />
                </li>
                <li className="mobile-theme-switcher">
                    <ThemeSwitcher />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
