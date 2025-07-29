import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCode } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <div className="flex flex-col space-y-4 mt-4 px-4">
      <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400 flex items-center gap-2"><FaHome/>Home</NavLink>
      <NavLink to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 flex items-center gap-2"><FaUser/>About</NavLink>
      <NavLink to="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-400 flex items-center gap-2"><FaCode/>Projects</NavLink>
      <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 flex items-center gap-2"><IoMdContacts/>Contact</NavLink>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full p-4 bg-zinc-900 md:hidden relative z-20"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold
        bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">Portfolio</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-blue-100 text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-full w-full bg-zinc-900 py-4"
        >
          {navLinks}
        </motion.div>
      )}
    </motion.header>
  );
};

export default TopNav;
