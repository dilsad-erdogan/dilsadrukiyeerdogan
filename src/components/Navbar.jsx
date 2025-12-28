import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    const navLinks = [
        { href: "#hero", label: t('navbar', 'about') },
        { href: "#skills", label: t('navbar', 'skills') },
        { href: "#experience", label: t('navbar', 'experience') },
        { href: "#projects", label: t('navbar', 'projects') },
        { href: "#contact", label: t('navbar', 'contact') }
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Left: Branding */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-900 dark:text-white">
                        {t('navbar', 'title')}
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Center: Navigation & Right: Toggles */}
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

                        {/* Nav Links */}
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}

                        {/* Divider for Mobile */}
                        <li className="my-2 border-t border-gray-200 dark:border-gray-700 md:hidden"></li>

                        {/* Right: Toggles (now inside the list for easier mobile layout integration, or can be separate) */}
                        <li className="flex items-center space-x-4 mt-2 md:mt-0 md:ms-4">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="text-2xl hover:scale-110 transition-transform p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
                            >
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>

                            {/* Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="text-2xl hover:scale-110 transition-transform p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                title={language === 'tr' ? "Switch to English" : "Türkçe'ye Geç"}
                            >
                                {language === 'tr' ? '🇹🇷' : '🇬🇧'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
