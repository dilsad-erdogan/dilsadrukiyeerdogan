import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import cvFile from '../assets/Dilsad Rukiye Erdogan.pdf';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 pt-16 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-3xl text-left">
                    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {t('hero', 'greeting')}
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Dilsad Rukiye Erdogan
                        </span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                        {t('hero', 'role')}
                    </h3>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
                        {t('hero', 'bio')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-6 order-2 sm:order-1">
                            <a href="https://www.linkedin.com/in/dilşad-erdoğan-089547221/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/dilsad-erdogan" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110">
                                <FaGithub />
                            </a>
                            <a href="mailto:dilsadrukiyeerdogan@gmail.com" className="text-3xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors transform hover:scale-110">
                                <FaEnvelope />
                            </a>
                        </div>

                        {/* CV Button */}
                        <a
                            href={cvFile}
                            download="Dilsad_Rukiye_Erdogan_CV.pdf"
                            className="order-1 sm:order-2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center min-w-[200px]"
                        >
                            {t('hero', 'downloadCv')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
