import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import avatar from "../assets/vasu-avatar.jpg";
import Button from '../components/shared/Button';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Gradient Blob */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] rounded-full bg-sky-500 opacity-20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] rounded-full bg-indigo-600 opacity-25 blur-[100px] animate-pulse" />
      </div> */}

      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="text-center md:text-left flex-2">
          <motion.h1 className="text-4xl md:text-6xl font-bold 
          bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text" variants={childVariants}>
            Hi, I'm Vasu Vashishtha
          </motion.h1>

          <motion.div className="mt-6 text-xl md:text-2xl text-blue-300" variants={childVariants}>
            <Typewriter
              words={["I am a Full Stack Developer", "I build modern web applications", "I love coding and design"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>

          <motion.p className="mt-6 text-lg md:text-xl text-blue-50 max-w-xl" variants={childVariants}>
            A passionate MERN Stack Developer crafting seamless web experiences with modern design, clean code, and great user interaction.
          </motion.p>

          <motion.div className="mt-6 flex justify-center md:justify-start gap-6" variants={childVariants}>
            <Link to="https://github.com/vasu-vashishtha" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400 text-2xl transition-transform transform hover:scale-110">
              <FaGithub />
            </Link>
            <Link to="www.linkedin.com/in/vasu-vashishtha" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400 text-2xl transition-transform transform hover:scale-110">
              <FaLinkedin />
            </Link>
            <Link to="mailto:vashishthavasu2@gmail.com" className="text-blue-300 hover:text-blue-400 text-2xl transition-transform transform hover:scale-110">
              <FaEnvelope />
            </Link>
          </motion.div>

          <motion.div className="mt-8" variants={childVariants}>
            {/* <Link
              to="/projects"
              className="inline-block px-6 py-3 text-blue-950 font-semibold bg-sky-400 hover:bg-blue-500 rounded-lg transition-colors duration-300"
            >
              View My Projects
            </Link> */}
            <Link to="/projects">
              <Button title="View My Projects"/>
            </Link>
          </motion.div>
        </div>

        {/* Right Side - Avatar */}
        <motion.div
          className="hidden md:block flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img
            src={avatar}
            alt="Vasu Avatar"
            className="md:w-84 md:h-84 object-cover rounded-full shadow-lg shadow-blue-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
