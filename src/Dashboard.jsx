import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, LogOut, Hash, User, Globe, Copy, Check } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Retrieve data from storage
  const userEmail = localStorage.getItem("user_email") || "ANONYMOUS_OUTLAW";
  const passCode = localStorage.getItem("active_pass") || "NO_ACTIVE_SIGNATURE";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("active_pass");
    navigate("/");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(passCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen w-full bg-secondary text-primary font-mono p-4 sm:p-6 md:p-12 relative overflow-x-hidden selection:bg-primary selection:text-secondary">
      {/* Background Graphic - Subtle Shield */}
      <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 opacity-[0.02] pointer-events-none select-none">
        <Shield size={Math.min(window.innerWidth, 600)} strokeWidth={0.5} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="flex flex-col xl:flex-row xl:items-center justify-between border-b-2 border-primary/10 pb-8 mb-10 md:mb-16 gap-6">
          <div className="space-y-4">
            <div className="bg-primary text-secondary inline-block px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.3em]">
              Authorized_Personnel_Only
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-primary break-words">
              Villains_Pub
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-primary/40 text-[0.6rem] md:text-[0.7rem] uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2">
                <User size={14} className="text-primary/20" /> {userEmail}
              </span>
              <span className="flex items-center gap-2">
                <Globe size={14} className="text-primary/20" /> Node: Nigeria
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full xl:w-auto group px-6 py-4 md:px-10 md:py-5 bg-primary text-secondary hover:bg-transparent hover:text-primary border-2 border-primary transition-all duration-300 font-black italic uppercase text-xs md:text-sm tracking-tighter flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none active:translate-x-1 active:translate-y-1"
          >
            <LogOut size={18} />
            Exit_Pub
          </button>
        </header>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Main Access Module (3 Columns on Desktop) */}
          <div className="lg:col-span-3 bg-primary/[0.03] border border-primary/10 p-6 md:p-12 lg:p-16 flex flex-col justify-between group relative overflow-hidden">
            {/* Corner Tag */}
            <div className="hidden sm:block absolute top-0 right-0 p-3 md:p-4 border-b border-l border-primary/10 text-[0.5rem] md:text-[0.6rem] text-primary/20 font-black">
              EXQUISITE VILLAIN
            </div>

            <div className="space-y-8 md:space-y-12">
              <div className="flex items-center gap-4">
                <Hash size={20} className="text-primary md:size-24" />
                <h2 className="text-[0.6rem] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/40">
                  Active_System_Signature
                </h2>
              </div>

              <div className="space-y-6">
                <div className="relative group/code">
                  <code className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-black tracking-tighter sm:tracking-widest text-primary block bg-primary/5 p-6 md:p-8 border-l-4 md:border-l-8 border-primary uppercase break-all pr-16 md:pr-24">
                    {passCode}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-primary text-secondary hover:scale-105 transition-transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>

                <p className="text-primary/30 text-[0.65rem] md:text-xs uppercase leading-relaxed md:leading-loose max-w-xl font-medium tracking-wide">
                  This signature is verified. Your presence on the frontier is
                  recorded. Unauthorized access to this node is a violation of
                  the Badlands Protocol.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 md:pt-6">
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 md:px-4 md:py-2">
                  <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[0.55rem] md:text-[0.6rem] font-black uppercase text-green-500 tracking-tighter">
                    Link_Stable
                  </span>
                </div>
                <div className="h-[1px] flex-1 bg-primary/10"></div>
              </div>
            </div>
          </div>

          {/* Status Sidebar (1 Column on Desktop) */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Stats Card */}
            <div className="bg-primary/5 border border-primary/10 p-5 md:p-6 flex flex-col gap-4">
              <h3 className="text-[0.6rem] font-black uppercase text-primary/30 tracking-[0.3em]">
                Identity_Stats
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                <div>
                  <p className="text-[0.5rem] text-primary/20 uppercase mb-1">
                    Rank
                  </p>
                  <p className="text-xs md:text-sm font-black italic uppercase">
                    Refined_Villain
                  </p>
                </div>
                <div>
                  <p className="text-[0.5rem] text-primary/20 uppercase mb-1">
                    Bounty
                  </p>
                  <p className="text-xs md:text-sm font-black uppercase text-green-500">
                    Clean
                  </p>
                </div>
              </div>
            </div>

            {/* Owner Progress Card */}
            <div className="bg-primary text-secondary p-5 md:p-6 flex-grow flex flex-col justify-center">
              <h3 className="text-[0.6rem] font-black uppercase tracking-[0.2em] mb-4">
                Territory_Owner
              </h3>
              <div className="text-3xl md:text-4xl font-black italic mb-2 leading-none">
                100%
              </div>
              <div className="w-full h-2 bg-secondary/20 mt-2">
                <div className="w-full h-full bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>

        {/* System Footer */}
        <footer className="mt-16 md:mt-24 pt-8 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <Link
            to="/"
            className="hover:opacity-100 transition-opacity opacity-30"
          >
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-12">
              <span className="text-[0.55rem] md:text-[0.6rem] font-black uppercase italic tracking-widest whitespace-nowrap">
                Exquisite_Villainy_Co.
              </span>
              <span className="text-[0.55rem] md:text-[0.6rem] font-black uppercase italic tracking-widest whitespace-nowrap">
                Est_2026
              </span>
            </div>
          </Link>
          <p className="text-[0.5rem] text-primary/20 uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold">
            All_Paths_Lead_To_The_Frontier_©_2026
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Dashboard;
