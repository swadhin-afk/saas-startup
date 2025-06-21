import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const FeaturesSection = () => {
  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      icon: "💻",
      title: "Custom Web Design",
      description: "Responsive, user-focused UI/UX designs tailored to your brand.",
    },
    {
      icon: "🧩",
      title: "Frontend Development",
      description: "Modern, scalable React & Tailwind-based interfaces built for performance.",
    },
    {
      icon: "🛠️",
      title: "Backend Integration",
      description: "Robust APIs, secure databases, and seamless backend functionality.",
    },
  ];

  return (
    <>
      <motion.section
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <motion.div variants={fadeIn('up', 0.3)} className="text-center mb-12">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Build Smarter Websites With Us
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="text-gray-600 text-lg"
          >
            We deliver powerful and scalable web solutions tailored to your business goals.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <motion.div
                variants={fadeIn('down', 0.4 * (index + 1))}
                className="w-20 h-20 rounded-full mb-6 flex items-center justify-center text-4xl"
                style={{
                  backgroundColor:
                    index === 0
                      ? '#E0F7FA'
                      : index === 1
                      ? '#FFF3E0'
                      : '#E8F5E9',
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-3 text-center"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                variants={fadeIn('up', 0.6 * (index + 1))}
                className="text-gray-600 text-center"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn('up', 0.7)} className="text-center mt-12">
          <motion.button
            variants={fadeIn('up', 0.8)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative"
          >
            Get a Free Quote
            <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-auto relative"
              initial={{ scale: 0.6, rotateX: -30 }}
              animate={{ scale: 1, rotateX: 0, transition: { type: 'spring', stiffness: 200 } }}
              exit={{ scale: 0.6, rotateX: -30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // prevent modal from closing when clicking inside
            >
              <button
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <div className="text-4xl mb-4">🙌</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Thanks for connecting with us!</h3>
              <p className="text-gray-600">We'll reach out to you soon.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturesSection;
