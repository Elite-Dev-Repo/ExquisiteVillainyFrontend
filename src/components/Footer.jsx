import React from "react";

function Footer() {
  const links = [
    {
      title: "Navigation",
      items: ["The Trail", "The Outlaws", "Bounty", "Supplies"],
    },
    {
      title: "Legal",
      items: ["Terms of Truce", "Privacy Policy", "Territory Rights"],
    },
    { title: "Social", items: ["Instagram", "X / Twitter", "Discord"] },
  ];

  return (
    <footer className="w-screen min-h-[70vh] bg-secondary flex flex-col items-center justify-between pt-20 px-6 md:px-12 lg:px-24 border-t border-white/5">
      {/* Top Section: Link Columns */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <h4 className="text-white font-black uppercase italic text-xl mb-6">
            Exquisite Villainy
          </h4>
          <p className="text-white/40 text-sm max-w-[200px] leading-relaxed">
            Unapologetically rugged. Historically refined. Since 1880.
          </p>
        </div>

        {links.map((group) => (
          <div key={group.title} className="flex flex-col gap-4">
            <h5 className="text-white/30 uppercase tracking-[0.2em] text-[0.65rem] font-bold">
              {group.title}
            </h5>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section: Massive Outlined Text */}
      <div className="w-full overflow-hidden mt-auto py-10 pointer-events-none select-none">
        <h2 className="text-[12vw] font-main md:text-[17vw] font-black uppercase leading-none text-transparent [text-stroke:1px_var(--primary)] [background:linear-gradient()] [-webkit-text-stroke:1px_var(--primary)] whitespace-nowrap -mb-8 transition-all duration-1000 group-hover:[text-stroke:1px_rgba(255,255,255,0.2)]">
          EXQUISITE
        </h2>
      </div>

      {/* Copyright/Meta line */}
      <div className="w-full flex justify-between py-6 border-t border-white/5 text-[0.6rem] uppercase tracking-widest text-white/20 font-bold">
        <span>© {new Date().getFullYear()} Elite.DEV</span>
        <span className="hidden md:inline">
          Lagos • The Badlands • Midnight
        </span>
      </div>
    </footer>
  );
}

export default Footer;
