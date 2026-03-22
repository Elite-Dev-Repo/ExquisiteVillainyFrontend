import React from "react";
import { motion } from "framer-motion";

function Whatitis() {
  const what = [
    {
      id: 1,
      title: "Exquisite Villainy",
      description:
        "A rugged, high-contrast lifestyle brand inspired by the grit and shadows of the American frontier. Drawing from the era of the midnight rider and the high-stakes gambler, it captures the sharp-witted defiance of those who operated on the fringes of the law with a calculated, silver-tongued elegance.",
    },
    {
      id: 2,
      title: "The Frontier Spirit",
      description:
        "A design philosophy rooted in the raw, untamed atmosphere of the 1880s. It prioritizes heavy textures like distressed leather and weathered wood.",
    },
    {
      id: 3,
      title: "Outlaw Heritage",
      description:
        "An homage to the legendary figures who redefined the boundaries of the Old West. This narrative focus celebrates the 'exquisite' nature of the anti-hero—valuing personal freedom and iron-willed grit.",
    },
    {
      id: 4,
      title: "Midnight Rider",
      description:
        "A tribute to the solitary souls who carved their paths under the cover of darkness. This concept emphasizes the mystery of the trail, blending deep charcoal palettes with metallic accents.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-secondary py-20 px-6">
      <div className="max-w-7xl mx-auto" id="about">
        {/* Animated Header */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-primary font-medium text-5xl font-secondary tracking-wider italic mb-12 border-l-4 border-primary pl-6"
        >
          "NOTORIOUS BY DESIGN."
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {what.map((w, index) => {
            const isWide = index === 0 || index === 2;

            return (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  ${isWide ? "md:col-span-2" : "md:col-span-1"}
                  bg-white/5 border border-primary/10 p-10 
                  hover:bg-white/10 hover:border-primary/30
                  duration-500 transition-all flex flex-col gap-4
                  group rounded-4xl
                `}
              >
                <h3 className=" font-bold text-4xl text-white group-hover:text-primary transition-colors">
                  {w.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed tracking-wide font-light">
                  {w.description}
                </p>

                {/* Minimalist accent line */}
                <div className="mt-auto pt-6">
                  <div className="w-12 h-[1px] bg-primary/40 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Whatitis;
