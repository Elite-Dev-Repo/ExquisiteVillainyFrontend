import React from "react";

function Header() {
  const navs = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Purchase",
      href: "/#purchase",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  return (
    <header className="relative w-screen min-h-screen bg-primary flex flex-col justify-center items-center ">
      <div className="absolute top-5 left-4 font-black border-l-2 border-secondary px-4 py-2">
        <a href="https://oyenekanemmanuel.xyz/" target="_blank">
          Elite.DEV
        </a>
      </div>
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-secondary -top-3 moving  absolute"></div>
        <h1 className="font-main text-[4em] md:text-[12em] leading-normal md:leading-45 text-center font-semibold tracking-wide">
          Exquisite <br /> <span className="">Villainy</span>
        </h1>
      </div>

      <div className="absolute left-10 bottom-5">
        <ul>
          {navs.map((nav, i) => {
            return (
              <li
                key={i}
                className="font-semibold text-secondary/70 hover:scale-110 hover:text-secondary hover:translate-x-2.5 duration-300 cursor-pointer transition-all"
              >
                {" "}
                <a href={nav.href}>- {nav.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
