/* @ts-ignore */import React, { useRef, useEffect } from "react";
import {
  motion,
  useSpring,
  useTransform,
  PanInfo,
  MotionValue,
  useMotionValue,
} from "framer-motion";
const marqueeVariants = {
  animate: {
    x: ['0vw', '-90vw'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
        ease: "linear",
      },
    },
  }
};

const Marquee = () => {
  return (
    <div>
      <div className="relative w-full max-w-full h-[26px] align-middle bg-black pb-[2px] overflow-x-hidden border-b border-solid border-white">
        <motion.div
          className=" track absolute flex-nowrap will-change-transform	"
          variants={marqueeVariants}
          animate="animate"
        >
          <h6 className="text-white text-[14px] uppercase w-max inline-block " >
           Ideas contagiosas ideas contagiosas ideas contagiosas ideas contagiosas  ideas contagiosas ideas contagiosas  

          </h6>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
