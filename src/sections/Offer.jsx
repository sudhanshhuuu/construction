import { motion } from "framer-motion";
import OfferImg from '../assets/banner1.png'; // Update path
import { Link } from "react-router-dom";

const Offer = () => {
    return (
        <div
            className="relative w-full h-[60vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${OfferImg})` }}
        >
            {/* Orange semi-overlay */}
            <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-blue-500/70 rounded-r-full sm:rounded-r-[40%] md:rounded-r-[30%] lg:rounded-r-[20%]"></div>
                <div className="w-1/2"></div>
            </div>

            {/* Animated Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 z-10"
            >
                <div className="text-white max-w-xl space-y-4">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow">
                        We Build <br /> Your Dream
                    </h1>
                    <p className="text-sm sm:text-base text-white/90">
                        From planning to execution, we provide modern, reliable construction solutions that stand the test of time.
                    </p>
                    <Link to="/contact">
                        <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full text-sm sm:text-base hover:bg-blue-100 transition duration-300">
                            Book Free Consultation
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Offer;
