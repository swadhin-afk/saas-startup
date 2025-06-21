import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const MonitorSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Left Side - Experience Box */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          className="w-full md:w-1/2 border border-gray-300 rounded-xl p-8 shadow-sm bg-white"
        >
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="text-emerald-500 font-semibold uppercase tracking-wide"
          >
            Experience
          </motion.span>

          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6"
          >
            My Journey as a Frontend Developer
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.6)} className="text-gray-600 mb-6">
            I have worked solo on various projects, focusing on clean UI, responsive design, and integration with backend technologies like Django and SQL. I manage full project lifecycles and maintain high standards in code quality and collaboration.
          </motion.p>

          <motion.ul
            variants={fadeIn("up", 0.7)}
            className="list-disc list-inside text-gray-700 space-y-2"
          >
            <li>Developed scalable web apps using React.js and Tailwind CSS</li>
            <li>Managed 30+ tasks via Git, following best practices</li>
            <li>Improved UI/UX based on accessibility and performance</li>
          </motion.ul>
        </motion.div>

        {/* Right Side - Skills Box */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          className="w-full md:w-1/2 border border-gray-300 rounded-xl p-8 shadow-sm bg-white flex flex-col justify-between"
        >
          <div>
            <motion.span
              variants={fadeIn("up", 0.4)}
              className="text-emerald-500 font-semibold uppercase tracking-wide"
            >
              Skills
            </motion.span>

            <motion.ul
              variants={fadeIn("up", 0.5)}
              className="list-disc list-inside text-gray-700 space-y-2 mt-4"
            >
              <li>React.js, Tailwind CSS, Bootstrap</li>
              <li>JavaScript (ES6+), HTML5, CSS3</li>
              <li>Django & SQL Backend Integration</li>
              <li>Git & GitHub Version Control</li>
              <li>Responsive Design & UI/UX Principles</li>
            </motion.ul>
          </div>

          <motion.a
            variants={fadeIn("up", 0.6)}
            href="https://drive.google.com/file/d/16kSoEjoH7eYvZJEKuX9OVrJhId1ihiQp/view?usp=drivesdk" // Change to your resume path or URL
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-center w-max"
          >
            View My Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
