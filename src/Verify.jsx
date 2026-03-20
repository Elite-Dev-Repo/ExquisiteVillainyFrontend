import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { paystackAPI } from "./api";
import { Copy, Check, ShieldCheck, Loader2 } from "lucide-react";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("verifying");
  const [copied, setCopied] = useState(false);
  const [passCode, setPassCode] = useState("");
  const reference = searchParams.get("reference");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyTransaction = async () => {
      if (!reference) {
        setStatus("error");
        return;
      }

      try {
        const response = await paystackAPI.verify(reference);

        // Paystack returns 200, and our custom backend returns 'status: success'
        if (response.data.status === "success") {
          const receivedCode = response.data.pass_code;

          setPassCode(receivedCode);

          // CRITICAL: Use the local variable 'receivedCode', NOT the state 'passCode'
          // State won't update until the next render!
          localStorage.setItem("active_pass", receivedCode);

          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setStatus("error");
      }
    };

    verifyTransaction();
  }, [reference]); // Removed passCode from dependencies to avoid infinite loops

  const copyToClipboard = () => {
    if (!passCode) return;
    navigator.clipboard.writeText(passCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-screen min-h-screen bg-secondary flex items-center justify-center px-6 relative overflow-hidden font-mono">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <h2 className="text-[20vw] font-black uppercase italic text-white">
          VERIFIED
        </h2>
      </div>

      <div className="w-full max-w-xl bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-md z-10 relative">
        {status === "verifying" && (
          <div className="text-center py-10">
            <Loader2
              className="animate-spin text-white mx-auto mb-6"
              size={48}
            />
            <h2 className="text-white font-black text-2xl uppercase italic tracking-tighter">
              Authenticating...
            </h2>
            <p className="text-white/40 uppercase text-[0.6rem] mt-4 tracking-[0.3em]">
              Scanning Ledger: {reference?.slice(0, 10)}...
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white mb-6 transform -rotate-3">
                <ShieldCheck className="text-secondary" size={40} />
              </div>
              <h2 className="text-white font-black text-4xl uppercase italic tracking-tighter mb-2">
                Access Granted
              </h2>
              <p className="text-white/40 uppercase text-[0.7rem] tracking-widest">
                The transaction is set in stone.
              </p>
            </div>

            {/* Token Display Box */}
            <div className="bg-black/40 border border-white/10 p-6 relative group">
              <label className="text-black uppercase text-[0.6rem] font-bold tracking-[0.2em] absolute -top-2.5 left-4 bg-white px-2">
                Pass Token
              </label>
              <div className="flex items-center justify-between gap-4 mt-2">
                <code className="text-white font-bold tracking-wider truncate text-sm">
                  {passCode || "GENERATING..."}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="text-white/40 hover:text-white transition-colors"
                  title="Copy Reference"
                >
                  {copied ? (
                    <Check size={18} className="text-green-500" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={() => navigate("/login")}
                className="w-full bg-white text-secondary font-black uppercase italic py-5 text-xl hover:invert transition-all flex items-center justify-center gap-3"
              >
                Login with Pass
              </button>

              <button
                onClick={() => navigate("/")}
                className="w-full border-2 border-white/20 text-white/60 font-black uppercase italic py-4 text-sm hover:border-white hover:text-white transition-all"
              >
                Return to Base
              </button>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="text-center py-6">
            <div className="text-red-500 mb-6 font-black text-6xl">!</div>
            <h2 className="text-red-500 font-black text-3xl uppercase italic tracking-tighter mb-4">
              System Breach
            </h2>
            <p className="text-white/40 uppercase text-xs tracking-widest mb-10 leading-relaxed">
              We could not validate that signature in our archives.
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full border-2 border-red-500 text-red-500 font-black uppercase italic py-5 text-lg hover:bg-red-500 hover:text-white transition-all"
            >
              Retry Protocol
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Verify;
