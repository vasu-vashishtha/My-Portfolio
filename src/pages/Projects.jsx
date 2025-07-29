import React from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

import Button from '../components/shared/Button';
import html from "../assets/stack/HTML.png";
import css from "../assets/stack/CSS.png";
import js from "../assets/stack/Javascript.svg";
import tailwind from "../assets/stack/Tailwind.png";
import nodejs from "../assets/stack/NodeJs.svg";
import react from "../assets/stack/React.png";
import redux from "../assets/stack/Redux.svg";
import vercel from "../assets/stack/Vercel.svg";


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

const Projects = () => {
  return (
    <>
      <motion.section
      className="min-h-screen px-6 py-12 max-w-7xl mx-auto text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      >
            <motion.h2
              className="text-4xl font-bold text-center mb-0 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
              variants={childVariants}
            >
              Projects
            </motion.h2>

            <div className="project-section" id="projects">
              <div className='project-container'>
                <div className="project-card" id="project1">
                  <div className="project-number project-number-right ">01</div>
                  <div className="project-content project-content-left">

                    <div className="project-skills-container">
                      <img className="project-skill" src={html} alt="" />
                      <img className="project-skill" src={css} alt="" />
                      <img className="project-skill" src={js} alt="" />
                      <img className="project-skill" src={tailwind} alt="" />
                      <img className="project-skill" src={nodejs} alt="" />
                      <img className="project-skill" src={react} alt="" />
                      <img className="project-skill" src={redux} alt="" />
                      <img className="project-skill" src={vercel} alt="" />
                    </div>

                    <h2 className="project-heading">Shopping Cart </h2>

                    <p className="project-subHeading">Its is a Shopping Cart Project which provides you different shopping items 
                      which you can select and add into your personal cart and it will also generate your total amount summary. 
                      
                    </p>

                        <div className="flex items-center gap-4 mt-4">
                          <Button title="Read More" />

                          <a
                            href="https://github.com/vasu-vashishtha/Shopping-Cart-Project"
                            target="_blank"
                            rel="noreferrer"
                            title="GitHub Link"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaGithub size={22} />
                          </a>

                          <a
                            href="https://shopping-cart-project-nine.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            title="Live Site"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaLink size={20} />
                          </a>
                        </div>

                  </div>
                </div>

                <div className="project-card" id="project2">
                  <div className="project-number project-number-left">02</div>
                  <div className="project-content project-content-right">
                    <div className="project-skills-container">
                      <img className="project-skill" src={html} alt="" />
                      <img className="project-skill" src={css} alt="" />
                      <img className="project-skill" src={js} alt="" />
                      <img className="project-skill" src={tailwind} alt="" />
                      <img className="project-skill" src={nodejs} alt="" />
                      <img className="project-skill" src={react} alt="" />
                      <img className="project-skill" src={redux} alt="" />
                      <img className="project-skill" src={vercel} alt="" />
                    </div>
                    <h2 className="project-heading">Top skills Courses</h2>
                    <p className="project-sub-heading">
                      This project shows different skills based courses which is filtered on the basis of different categories.
                    </p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button title="Read More" />

                          <a
                            href="https://github.com/vasu-vashishtha/Top-Courses"
                            target="_blank"
                            rel="noreferrer"
                            title="GitHub Link"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaGithub size={22} />
                          </a>

                          <a
                            href="https://tour-project-axtl.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            title="Live Site"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaLink size={20} />
                          </a>
                        </div>
                  </div>
                </div>

                <div className="project-card" id="project3">
                  <div className="project-number project-number-right">03</div>
                  <div className="project-content project-content-left">
                    <div className="project-skills-container">
                      <img className="project-skill" src={html} alt="" />
                      <img className="project-skill" src={css} alt="" />
                      <img className="project-skill" src={js} alt="" />
                      <img className="project-skill" src={tailwind} alt="" />
                      <img className="project-skill" src={vercel} alt="" />
                    </div>
          
                    <h2 className="project-heading">The Weather App</h2>
                    <p className="project-sub-heading">
                      The Weather App Project by which you can search any city's weather.
                    </p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button title="Read More" />

                          <a
                            href="https://github.com/vasu-vashishtha/Weather-App"
                            target="_blank"
                            rel="noreferrer"
                            title="GitHub Link"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaGithub size={22} />
                          </a>

                          <a
                            href="https://weather-app-six-tawny.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            title="Live Site"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaLink size={20} />
                          </a>
                        </div>
                  </div>
                </div>

                <div class="project-card" id="project4">
                    <div class="project-number project-number-left">04</div>
                    <div class="project-content project-content-right">
                      <div class="project-skills-container">
                        <img class="project-skill" src={html}/>
                        <img class="project-skill" src={css}/>
                        <img class="project-skill" src={js} alt="" />
                      </div>
                      <h2 class="project-heading">The Chair Project</h2>
                      <p class="project-sub-heading">
                        The Chair Project in which you can go through different colors of a chairs on one click.
                      </p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button title="Read More" />

                          <a
                            href="https://github.com/vasu-vashishtha/The-Chair-Project"
                            target="_blank"
                            rel="noreferrer"
                            title="GitHub Link"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaGithub size={22} />
                          </a>

                          <a
                            href="https://the-chair-project.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            title="Live Site"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaLink size={20} />
                          </a>
                        </div>
                    </div>
                </div>

                <div class="project-card" id="project5">
                  <div class="project-number project-number-right">05</div>
                  <div class="project-content project-content-left">
                    <div class="project-skills-container">
                      <img class="project-skill" src={html}/>
                      <img class="project-skill" src={css}/>
                      <img class="project-skill" src={tailwind} alt="" />
                      <img class="project-skill" src={vercel} alt="" />
                    </div>
                    <h2 class="project-heading">The Razorpay Website Clone</h2>
                    <p class="project-sub-heading">
                      This is a Razorpay website clone created using HTML, and design part is done with the help 
                      of Tailwind CSS.
                    </p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button title="Read More" />

                          <a
                            href="https://github.com/vasu-vashishtha/RazorPay-Website-Clone"
                            target="_blank"
                            rel="noreferrer"
                            title="GitHub Link"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaGithub size={22} />
                          </a>

                          <a
                            href="https://razor-pay-website-clone.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            title="Live Site"
                            className="text-white hover:text-blue-400 transition"
                          >
                            <FaLink size={20} />
                          </a>
                        </div>
                  </div>
                </div>

              </div>
            </div>




      </motion.section>

    </>
  )
}

export default Projects;