import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
            <div className="text-center max-w-3xl px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 animate-fade-in-up">
                    Hi, I'm Dilsad Rukiye Erdogan
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                    A passionate developer building amazing modern web applications.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#" className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Download CV
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
