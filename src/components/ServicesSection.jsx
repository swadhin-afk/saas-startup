import React from 'react';
import { BsStack } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: 'Web Development',
      description: 'We build responsive, modern, and scalable web applications tailored to your business needs.',
      link: '#learn-more',
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: 'Ad-Creatives',
      description: 'We craft compelling ad creatives that drive attention and boost conversions.',
      link: '#learn-more',
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: 'UI/UX Design',
      description: 'Delivering intuitive user experiences with clean and thoughtful design.',
      link: '#learn-more',
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: 'Digital marketing',
      description: 'We help startups grow online through data-driven digital marketing strategies across SEO, social media, content, and ads.',
      link: '#learn-more',
    },
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
        >
          {/* Header */}
          <motion.div variants={fadeIn('right', 0.4)} className="md:w-1/3">
            <motion.h2
              variants={textVariant(0.2)}
              className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
            >
              Future of support with web development
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.5)}
              className="text-gray-600 text-lg mb-4 md:w-4/5"
            >
              Discuss your goals, define success, and overcome challenges with tailored digital solutions.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} className="space-y-3">
              <motion.div variants={fadeIn('right', 0.7)} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-600">UX design & content strategy</span>
              </motion.div>
              <motion.div variants={fadeIn('right', 0.8)} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-600">Efficient and scalable development</span>
              </motion.div>
            </motion.div>
            <motion.a
              href="#connect"
              variants={fadeIn('up', 0.9)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors"
            >
              Get started
            </motion.a>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                whileHover={{ scale: 1.05 }}
                className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div variants={fadeIn('down', 0.4 * (index + 1))} className="mb-4">
                  {service.icon}
                </motion.div>
                <motion.h3 variants={textVariant(0.3)} className="text-xl font-semibold mb-2">
                  {service.title}
                </motion.h3>
                <motion.p variants={fadeIn('up', 0.5 * (index + 1))} className="text-gray-600 mb-4">
                  {service.description}
                </motion.p>
                <motion.a
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  href={service.link}
                  className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                >
                  LEARN MORE
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Connect Section */}
      <section
        id="connect"
        className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-50 border-t border-gray-200"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
          <p className="text-gray-600 mb-6">
            Ready to transform your idea into reality? Reach out to discuss your goals and start the journey.
          </p>
          <a
            href="mailto:swadhinjit14@gmail.com"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default ServicesSection;
