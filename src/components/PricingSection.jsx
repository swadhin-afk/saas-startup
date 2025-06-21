import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const PricingSection = () => {
  const [projectCount, setProjectCount] = useState(1);
  const [showUpi, setShowUpi] = useState(false);

  // Web development pricing
  const starterPrice = projectCount * 100; // Basic website per project
  const businessPrice = projectCount * 200; // Advanced website per project

  // Your UPI ID
  const upiId = '9348632268@ybl';

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Web Development Pricing
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Starter Plan */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.h3
              variants={fadeIn('up', 0.6)}
              className="text-xl text-gray-600 mb-4"
            >
              Starter Plan
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.7)}
              className="text-3xl font-bold mb-2"
            >
              ${starterPrice}
            </motion.p>
            <p className="text-gray-500 text-sm">
              Includes basic landing page, contact form, and responsive design.
            </p>
          </motion.div>

          {/* Business Plan */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.h3
              variants={fadeIn('up', 0.6)}
              className="text-xl text-gray-600 mb-4"
            >
              Business Plan
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.7)}
              className="text-3xl font-bold mb-2"
            >
              ${businessPrice}
            </motion.p>
            <p className="text-gray-500 text-sm">
              Includes eCommerce, CMS integration, admin dashboard, and SEO optimization.
            </p>
          </motion.div>
        </motion.div>

        {/* Slider */}
        <motion.div variants={fadeIn('up', 0.8)} className="max-w-xl mx-auto">
          <motion.p
            variants={fadeIn('up', 0.9)}
            className="text-center text-gray-600 mb-4"
          >
            {projectCount} {projectCount === 1 ? 'project' : 'projects'}
          </motion.p>

          <motion.div variants={fadeIn('up', 1.0)} className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                type="range"
                min="1"
                max="10"
                value={projectCount}
                onChange={(e) => setProjectCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-gray-600">10</span>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('up', 1.1)} className="text-center mt-12">
            <motion.p
              variants={fadeIn('up', 1.2)}
              className="text-xl text-gray-600 mb-4"
            >
              Ready to build your website?
            </motion.p>
            <motion.button
              variants={fadeIn('up', 1.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowUpi(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Get Started
            </motion.button>

            {/* Show UPI ID after click */}
            {showUpi && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 text-green-600 font-semibold text-lg"
              >
                Your UPI ID: <span className="font-mono">{upiId}</span>
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
