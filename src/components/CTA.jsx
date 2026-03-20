import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center bg-primary overflow-hidden"
      id="purchase"
    >
      {/* The Container - Pill Shape */}
      <div className="cont w-[90%] md:w-[80%] md:h-70 bg-secondary rounded-lg py-6 px-10 md:px-16 flex flex-col md:flex-row items-center justify-between border border-white/10 relative group hover:border-white/30 transition-all duration-500">
        {/* Text Side */}
        <div className="flex flex-col z-10">
          <h2 className=" font-secondary text-4xl md:text-6xl text-primary uppercase transition-all duration-700">
            Secure Your <br /> Territory
          </h2>
          <p className="text-white/50 uppercase tracking-[0.3em] text-[0.7rem] mt-2 font-bold">
            Limited Entry • Midnight Riders Only
          </p>
        </div>

        {/* Action Side */}
        <div className="mt-6 md:mt-0 z-10">
          <Link to="/purchase">
            <button className="bg-primary text-secondary font-black uppercase px-10 py-5 rounded-sm text-lg ">
              Purchase Pass
            </button>
          </Link>
        </div>

        {/* Decorative background element for that "Exquisite" feel */}
        <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="text-[10rem] font-black italic uppercase">
            VILLAINY
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
