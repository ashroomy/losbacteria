import { animate, motion, Reorder, useMotionValue, useSpring, useTransform } from "framer-motion";
import cereal from '../assets/img/bacteria-cereal.png'
import bloodbag from '../assets/img/bacteria-bloodbag.png'
import soda from '../assets/img/bacteria-soda.png'
import fries from '../assets/img/bacteria-fries.png'
import candy from '../assets/img/bacteria-candy.png'
import banana from '../assets/img/bacteria-banano.png'
import gum from '../assets/img/bacteria-gum.png'
import spray from '../assets/img/bacteria-spray.png'
import { Layout } from "~/components/layout";
import { useEffect, useRef, useState } from "react";



export default function Home() {
  const [active,setActive] = useState('')

  const constraintsRef = useRef(null)
  // MOTION STATES FOR EACH INVIDIVUAL ELEMENT 
  const sodaX = useMotionValue(0)
  const sodaY =  useMotionValue(0)
  const sodaX1 = useMotionValue(0)
  const sodaY1 =  useMotionValue(0)
  
  const bloodbagX = useMotionValue(0)
  const bloodbagY = useMotionValue(0)
  const bloodbagX1 = useMotionValue(0)
  const bloodbagY1 = useMotionValue(0)
  
  const cerealX = useMotionValue(0)
  const cerealY = useMotionValue(0)
  const cerealX1 = useMotionValue(0)
  const cerealY1 = useMotionValue(0)

  const bananaX = useMotionValue(0)
  const bananaY = useMotionValue(0)
  const bananaX1 = useMotionValue(0)
  const bananaY1 = useMotionValue(0)
  const bananaX2 = useMotionValue(0)
  const bananaY2 = useMotionValue(0)

  const friesX = useMotionValue(0)
  const friesY = useMotionValue(0)
  const friesX1 = useMotionValue(0)
  const friesY1 = useMotionValue(0)
  const friesX2 = useMotionValue(0)
  const friesY2 = useMotionValue(0)

  const gumX = useMotionValue(0)
  const gumY = useMotionValue(0)
  const gumX1 = useMotionValue(0)
  const gumY1 = useMotionValue(0)
  
  const candyX = useMotionValue(0)
  const candyY = useMotionValue(0)
  const candyX1 = useMotionValue(0)
  const candyY1 = useMotionValue(0)
  const candyX2 = useMotionValue(0)
  const candyY2 = useMotionValue(0)
  
  const sprayX = useMotionValue(0)
  const sprayY = useMotionValue(0)
  const sprayX1 = useMotionValue(0)
  const sprayY1 = useMotionValue(0)


  const sizes = {
    soda:{
      size:70,
      width:'70px',
      height: '99px'
    },
    bloodbag:{
      size:90,
      width:'90px',
      height:'96px'
    },
    cereal:{
      size:88,
      width:'88px',
      height:'124px'
    },
    banana:{
      size:79,
      width:'79px',
      height:'111px'
    },
    fries:{
      width:'79px',
      height:'111px'
    },
    spray:{
      width:'85px',
      height:'127px',
      size:85
    },
    candy:{
      width:'79px',
      height:'111px',
      size:79
    },    
    gum:{
      width:'98px',
      height:'108px'
    }

  }

  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration:0.8
    }
  }
}
  const rotateVariant = {
   
      rotate: [0, 90, 180,90, 0 ],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          times: [0, 0.2, 0.5, 0.8, 1],

          ease: "easeInOut",
        },
      },
  
  };


  const AnimatedImg = ({ active, setActive, id, x, y, width, height , src, angle}:any) => {
    const isDragging = id === active;
    const springConfig = {
    stiffness: 900,
    damping: 10,
    };
  const gap=10;
  
  // const rotate = useTransform(x, [angle, ], [0, 2])
    const size= width;
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);
    return (
      <motion.img
         src={src}
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ bounceStiffness:200, bounceDamping: 9 }}
        dragElastic={0.8}
        whileHover={{ cursor: "grabbing", scale:1.3}}
        whileTap={{ cursor: "grabbing", scale:1.3}}
        onDragStart={() => setActive(id)}
        style={{
          width: width,
          height: height,
          x: isDragging ? x : dx,
          y: isDragging ? y : dy,
          cursor: "grab",
          zIndex: isDragging ? 99 : 0,
          rotate:  `${angle}deg`
        }
      }
      />
      )

  }

  return (
    <Layout>

      <div className="flex h-full justi px-3 overflow-hidden ">
      <motion.div
        ref={constraintsRef}
        style={{
          width: "94vw",
          padding: "1.75rem 0 0 0",
          height: "calc(100%-90px)",
          position: "relative",
          display:"flex", 
          justifyContent:"center",
          flexFlow:"wrap",
          pageBreakInside:'avoid',
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >

        <AnimatedImg  src={candy} angle="-82.974" height={sizes.candy.height} width={sizes.candy.width} id="candy-1" x={candyX} y={candyY} active={active}  setActive={setActive} />
        <AnimatedImg src={gum} angle="-12.013" width={sizes.gum.width} height={sizes.gum.height}  id="gum-1" x={gumX} y={gumY} active={active}  setActive={setActive} />
        <AnimatedImg src={soda} angle="-22.608" width={sizes.soda.width}  height={sizes.soda.height}  id="soda-1" x={sodaX} y={sodaY} active={active}  setActive={setActive} />
        <AnimatedImg src={banana} angle="-88.182" width={sizes.banana.width} height={sizes.banana.height} id="banana-1" x={bananaX} y={bananaY} active={active}  setActive={setActive} />
        <AnimatedImg  src={fries} angle="53.385" width={sizes.fries.width}   height={sizes.fries.height}   id="fries-1" x={friesX} y={friesY} active={active}  setActive={setActive} />

        <AnimatedImg src={banana} angle="110.164" width={sizes.banana.width}  height={sizes.banana.height}  id="banana-2" x={bananaX1} y={bananaY1} active={active}  setActive={setActive} />
        <AnimatedImg  src={bloodbag} angle="-2.89" width={sizes.bloodbag.width}   height={sizes.bloodbag.height}   id="bloodbag-1" x={bloodbagX} y={bloodbagY} active={active}  setActive={setActive} />
        <AnimatedImg  src={candy} angle="-71.974" width={sizes.candy.width}   height={sizes.candy.height}   id="candy-2" x={candyX1} y={candyY1} active={active}  setActive={setActive} />
        <AnimatedImg src={spray} angle="54.328" width={sizes.spray.width}   height={sizes.spray.height}  id="spray-2" x={sprayX1} y={sprayY1} actidve={active}  setActive={setActive} />

        <AnimatedImg  src={cereal} angle="-3.435" width={sizes.cereal.width}   height={sizes.cereal.height}   id="cereal-2" x={cerealX1} y={cerealY1} active={active}  setActive={setActive} />
        <AnimatedImg src={banana} angle="-88.182" width={sizes.banana.width} height={sizes.banana.height} id="banana-3" x={bananaX2} y={bananaY2} active={active}  setActive={setActive} />
        <AnimatedImg  src={soda} angle="-71.974" width={sizes.soda.width}   height={sizes.soda.height}   id="soda-2" x={sodaX1} y={sodaY1} active={active}  setActive={setActive} />
        <AnimatedImg src={gum} angle="-69.551" width={sizes.gum.width}    height={sizes.gum.height}  id="gum-2" x={gumX1} y={gumY1} active={active}  setActive={setActive} />

        <AnimatedImg  src={fries} angle="53.385" width={sizes.fries.width}   height={sizes.fries.height}   id="fries-2" x={friesX1} y={friesY1} active={active}  setActive={setActive} />

        <AnimatedImg  src={cereal} angle="-3.435" width={sizes.cereal.width}   height={sizes.cereal.height}   id="cereal-1" x={cerealX} y={cerealY} active={active}  setActive={setActive} />
        <AnimatedImg src={spray} angle="2" width={sizes.spray.width}   height={sizes.spray.height}  id="spray-1" x={sprayX} y={sprayY} actidve={active}  setActive={setActive} />
        <AnimatedImg src={fries} angle="53.385" width={sizes.fries.width}   height={sizes.fries.height}   id="fries-3" x={friesX2} y={friesY2} active={active}  setActive={setActive} />
        <AnimatedImg  src={bloodbag} angle="-2.89" width={sizes.bloodbag.width}   height={sizes.bloodbag.height}   id="bloodbag-2" x={bloodbagX1} y={bloodbagY1} active={active}  setActive={setActive} />


      
      </motion.div>
        

      </div>
  

    </Layout>

  );
}
