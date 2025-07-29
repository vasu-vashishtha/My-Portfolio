import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCode } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

const navLinks = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaUser /> },
  { path: "/projects", label: "Projects", icon: <FaCode /> },
  { path: "/contact", label: "Contact", icon: <IoMdContacts /> },
];

const SideNav = () => {
  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex flex-col w-60 bg-zinc-900 p-4"
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
        Portfolio
      </h2>

      {navLinks.map(({ path, label, icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex items-center gap-3 mb-2 px-2 py-2 rounded-md text-zinc-400 hover:text-blue-400 hover:bg-zinc-800 transition-all duration-300 ease-in-out pl-1 hover:pl-2 ${
              isActive ? 'bg-zinc-800 text-blue-400 font-semibold' : ''
            }`
          }
        >
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}
    </motion.div>
  );
};

export default SideNav;
