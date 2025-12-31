import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { language } = useLanguage();

    const experiences = [
        {
            company: "TRMotor Güç Sistemleri San. A.Ş.",
            role: {
                en: "INTERN PLM BACKEND DEVELOPER",
                tr: "STAJYER PLM BACKEND GELİŞTİRİCİ"
            },
            period: {
                en: "2023 - 2024 ( 7 months )",
                tr: "2023 - 2024 ( 7 ay )"
            },
            description: {
                en: "Coding software to support the program management system using Python, C#, C++, Java.",
                tr: "Python, C#, C++, Java kullanarak program yönetim sistemini desteklemek için yazılım kodlama."
            }
        },
        {
            company: "MAK Robot",
            role: {
                en: "INTERN FULLSTACK DEVELOPER",
                tr: "STAJYER FULLSTACK GELİŞTİRİCİ"
            },
            period: {
                en: "2022 - 2023 ( 40 days )",
                tr: "2022 - 2023 ( 40 gün )"
            },
            description: {
                en: "Admin panel design and backend API software using C#, HTML, bootstrap. Website construction using wordpress, php, css, js.",
                tr: "C#, HTML, bootstrap kullanarak yönetici paneli tasarımı ve arka uç API yazılımı. Wordpress, php, css, js kullanarak web sitesi yapımı."
            }
        },
        {
            company: "Otokar",
            role: {
                en: "INTERN FULLSTACK DEVELOPER",
                tr: "STAJYER FULLSTACK GELİŞTİRİCİ"
            },
            period: {
                en: "2021 - 2022 ( 40 days )",
                tr: "2021 - 2022 ( 40 gün )"
            },
            description: {
                en: "Coding the information taken into the database by web scraping with Python. Member site that can be logged in using C#, js, HTML, bootstrap.",
                tr: "Python ile web scraping yapılarak veritabanına alınan bilgilerin kodlanması. C#, js, HTML, bootstrap kullanılarak giriş yapılabilen üye sitesi."
            }
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
                    {language === 'tr' ? 'Deneyim' : 'Experience'}
                </h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                                        {exp.company}
                                    </h3>
                                    <h4 className={`text-lg font-medium mt-1`}>
                                        {exp.role[language]}
                                    </h4>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold`}>
                                        {exp.period[language]}
                                    </span>
                                </div>
                            </div>
                            <p className={`leading-relaxed`}>
                                {exp.description[language]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
