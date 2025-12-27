import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <h3 className="text-2xl font-bold text-blue-600 mb-6 border-b pb-2 border-blue-100">Frontend</h3>
                        <ul className="space-y-3">
                            {['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Redux'].map((skill) => (
                                <li key={skill} className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <h3 className="text-2xl font-bold text-indigo-600 mb-6 border-b pb-2 border-indigo-100">Backend</h3>
                        <ul className="space-y-3">
                            {['Node.js', 'Express', 'MongoDB / SQL', 'RESTful APIs', 'Git'].map((skill) => (
                                <li key={skill} className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

