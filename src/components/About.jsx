import React from "react";
import man from "../../public/man.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative w-screen p-6 min-h-screen bg-secondary flex justify-center items-center text-center text-white/80 font-secondary">
      <div className="cont py-12">
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl leading-12 md:leading-normal md:text-[3em] mx-auto max-w-screen w-[800px] uppercase"
        >
          <span className="text-secondary bg-primary px-4 py-2 rounded-sm">
            Exquisite Villainy
          </span>{" "}
          — a moniker for the refined outlaw; the high-stakes gambler who wore
          silk in the saddle and redefined the laws of the frontier through
          sheer, unapologetic grit.
        </motion.p>
        <div className="absolute left-5 bottom-5 w-70">
          <img src={man} className="w-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
