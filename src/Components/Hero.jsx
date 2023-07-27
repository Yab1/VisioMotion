// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";

// Importing icons from the 'react-bootstrap-icons' library.
import { Telegram, Github, Pinterest, Linkedin } from "react-bootstrap-icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen grid grid-cols-1 justify-items-center content-center gap-20"
    >
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <img
          src="src/assets/avatar-1-2.svg"
          alt="Profile Picture"
          className="rounded-full"
        />
        <h2 className="font-black text-2xl capitalize">Yeabsera Lisanework</h2>
        <p>I&#8217;m a Front-End developer</p>
        <div className="flex justify-between w-4/6 ">
          <a href="">
            <Telegram size={20} />
          </a>
          <a href="">
            <Linkedin size={20} />
          </a>
          <a href="">
            <Github size={20} />
          </a>
          <a href="">
            <Pinterest size={20} />
          </a>
        </div>
        <button className="bg-rose-600 px-6 py-1 rounded-full">
          <a href="#contact">Hire me</a>
        </button>
      </div>
      <a href="#about">
        <span className="capitalize">scroll down</span>
        <span></span>
      </a>
    </section>
  );
}
