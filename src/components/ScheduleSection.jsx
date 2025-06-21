import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// Example projects
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio site showcasing skills, projects, and contact info.",
    liveLink: "https://swadhinjitportfolio.netlify.app/",
    githubLink: "https://github.com/swadhin-afk/Animated-portfolio",
  },
  {
    id: 2,
    title: "E-commerce Restaurant",
    description: "A fully functional e-commerce platform with cart, checkout.",
    liveLink: "https://swadhin-restaurant.netlify.app/",
    githubLink: "https://github.com/swadhin-afk",
  },
  {
    id: 3,
    title: "Advanced virtual assistant",
    description: "A productivity app for managing tasks, deadlines, and reminders.",
    liveLink: "https://swadhin-afk.github.io/Advanced-virtual-assistance/",
    githubLink: "https://github.com/swadhin-afk/Advanced-virtual-assistance",
  },
];

const ScheduleSection = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      {/* Schedule Explanation Box */}
      <motion.div 
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-20 text-center"
        variants={fadeIn('up', 0.3)}
      >
        <motion.span 
          variants={fadeIn('up', 0.4)} 
          className="text-orange-500 font-semibold tracking-wider"
        >
          SCHEDULE
        </motion.span>
        <motion.h2
          variants={textVariant(0.5)}
          className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6"
        >
          How to Schedule Your Web Development & Design Projects
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.6)} 
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
        >
          Scheduling your web development and design workflow is crucial for timely delivery and quality output. Start by breaking your project into clear phases:
          <br /><br />
          <strong>1. Planning & Research:</strong> Define goals, gather requirements, and outline key features.<br />
          <strong>2. Design:</strong> Create wireframes and prototypes to establish UI/UX.<br />
          <strong>3. Development:</strong> Build components, set up backend integrations, and ensure responsiveness.<br />
          <strong>4. Testing & Refinement:</strong> Test across devices, fix bugs, and optimize performance.<br />
          <strong>5. Deployment & Maintenance:</strong> Launch your app and plan for ongoing updates.<br /><br />
          Connect these phases with clear deadlines and regular reviews to keep the project on track and ensure collaboration between designers, developers, and stakeholders.
        </motion.p>
      </motion.div>

      {/* Projects Section */}
      <motion.div variants={fadeIn('up', 0.3)} className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, liveLink, githubLink }, i) => (
            <motion.div
              key={id}
              variants={fadeIn('up', 0.3 + i * 0.1)}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-100"
            >
              <h4 className="text-xl font-semibold mb-2 text-navy-900">{title}</h4>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex flex-col space-y-2">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-medium"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black font-medium flex items-center gap-1"
                >
                  🐙 GitHub Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ScheduleSection;
