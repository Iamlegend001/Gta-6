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

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-10%", // 👈 changed from -25% to -15%
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,

      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky ", {
        x: `${xMove}`,
      });
      gsap.to(".bg ", {
        x: `${xMove * 1.7}`,
      });
    });
  }, [showContent]);

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
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
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
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-25deg] top-0 left-0 w-full h-full object-cover scale-1.1"
                src="./bg.png"
                alt=""
              />{" "}
              <div className="text text-white flex flex-col gap-4 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-20">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-20">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 scale-[1] rotate-[-20deg]  w-[35vw] max-w-[800px] object-cover"
                src="./girl.png"
                alt=""
              />
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
          <div className="w-full h-screen flex px-10 items-center justify-center  bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              {" "}
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-1.3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still Grinding</h1>
                <h1 className="text-8xl">keep Grinding</h1>

                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus dolor inventore reiciendis minus modi voluptatum
                  iste vero sunt eveniet illo ad obcaecati ab facere, cupiditate
                  tempora ipsam placeat at optio, nihil perferendis quis fugit
                  illum saepe? Illum blanditiis perferendis id?
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  facilis accusamus nam temporibus.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  facilis accusamus nam temporibus.
                </p>

                <button className="bg-yellow-500 px-10 py-10 text-3xl text-black mt-10">
                  {" "}
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
