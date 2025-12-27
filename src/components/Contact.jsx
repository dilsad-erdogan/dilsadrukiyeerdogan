import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:your.email@example.com" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
