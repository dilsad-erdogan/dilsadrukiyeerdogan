import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>
                <div className="space-y-8 relative">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

                    <div className="relative pl-12">
                        <div className="absolute left-0 top-1.5 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900">Senior Frontend Developer</h3>
                            <h4 className="text-blue-600 font-medium">Tech Corp Inc.</h4>
                            <p className="text-sm text-gray-500 mt-1 mb-4">2023 - Present</p>
                            <p className="text-gray-600">Leading the frontend team in building scalable micro-frontends using React and Module Federation. improved performance by 40%.</p>
                        </div>
                    </div>

                    <div className="relative pl-12">
                        <div className="absolute left-0 top-1.5 w-8 h-8 bg-indigo-500 rounded-full border-4 border-white shadow"></div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
                            <h4 className="text-blue-600 font-medium">Digital Agency</h4>
                            <p className="text-sm text-gray-500 mt-1 mb-4">2021 - 2023</p>
                            <p className="text-gray-600">Developed responsive websites for diverse clients using React, Gatsby, and Tailwind CSS. Collaborated closely with designers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
