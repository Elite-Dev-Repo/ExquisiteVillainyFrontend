import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paystackAPI } from "./api"; // Ensure loginWithPass is defined in api.js

const Login = () => {
  const [passCode, setPassCode] = useState(
    localStorage.getItem("active_pass") || "",
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await paystackAPI.loginWithPass(passCode);

      // Store the JWT and Email
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("user_email", response.data.email);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("INVALID PASS CODE. ACCESS DENIED.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-screen min-h-screen bg-secondary flex items-center justify-center px-6 font-mono text-white">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-10 backdrop-blur-md">
        <h2 className="text-3xl font-black uppercase italic mb-8 tracking-tighter">
          Enter Frontier
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/40">
              Credential Token
            </label>
            <input
              type="text"
              required
              value={passCode}
              onChange={(e) => setPassCode(e.target.value)}
              placeholder="PASS-XXXX-XXXX"
              className="bg-white/5 border border-white/20 p-4 focus:border-white outline-none uppercase placeholder:opacity-20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-secondary font-black py-4 uppercase italic hover:invert transition-all disabled:opacity-50"
          >
            {loading ? "AUTHENTICATING..." : "VERIFY IDENTITY"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
