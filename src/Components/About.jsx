// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";

// Importing icons from the 'react-bootstrap-icons' library.
import { Calendar, HandThumbsUp, People, Trophy } from "react-bootstrap-icons";

export default function About() {
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
        <img
          src="src/assets/avatar-1-2.svg"
          alt=""
          className="mx-auto md:my-auto"
        />

        {/* Card*/}
        <section className="shadow bg-slate-50 text-slate-700 rounded-xl grid grid-cols-1 gap-5 p-5 md:grid-cols-2 md:col-span-4 lg:col-span-5">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              dolores modi laudantium. Minus vitae, dolor quidem impedit
              incidunt sed sunt.
            </p>
            <button className="bg-rose-600 px-6 py-1 rounded-full capitalize text-slate-50 w-fit mb-5">
              <a href="" download>
                download cv
              </a>
            </button>
          </div>

          {/* Skills Showcase */}
          <div className="grid grid-cols-1 gap-5">
            <div>
              <div className="font-black text-sm uppercase flex justify-between mb-2">
                <p>css</p>
                <p>75%</p>
              </div>
              <div
                className="h-2 w-full rounded"
                style={{
                  background: "linear-gradient( #e2e8f0 216deg,#facc15 0deg )",
                }}
              />
            </div>
            <div>
              <div className="font-black text-sm capitalize flex justify-between mb-2">
                <p>javascript</p>
                <p>75%</p>
              </div>
              <div
                className="h-2 w-full rounded"
                style={{
                  background: "linear-gradient( #e2e8f0 216deg,#ef4444 0deg )",
                }}
              ></div>
            </div>
            <div>
              <div className="font-black text-sm capitalize flex justify-between mb-2">
                <p>React</p>
                <p>75%</p>
              </div>
              <div
                className="h-2 w-full rounded"
                style={{
                  background: "linear-gradient( #e2e8f0 216deg,#2563eb 0deg )",
                }}
              ></div>
            </div>
          </div>
        </section>
      </div>
      {/* Achievements */}
      <section className="text-slate-300 grid grid-cols-2 gap-5 mt-10 md:grid-cols-4 md:justify-between md:gap-0">
        <div className="flex gap-3">
          <HandThumbsUp size={30} className="mt-2" />
          <div>
            <p className="text-2xl font-black">
              10{" "}
              <span className="text-sm align-start relative right-1 bottom-2">
                +
              </span>
            </p>
            <p className="text-sm capitalize md:text-xs md:font-bold">
              projects completed
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Calendar size={30} className="mt-2" />
          <div>
            <p className="text-2xl font-black">3 </p>
            <p className="text-sm capitalize md:text-xs md:font-bold">
              year of experience
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <People size={30} className="mt-1" />
          <div>
            <p className="text-2xl font-black">5</p>
            <p className="text-sm capitalize md:text-xs md:font-bold">
              satisfied clients
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Trophy size={30} className="mt-2" />
          <div>
            <p className="text-2xl font-black">5</p>
            <p className="text-sm capitalize md:text-xs md:font-bold">
              nominees winner
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
