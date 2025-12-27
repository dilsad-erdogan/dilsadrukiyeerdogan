import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                                Project Preview
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Project Title {item}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    A brief description of this amazing project. It solves real-world problems using modern technologies.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">React</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">Node.js</span>
                                </div>
                                <a href="#" className="inline-block w-full text-center py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                                    View Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
