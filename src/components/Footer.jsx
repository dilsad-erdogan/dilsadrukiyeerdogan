import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Copyright */}
                    <div className="text-gray-600 dark:text-gray-400 text-sm order-2 md:order-1">
                        <p>&copy; {new Date().getFullYear()} Dilsad Rukiye Erdogan. {t('footer', 'rights')}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6 order-1 md:order-2">
                        <a href="https://www.linkedin.com/in/dil%C5%9Fad-erdo%C4%9Fan-089547221/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/dilsad-erdogan" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110">
                            <FaGithub />
                        </a>
                        <a href="mailto:dilsadrukiyeerdogan@gmail.com" className="text-xl text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors transform hover:scale-110">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
