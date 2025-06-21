import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

// Animated DAS Logo Component
const DASLogo = () => {
  const letters = ['D', 'A', 'S']

  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
      },
    }),
    hover: {
      scale: 1.2,
      transition: { type: 'spring', stiffness: 300 }
    }
  }

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
          className={`text-2xl font-bold text-blue-600 ${i !== letters.length - 1 ? 'mr-1' : ''}`}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Service" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  // Handles clicking links: sets active link and closes menu if open
  const handleLinkClick = (href) => {
    setActiveLink(href)
    if (isMenuOpen) setIsMenuOpen(false)
  }

  return (
    <motion.nav
      role="navigation"
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <motion.div variants={fadeIn('right', 0.3)}>
          <DASLogo />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn('left', 0.3)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div
          variants={fadeIn('down', 0.3)}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={fadeIn('down', 0.1 * (index + 1))}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
                ${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button Desktop */}
        <motion.button
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
        >
          <a href="#newsletter" onClick={() => handleLinkClick('#newsletter')}>Get in touch</a>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div
            variants={fadeIn('down', 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn('right', 0.1 * (index + 1))}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block text-sm font-medium py-2
                  ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile Get in touch as anchor styled as button */}
            <motion.a
              href="#newsletter"
              variants={fadeIn('up', 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100 text-center"
              onClick={() => handleLinkClick('#newsletter')}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
