// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";

// Importing icons from the 'react-bootstrap-icons' library.
import { List, XLg } from "react-bootstrap-icons";

export default function Header({ open, menuController }) {
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
      },
    },
    tab: {
      scale: 1.1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 1 },
  };
  const ulVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  const liVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    // desktop header
    <header
      id="header"
      className="py-2.5 border-b fixed w-full border-slate-400 md:px-10 lg:px-24 xl:px-60 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50"
    >
      <div className="flex justify-between px-2.5">
        {/* logo text  */}
        <motion.h1
          className="font-black text-2xl align-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Yeabsera<span className="font-black text-2xl text-rose-600">.</span>
        </motion.h1>
        {/* Mobile menu button */}
        <motion.button
          className="cursor-pointer align-center lg:hidden"
          onClick={menuController}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.8 }}
        >
          {open ? <XLg size={30} className="scale-75" /> : <List size={30} />}
        </motion.button>
        {/* Navigation Laptop */}
        <motion.nav
          className="hidden lg:block"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.ul className="flex gap-8" variants={ulVariants}>
            {[
              "home",
              "about",
              "services",
              "experience",
              "works",
              "blog",
              "contact",
            ].map((nav) => (
              <motion.li
                key={nav}
                title={nav}
                className="capitalize my-2"
                variants={liVariants}
              >
                <a href={`#${nav}`}>{nav}</a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
      {/* Navigation Mobile */}
      <AnimatePresence>
        {open ? (
          <motion.nav
            className="px-3 bg-slate-50 dark:bg-slate-900 w-screen absolute border-slate-400 lg:hidden"
            variants={ulVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul variants={ulVariants}>
              {[
                "home",
                "about",
                "services",
                "experience",
                "works",
                "blog",
                "contact",
              ].map((nav) => (
                <motion.li
                  key={nav}
                  className="capitalize my-2"
                  variants={liVariants}
                >
                  <a href={`#${nav}`}>{nav}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
