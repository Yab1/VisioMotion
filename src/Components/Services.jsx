// State and context hooks from React.
import React, { useState, useEffect, useRef } from "react";

// Import the JSON data.
import data from "../data/data.json";

// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(data.services);
  }, []);
  return (
    <section
      id="services"
      className="md:h-screen px-2.5 md:px-10 lg:px-24 xl:px-60 lg:grid lg:content-center mt-24 md:mt-0"
    >
      <div className="font-black text-2xl align-center relative mb-14">
        <img src="src/assets/download.svg" alt="dot" className="" />

        <h2 className="absolute left-5 top-5 z-1">Services</h2>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="shadow w-fit p-5 rounded-lg text-slate-900"
            style={{
              backgroundColor: `${service.bgColor}`,
            }}
            whileHover={{ y: -15, transition: { type: "spring" } }}
          >
            <img src={service.icon} alt="Service 01" className="w-20 mx-auto" />
            <p className="font-black text-xl text-center my-3">
              {service.title}
            </p>
            <p className="text-center text-md text-slate-900">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="text-center mt-5 lg:mt-10 text-slate-700">
        Looking for a custom job?{" "}
        <a
          href="#contact"
          className="text-rose-600 dark:hover:text-slate-50 hover:text-slate-900 transition-color ease-in duration-75"
        >
          Click here
        </a>{" "}
        to contact me! 👋
      </p>
    </section>
  );
}
