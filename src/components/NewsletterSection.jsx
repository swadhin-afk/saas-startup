import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const NewsletterSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDiscoverClick = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <section id="newsletter" className="section-container px-4 md:px-0">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-blue-600 rounded-2xl overflow-hidden relative"
      >
        {/* Background Slant */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"
        ></motion.div>

        <div className="relative md:px-16 px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Text Content */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              className="text-white max-w-lg text-center md:text-left"
            >
              <motion.h2
                variants={textVariant(0.3)}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
              >
                Let's connect together
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.6)}
                className="text-blue-100 text-sm sm:text-base"
              >
                Join our community to stay updated with the latest web development trends, tools, and tutorials.
              </motion.p>
            </motion.div>

            {/* Email Form */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              className="w-full md:w-auto"
            >
              <motion.form
                variants={fadeIn('up', 0.6)}
                className="flex flex-col sm:flex-row gap-4 sm:gap-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleDiscoverClick();
                }}
              >
                <motion.input
                  variants={fadeIn('right', 0.7)}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  defaultValue="swadhinjit14@gmail.com"
                  className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  readOnly
                />
                <motion.button
                  variants={fadeIn('left', 0.7)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full sm:w-auto bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Discover</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closePopup}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-lg p-6 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2"><strong>Mail ID:</strong> swadhinjit14@gmail.com</p>
            <p className="mb-4"><strong>Phone:</strong> 9348632268</p>
            <button
              onClick={closePopup}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Custom Clip Path */}
      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  );
};

export default NewsletterSection;
