// State and context hooks from React.
import React, { useState, useEffect } from "react";

// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "react-bootstrap-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );
    const isValidEmail = emailRegex.test(formData.email);
    if (!isValidEmail) {
      const emailElement = document.querySelector("#email");
      emailElement.setCustomValidity("Please enter a valid Gmail address.");
      emailElement.reportValidity();
      return;
    }
    setFormData(() => ({
      name: "",
      email: "",
      subject: "",
      message: "",
    }));
  }
  return (
    <section
      id="contact"
      className="h-fit md:h-screen px-2.5 md:px-10 lg:px-24 xl:px-60 lg:grid lg:content-center"
    >
      <div className="font-black text-2xl align-center relative mb-14">
        <img src="src/assets/download.svg" alt="dot" className="" />

        <h2 className="absolute left-5 top-5 z-1">Contact</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-5">
        <div className="text-slate-700 relative content-center py-10 md:py-0">
          <span className="text-2xl font-bold block">
            Let's talk about everything!{" "}
          </span>
          Don&#8217;t like forms? Send me an{" "}
          <a href="mailto:yabilisanu@gmail.com" className="text-rose-600">
            email
          </a>{" "}
          👋
          <img
            src="src/assets/world-map.png"
            alt=""
            className="absolute top-3 md:top-12 opacity-20"
          />
        </div>
        <form className="grid md:grid-cols-2 gap-5 md:col-span-2">
          <input
            required
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your name")
            }
            className="px-5 py-3 rounded-full outline-none text-slate-900 shadow"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            value={formData.email}
            border
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your email")
            }
            className="px-5 py-3 rounded-full outline-none text-slate-900 shadow"
          />
          <input
            required
            type="email"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, subject: e.target.value }))
            }
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your subject")
            }
            className="px-5 py-3 rounded-full outline-none text-slate-900 md:col-span-2 shadow"
          />
          <textarea
            cols="0"
            rows="4"
            placeholder="Message"
            className="px-5 py-3 rounded-xl outline-none text-slate-900 md:col-span-2 shadow"
          ></textarea>
          <button className="bg-rose-600 px-6 py-2 rounded-full capitalize text-slate-50 w-fit mb-20">
            send message
          </button>
        </form>
      </div>
    </section>
  );
}
