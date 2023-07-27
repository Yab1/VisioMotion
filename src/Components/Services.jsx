// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
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
        <div className="shadow w-fit p-5 bg-indigo-700 text-slate-900 rounded-lg">
          <img
            src="src/assets/UI-UX-design.png"
            alt="Service 01"
            className="w-20 mx-auto"
          />
          <p className="font-black text-xl text-center my-3">UI/UX design</p>
          <p className="text-center text-md text-slate-50">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget.
          </p>
        </div>
        <div className="shadow w-fit p-5 bg-yellow-500 text-slate-900 rounded-lg">
          <img
            src="src/assets/service-2-1.svg"
            alt="Service 02"
            className="w-20 mx-auto"
            design
          />
          <p className="font-black text-xl text-center my-3">
            Frontend Development
          </p>
          <p className="text-center text-md ">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget.
          </p>
        </div>
        <div className="shadow w-fit p-5 bg-rose-600 text-slate-900 rounded-lg">
          <img
            src="src/assets/service-3-1.png"
            alt="Service 03"
            className="w-20 mx-auto"
          />
          <p className="font-black text-xl text-center my-3">Consultation</p>
          <p className="text-center text-md text-slate-50">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
            commodo ligula eget.
          </p>
        </div>
      </div>
      <p className="text-center mt-5 lg:mt-10 text-slate-700">
        Looking for a custom job?{" "}
        <a href="#contact" className="text-rose-600">
          Click here
        </a>{" "}
        to contact me! 👋
      </p>
    </section>
  );
}
