import React, { useState } from "react";

export default function ScientificCalculator() {
  const [input, setInput] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleClick = (value) => {
    setIsScrolling(false);
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setIsScrolling(false);
    setInput("");
  };

  const deleteLast = () => {
    setIsScrolling(false);
    setInput((prev) => prev.slice(0, -1));
  };

  const showHumbleMessage = () => {
    setInput("🔥 Humble is Awesome 🔥");
    setIsScrolling(true);
  };

  const calculate = () => {
    try {
      setIsScrolling(false);

      const expression = input
        .replace(/√/g, "Math.sqrt")
        .replace(/π/g, "Math.PI")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/log/g, "Math.log10");

      setInput(eval(expression).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "AC",
    "DEL",
    "(",
    ")",
    "/",

    "7",
    "8",
    "9",
    "*",
    "sin",

    "4",
    "5",
    "6",
    "-",
    "cos",

    "1",
    "2",
    "3",
    "+",
    "tan",

    "0",
    ".",
    "π",
    "√(",
    "log",

    "^",
    "HUMBLE",
    "=",
  ];

  return (
    <div className="h-screen overflow-hidden bg-black flex items-center justify-center p-2">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full"></div>

      {/* Calculator */}
      <div className="relative w-full max-w-sm h-[95vh] bg-[#0d0d0d]/95 backdrop-blur-xl border border-yellow-500/20 rounded-3xl shadow-[0_0_40px_rgba(255,215,0,0.15)] p-4 flex flex-col">

        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-3xl font-extrabold text-yellow-400 tracking-[6px]">
            HUMBLE
          </h1>

          <p className="text-gray-500 text-[10px] uppercase tracking-[4px] mt-1">
            Scientific Calculator
          </p>
        </div>

        {/* Display */}
        <div className="bg-black border border-yellow-500/10 rounded-2xl px-4 py-5 mb-4 shadow-inner overflow-hidden relative">

          {isScrolling ? (
            <div className="whitespace-nowrap animate-marquee text-yellow-400 text-2xl font-bold">
              🔥 Humble is Awesome 🔥 &nbsp;&nbsp;&nbsp;
              🔥 Humble is Awesome 🔥 
              🔥 Humble is Awesome 🔥&nbsp;&nbsp;&nbsp;
            </div>
          ) : (
            <input
              type="text"
              value={input}
              readOnly
              placeholder="0"
              className="w-full bg-transparent text-right text-2xl text-yellow-400 font-light outline-none truncate"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-5 gap-2 flex-1">

          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => {
                if (btn === "=") {
                  calculate();
                } else if (btn === "AC") {
                  clearInput();
                } else if (btn === "DEL") {
                  deleteLast();
                } else if (btn === "^") {
                  handleClick("**");
                } else if (btn === "HUMBLE") {
                  showHumbleMessage();
                } else {
                  handleClick(btn);
                }
              }}
              className={`
                rounded-2xl text-sm font-bold transition-all duration-200
                active:scale-90 hover:scale-105 h-12 hover:shadow-lg

                ${
                  btn === "="
                    ? "col-span-2 bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-yellow-500/50"
                    : btn === "AC"
                    ? "bg-red-500/20 text-red-400 border border-red-500/20 hover:bg-red-500/40"
                    : btn === "DEL"
                    ? "bg-orange-500/20 text-orange-300 border border-orange-500/20 hover:bg-orange-500/40"
                    : btn === "HUMBLE"
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-extrabold hover:brightness-110 hover:shadow-yellow-500/50"
                    : ["+", "-", "*", "/", "^"].includes(btn)
                    ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 hover:bg-yellow-500/20"
                    : ["sin", "cos", "tan", "log", "√("].includes(btn)
                    ? "bg-[#1b1b1b] text-yellow-300 border border-gray-700 hover:bg-[#252525]"
                    : "bg-[#151515] text-white border border-gray-800 hover:bg-[#202020]"
                }
              `}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-3">
          <p className="text-gray-600 text-[10px] tracking-[3px]">
            DESIGNED BY HUMBLE
          </p>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            display: inline-block;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
}