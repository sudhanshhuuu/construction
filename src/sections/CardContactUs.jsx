import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, PhoneCall, Mail, FileText } from 'lucide-react';

const CardContactUs = () => {
    return (
        <div id="contact" className="w-full bg-gradient-to-br from-white to-blue-50 py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Contact Info + Form */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-2">
                            Get in <span className="text-black">Touch</span>
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Have a project in mind or want to learn more about our work? Reach out now — we're just a message away.
                        </p>
                    </div>

                    <div className="space-y-4 text-base sm:text-lg text-gray-800">
                        <div className="flex items-center gap-3">
                            <PhoneCall className="text-blue-600" size={20} />
                            <span className="font-medium">+91 99176 31340</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="text-blue-600" size={20} />
                            <span className="font-medium">demo@demo.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FileText className="text-blue-600" size={20} />
                            <span className="font-medium">GST: 05AFUPI7278B1Z7</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-blue-600" size={20} />
                            <span className="font-medium">South Civil Lines, Delhi Road, Roorkee, Haridwar (U.K.)</span>
                        </div>
                    </div>

                    <Link to="/contact">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Google Map */}
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl border border-blue-100">
                    <iframe
                        title="U.K SUPERTECH Location - Roorkee"
                        className="w-full h-full"
                        frameBorder="0"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.118634919518!2d77.88713547549636!3d29.866338475994814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb387514fb9ed%3A0x3c9c6f3fa03f05c2!2sSouth%20Civil%20Lines%2C%20Delhi%20Rd%2C%20Roorkee%2C%20Uttarakhand%20247367!5e0!3m2!1sen!2sin!4v1719231131111!5m2!1sen!2sin"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardContactUs;
