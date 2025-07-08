import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".vi-mask-group", {
        rotate: 10,
        duration: 1.5,
        ease: "power4.inOut",
        transformOrigin: "50% 50%",
      }).to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            setShowContent(true);
            this.kill();
          }
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <>
      {!showContent && (
        <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
          <svg
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <text
                  className="vi-mask-group"
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </mask>
            </defs>
            <image
              x="0"
              y="0"
              width="800"
              height="600"
              xlinkHref="/bg.png"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}

      {showContent && (
        // <main className="w-full h-screen flex items-center justify-center text-white bg-[#0e0e0e]">
        //   <h1 className="text-5xl font-bold">Welcome to VI</h1>
        // </main>
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 w-full z-[10] py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[10px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-10 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-5xl -mt-[6px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <img
                className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[40vw] max-w-[800px] object-contain"
                src="./girl.png"
                alt=""
              />
              <div className="text absolute top-0 left-0">
                <h1>grand</h1>
                <h1>theft</h1>
                <h1>auto</h1>
              </div>
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center gap-4 items-center">
                <i className=" text-4xl ri-arrow-down-line"></i>

                <h3 className=" text-2xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
