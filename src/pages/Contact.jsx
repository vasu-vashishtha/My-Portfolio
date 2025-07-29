import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../components/shared/Button";

const Contact = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white px-6 py-16 max-w-6xl mx-auto" id="contact">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
          Contact Me
        </h2>
        <p className="text-zinc-400 mt-3 text-lg">
          Questions, thoughts, or just want to say hello?
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info Card */}
        <motion.div
          className="bg-zinc-900 rounded-lg shadow-lg p-6 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-400">Get in Touch</h3>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-blue-500 text-xl mt-1" />
            <div>
              <p className="text-sm text-zinc-400">Phone</p>
              <p className="font-medium">+91 70607 93361</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-500 text-xl mt-1" />
            <div>
              <p className="text-sm text-zinc-400">Email</p>
              <p className="font-medium">vasudeveloper01@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
            <div>
              <p className="text-sm text-zinc-400">Location</p>
              <p className="font-medium">Uttar Pradesh, India</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
            action="https://formspree.io/f/xzzveqan"  
            method="POST"
            className="space-y-6"
            >
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                <label className="block mb-1 text-sm text-zinc-300">Full Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>

                <div>
                <label className="block mb-1 text-sm text-zinc-300">Email Address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>
            </div>

            {/* Subject */}
            <div>
                <label className="block mb-1 text-sm text-zinc-300">Subject</label>
                <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>

            {/* Message */}
            <div>
                <label className="block mb-1 text-sm text-zinc-300">Message</label>
                <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>

            {/* Submit Button */}
            <div className="text-left">
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 transition-colors px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
                >
                Send Message
                </button>
                {/* <Button title="Send Message" type="submit"/> */}
            </div>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
