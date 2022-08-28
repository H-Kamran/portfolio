import "./Header.css";
import logo from "../../img/logo.svg";
import logoAlt from "../../img/logo-alt.svg";
import menu from "../../img/menu.svg";
import close from "../../img/close.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

const Header = () => {
    const headerRef = useRef(null);
    const ulRef = useRef(null);

    const [logoSrc, setLogoSrc] = useState(logoAlt);
    const [menuSrc, setMenuSrc] = useState(menu);
    const [headerClass, setHeaderClass] = useState(null);
    const [linkClass, setLinkClass] = useState(null);
    const [navDisplay, setNavDisplay] = useState("");

    const handleScroll = useCallback(() => {
        // let bool = window.innerWidth > 920
        //     ? Math.floor((window.pageYOffset + window.innerHeight * 0.1) / window.innerHeight) % 2 === 0
        //     : Math.floor((window.pageYOffset + window.innerHeight * 0.05) / (window.innerHeight * 0.8)) % 2 === 0;

        let bool = Math.floor((window.pageYOffset + window.innerHeight * 0.1) / window.innerHeight) % 2 === 0;
        if (window.innerWidth > 920) {
            if (bool) {
                setHeaderClass("");
                setLogoSrc(logo);
                setLinkClass("");
            } else {
                setHeaderClass("header-scroll");
                setLogoSrc(logoAlt);
                setLinkClass("color");
            }
        }
        else {
            setHeaderClass("");
            setLogoSrc(logo);
            setLinkClass("");
        }
    }, [setLogoSrc, setHeaderClass, setLinkClass]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const hideMenu = () => {
        setNavDisplay("");
        setMenuSrc(menu);
    }

    return (
        <header id="header" ref={headerRef} className={headerClass}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <img src={logoSrc} className="app-logo" alt="logo" />
            <nav className={navDisplay}>
                <ul ref={ulRef} className="menu">
                    <motion.li whileHover={{
                        x: 0,
                        y: -2,
                        scale: 1.05
                    }}><a className={linkClass} href="#home" onClick={hideMenu}>Home</a></motion.li>
                    <motion.li whileHover={{
                        x: 0,
                        y: -2,
                        scale: 1.05
                    }}><a className={linkClass} href="#skills" onClick={hideMenu}>Skills</a></motion.li>
                    <motion.li whileHover={{
                        x: 0,
                        y: -2,
                        scale: 1.05
                    }}><a className={linkClass} href="#about" onClick={hideMenu}>About</a></motion.li>
                    <motion.li whileHover={{
                        x: 0,
                        y: -2,
                        scale: 1.05
                    }}><a className={linkClass} href="#contact" onClick={hideMenu}>Contact</a></motion.li>
                </ul>
            </nav>
            <img className="menu-btn" alt="" src={menuSrc} onClick={() => {
                setMenuSrc(navDisplay === "" ? close : menu);
                setNavDisplay(navDisplay === "" ? "display-block" : "");
            }} />
        </header>
    );
}

export default Header;