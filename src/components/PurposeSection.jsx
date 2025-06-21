import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const developmentFeatures = [
    {
      icon: "⚙️",
      title: "Advanced Web Features",
      description: "Built-in performance optimization, responsive layouts, accessibility enhancements, and security practices."
    },
    {
      icon: "🛠️",
      title: "Tools We Use",
      description: "React.js, Tailwind CSS, Framer Motion, Next.js, Vite, Git, and CI/CD pipelines for streamlined development."
    }
  ];

  const designFeatures = [
    {
      icon: "🎨",
      title: "Modern UI Design",
      description: "Clean, intuitive interfaces focused on usability, with consistent branding and responsive design systems."
    },
    {
      icon: "🔧",
      title: "Design Tools",
      description: "Figma, Adobe XD, and Canva for wireframes, prototypes, and high-fidelity mockups."
    }
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.div
              variants={fadeIn('up', 0.4)}
              className="text-sm text-purple-600 font-medium mb-2"
            >
              BUILD SMARTER
            </motion.div>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900"
            >
              Purpose of a convoy is to keep your team aligned and productive
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Left Side: Development */}
            <div className="space-y-6">
              {developmentFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.3 * (index + 1))}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side: Design */}
            <div className="space-y-6">
              {designFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.3 * (index + 1))}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
