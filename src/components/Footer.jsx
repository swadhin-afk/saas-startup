import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// Animated DAS Logo Component
const DASLogo = () => {
  const letters = ["D", "A", "S"];
  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, type: "spring", stiffness: 300 },
    }),
    hover: { scale: 1.3, color: "#2563eb", transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="flex items-center cursor-pointer select-none">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={letterVariants}
          className={`text-3xl font-extrabold text-gray-800 ${i !== letters.length - 1 ? "mr-1" : ""}`}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About", href: "about#about" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
    "Get Help": [
      { name: "Support Career", href: "#" },
      { name: "24h Service", href: "#" },
    ],
    Support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
    ],
    Contact: [
      { name: "WhatsApp", href: "https://wa.me/919348632268" },
      { name: "Email", href: "mailto:swadhinjitdas@gmail.com" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/swadhinjit-das-sd" },
    ],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white border-t border-gray-200 text-gray-700"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10"
        >
          {/* Brand Section */}
          <motion.div variants={fadeIn("right", 0.5)} className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <DASLogo />
              <h2 className="text-2xl font-semibold text-gray-900">The Next Design</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              Crafted with passion and attention to detail. We bring your ideas to life with creativity and expertise.
            </p>
            <div className="flex space-x-5">
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.instagram.com/swadhinjit_das?igsh=NWJsemloNTZ0djgy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.linkedin.com/in/swadhinjit-das-sd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-lg hover:bg-blue-900 transition"
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div variants={fadeIn("left", 0.5)} className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], i) => (
                <motion.div key={category} variants={fadeIn("up", 0.3 * (i + 1))}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-5">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link, idx) => (
                      <li key={idx}>
                        <motion.a
                          whileHover={{ x: 6 }}
                          href={link.href}
                          target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") || link.href.startsWith("mailto") ? "noopener noreferrer" : undefined}
                          className="text-gray-600 hover:text-gray-900 transition"
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          className="mt-14 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <motion.p variants={fadeIn("right", 0.9)} className="text-sm text-gray-500">
            © {new Date().getFullYear()} das.com. All rights reserved.
          </motion.p>
          <motion.p variants={fadeIn("left", 0.9)} className="text-sm text-gray-500">
            Developed by Swadhinjit Das
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
