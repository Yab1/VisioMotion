// State and context hooks from React.
import React, { useState, useEffect, useRef } from "react";

// Import the JSON data.
import data from "../data/data.json";

// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";

// Importing icons from the 'react-bootstrap-icons' library.
import { Calendar, HandThumbsUp, People, Trophy } from "react-bootstrap-icons";

export default function About() {
  const [services, setServices] = useState([]);
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    setServices(data.services);
    setStatistics(data.statistics);
  }, []);

  const leftVariants = {
    hidden: { x: -250, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "", duration: 1 } },
  };
  const rightVariants = {
    hidden: { x: 250, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "", duration: 1 } },
  };
  const bottomVariants = {
    hidden: { y: 250, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "", duration: 1 } },
  };

  return (
    <section
      id="about"
      className="md:h-screen px-2.5 md:px-10 lg:px-24 xl:px-60 lg:grid lg:content-center"
    >
      <div className="font-black text-2xl align-center relative mb-14">
        <img src="src/assets/download.svg" alt="dot" className="" />

        <h2 className="absolute left-5 top-5 z-1">About Me</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-5 lg:grid-cols-6 md:gap-0">
        <motion.img
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          src="src/assets/avatar-1-2.svg"
          alt=""
          className="mx-auto md:my-auto"
        />
        {/* Card*/}
        <motion.section
          className="relative p-1 md:col-span-4 lg:col-span-5"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="before:absolute before:inset-0 before:w-6 before:h-6 before:bg-slate-50 before:rotate-45 before:top-1/3 shadow hidden md:inline"></span>
          <span className="before:absolute before:bg-slate-50 before:w-6 before:h-6 before:top-0 before:rotate-45 flex justify-center align-center shadow md:hidden"></span>
          <div className="shadow bg-slate-50 text-slate-700 rounded-xl grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
            {/* About Me */}
            <div className="flex flex-col gap-5">
              <p className="text-sm font-medium relative z-10">
                I am Yeabsera Lisanework, a skilled web developer based in Addis
                Ababa, Ethiopia. With a strong background in web design,
                development, and customization, I am dedicated to delivering
                exceptional digital solutions.
              </p>
              <motion.button
                className="bg-rose-600 px-6 py-1 rounded-full capitalize text-slate-50 w-fit mb-3"
                whileTap={{ scale: 0.85 }}
              >
                <a href="" download>
                  download CV
                </a>
              </motion.button>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-5">
              {services.map((service) => (
                <div>
                  <div className="flex justify-beinertia mb-1 text-xs font-bold lg:text-sm xl:text-md capitalize">
                    <span>{service.title}</span>
                    <span>{`${service.skillLevel}%`}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full">
                    <div
                      className="p-1 rounded-full progress-bar"
                      style={{
                        backgroundColor: `${service.bgColor}`,
                        width: `${service.skillLevel}`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      {/* Statistics */}
      <motion.section
        className="text-slate-300 grid grid-cols-2 gap-5 mt-10 md:grid-cols-4 md:justify-beinertia md:gap-0 justify-items-center"
        variants={bottomVariants}
        initial="hidden"
        animate="visible"
      >
        {statistics.map((stat) => {
          const Icon = eval(stat.icon);
          return (
            <div key={stat.name} className="flex gap-3">
              <Icon size={30} className="mt-2" />
              <div>
                <p className="text-2xl font-black">
                  {stat.count}
                  {stat.name === "Projects Completed" && (
                    <span className="text-sm align-start relative bottom-2">
                      +
                    </span>
                  )}
                </p>
                <p className="text-sm capitalize md:text-xs md:font-bold">
                  {stat.name}
                </p>
              </div>
            </div>
          );
        })}
      </motion.section>
    </section>
  );
}
//  className={
//           "relative z-10 w-full p-1 bg-slate-200 rounded before:absolute before:p-1 before:rounded before:top-0 before:left-0" +
//           " " +
//           `before:${service.width} before:${service.bgColor}`
//         }
