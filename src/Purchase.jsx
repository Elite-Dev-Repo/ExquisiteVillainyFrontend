import React, { useState } from "react";
import { paystackAPI } from "./api"; // Ensure path is correct

const Purchase = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const PRICE = 1500;

  const handlePurchase = async (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("active_pass");
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Call the initialize method from your api.js
      const response = await paystackAPI.initialize(email, PRICE);

      // Paystack returns data wrapped in a 'data' object
      const { authorization_url } = response.data;

      // 2. Redirect the user to Paystack's secure page
      if (authorization_url) {
        window.location.href = authorization_url;
      } else {
        throw new Error("No authorization URL received");
      }
    } catch (error) {
      console.error("Payment initialization failed:", error);
      alert("Failed to reach the frontier. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-screen min-h-screen bg-secondary flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[25vw] font-black uppercase italic [text-stroke:2px_white] [-webkit-text-stroke:2px_white] text-transparent">
          BOUNTY
        </h2>
      </div>

      <div className="w-full max-w-xl bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-sm z-10 relative">
        <div className="mb-10 text-center">
          <h2 className="text-white font-black text-4xl uppercase italic tracking-tighter mb-2">
            Secure Your Pass
          </h2>
          <p className="text-white/40 uppercase tracking-[0.2em] text-[0.7rem]">
            Entry Fee: ₦{PRICE.toLocaleString()} • Non-Refundable
          </p>
        </div>

        <form onSubmit={handlePurchase} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-white/60 uppercase text-xs font-bold tracking-widest ml-1">
              Identify Yourself (Email)
            </label>
            <input
              type="email"
              required
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="OUTLAW@VILLAINY.COM"
              className="bg-white/5 border border-white/20 p-4 text-white focus:border-white focus:outline-none transition-all placeholder:opacity-20 uppercase font-medium disabled:opacity-50"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-secondary font-black uppercase italic py-5 text-xl hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 active:scale-[0.98] group flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {loading ? "ENCRYPTING..." : `Pay ₦${PRICE.toLocaleString()}`}
              </span>
              {!loading && (
                <span className="text-xs not-italic border border-current px-2 py-1 opacity-50 group-hover:opacity-100">
                  PROCEED
                </span>
              )}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-white/20 text-[0.6rem] uppercase tracking-widest leading-relaxed">
          By clicking proceed, you agree to the terms of the frontier. <br />
          No turning back once the lead is cast.
        </p>
      </div>
    </section>
  );
};

export default Purchase;
