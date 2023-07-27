// State and context hooks from React.
import React, { useState, useEffect } from "react";

// Import the JSON data.
import data from "../data/data.json";

// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";

export default function Works() {
  const [testimonials, setTestimonials] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setTestimonials(data.testimonials);
    setLinks(data.links);
  }, []);

  return (
    <React.Fragment>
      {/* Recent Works */}
      <section
        id="works"
        className="md:h-screen px-2.5 md:px-10 lg:px-24 xl:px-60 lg:grid lg:content-center"
      >
        <div className="font-black text-2xl align-center relative mb-14">
          <img src="src/assets/download.svg" alt="dot" className="" />

          <h2 className="absolute left-5 top-5 z-1">Recent Works</h2>
        </div>

        <button className="bg-rose-600 px-6 py-1 rounded-full capitalize text-slate-50 w-fit mb-5 mx-auto">
          <a href="">load more</a>
        </button>
      </section>

      {/* Clients & Reviews */}
      <section
        id="works"
        className="md:h-screen px-2.5 md:px-10 lg:px-24 xl:px-60 lg:grid lg:content-center"
      >
        <div className="font-black text-2xl align-center relative mb-14">
          <img src="src/assets/download.svg" alt="dot" className="" />

          <h2 className="absolute left-5 top-5 z-1">Clients & Reviews</h2>
        </div>

        {/* Testimonials */}
        {testimonials.map((person) => (
          <div
            key={person.id}
            className="grid content-center justify-items-center gap-5 my-1"
          >
            <div>
              <img
                src="src/assets/avatar-3-1.svg"
                alt="testimonial"
                className="mx-auto mb-2"
              />
              <p className="capitalize text-slate-900 dark:text-slate-50 text-lg font-bold text-center">
                {person.name}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-center text-sm capitalize">
                {person.designation}
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 w-4/5">
              <p>{person.testimonialText}</p>
            </div>
          </div>
        ))}
      </section>
      {/* Tools */}
      {/* <section className="md:px-10 lg:px-24 xl:px-60 grid lg:grid-cols-5 border">
        {links.map((link) => (
          <img
            key={link}
            src={link}
            alt="tool"
            className="w-10 grayscale opacity-10"
          />
        ))}
      </section> */}
    </React.Fragment>
  );
}

// {
//       "id": 2,
//       "name": "Haile Melaku",
//       "designation": "CEO, ABC Company",
//       "testimonialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lorem eget lorem blandit ultrices. Nullam sit amet dolor ac tortor facilisis ultricies."
//     },
//     {
//       "id": 3,
//       "name": "Nigist Fantahun",
//       "designation": "CSO, Nib International Bank",
//       "testimonialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lorem eget lorem blandit ultrices. Nullam sit amet dolor ac tortor facilisis ultricies."
//     },
//     {
//       "id": 4,
//       "name": "Wubshet Zeleke",
//       "designation": "Backend Developer",
//       "testimonialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lorem eget lorem blandit ultrices. Nullam sit amet dolor ac tortor facilisis ultricies."
//     },
//     {
//       "id": 5,
//       "name": "Haile Melaku",
//       "designation": "Frontend Developer",
//       "testimonialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lorem eget lorem blandit ultrices. Nullam sit amet dolor ac tortor facilisis ultricies."
//     }
