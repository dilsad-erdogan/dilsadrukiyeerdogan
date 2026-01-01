import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { t } = useLanguage();
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' or 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Required field validation (HTML5 'required' attribute handles empty checks, but good to be safe)
        const currentForm = form.current;
        if (
            !currentForm.name.value ||
            !currentForm.email.value ||
            !currentForm.title.value ||
            !currentForm.message.value
        ) {
            setLoading(false);
            return;
        }

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus('success');
                    form.current.reset(); // Clear form
                    setTimeout(() => setStatus(null), 5000); // Clear success message after 5s
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setLoading(false);
                    setStatus('error');
                    setTimeout(() => setStatus(null), 5000); // Clear error message after 5s
                },
            );
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t('contactSection', 'title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('contactSection', 'description')}
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.01] transition-transform duration-300">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('contactSection', 'name')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                                    placeholder={t('contactSection', 'name')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t('contactSection', 'email')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                                    placeholder={t('contactSection', 'email')}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {t('contactSection', 'subject')}
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                                placeholder={t('contactSection', 'subject')}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {t('contactSection', 'message')}
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows="5"
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                                placeholder={t('contactSection', 'message')}
                            ></textarea>
                        </div>

                        {status === 'success' && (
                            <p className="text-green-600 dark:text-green-400 font-medium text-center">
                                {t('contactSection', 'success')}
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 dark:text-red-400 font-medium text-center">
                                {t('contactSection', 'error')}
                            </p>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`inline-block w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? t('contactSection', 'sending') : t('contactSection', 'send')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
