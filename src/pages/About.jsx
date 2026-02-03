import React from "react";
import { motion } from "framer-motion";
import avtar from "../assets/profile-pic.jpeg";
import SkillRing from "../components/shared/SkillRing";
import Button from "../components/shared/Button";
import CV from "../assets/VasuResume.pdf";



const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.section
      className="min-h-screen px-6 py-12 max-w-7xl mx-auto text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
        variants={childVariants}
      >
        About Me
      </motion.h2>

      {/* Responsive Grid: Left = Text, Right = Ring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Avatar + Text */}
        <motion.div className="space-y-6" variants={childVariants}>
          <div className="md:flex items-center gap-6">
            {/* Avatar */}
            <motion.div
              className="w-40 h-40 rounded-full overflow-hidden shadow-2xl shadow-blue-400 shrink-0"
              variants={childVariants}
            >
              <img
                src={avtar}
                alt="Vasu Vashishtha"
                className="w-full h-full object-fill"
              />
            </motion.div>

            {/* Name & Role */}
            <div className="text-lg md:text-xl text-blue-300 mt-4">
              <p>
                I'm{" "}
                <span className="text-sky-400 font-semibold">
                  Vasu Vashishtha
                </span>
                , a Full Stack Developer passionate about building high-quality, user-centric web applications.
              </p>
            </div>
          </div>

          <p className="text-blue-300 text-lg md:text-xl leading-relaxed text-justify">
            Full Stack Engineer with 3+ years of experience building scalable MERN stack applications (MongoDB, Express, React,
            Node.js). Experienced in developing high-performance REST APIs, optimizing frontend performance, and working with
            high-traffic, data-sensitive systems. Integrated Generative AI to automate workflows and reduce manual effort.
          </p>

          <motion.div variants={childVariants}>
            <a
              href={CV}
              target="_blank"
            >
              <Button title="Download Resume" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Animated Skill Ring */}
        <motion.div className="flex justify-center" variants={childVariants}>
          <SkillRing />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
