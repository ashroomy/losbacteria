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
  const sodaX2 = useMotionValue(0)
  const sodaY2 =  useMotionValue(0)
  
  const bloodbagX = useMotionValue(0)
  const bloodbagY = useMotionValue(0)
  const bloodbagX1 = useMotionValue(0)
  const bloodbagY1 = useMotionValue(0)
  const bloodbagX2 = useMotionValue(0)
  const bloodbagY2 = useMotionValue(0)
  
  const cerealX = useMotionValue(0)
  const cerealY = useMotionValue(0)
  const cerealX1 = useMotionValue(0)
  const cerealY1 = useMotionValue(0)
  const cerealX2 = useMotionValue(0)
  const cerealY2 = useMotionValue(0)


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
  const gumX2 = useMotionValue(0)
  const gumY2 = useMotionValue(0)
  
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
  const sprayX2 = useMotionValue(0)
  const sprayY2 = useMotionValue(0)

  const sizes = {
    soda:{
      width:'70px',
      height: '99px'
    },
    bloodbag:{
      width:'90px',
      height:'96px'
    },
    cereal:{
      width:'88px',
      height:'124px'
    },
    banana:{
      width:'79px',
      height:'111px'
    },
    fries:{
      width:'79px',
      height:'111px'
    },
    spray:{
      width:'79px',
      height:'111px'
    },
    candy:{
      width:'79px',
      height:'111px'
    },    
    gum:{
      width:'98px',
      height:'108px'
    }

  }



  // useEffect(() => {
  //   if (window) {
  //     setMaxWidth(window.innerWidth - 50)
  //     console.log(window.innerHeight)
  //     setMaxHeight(window.innerHeight - 200)
  //   }

  // }, []);

  const container = {
    hidden: {
      scale: 0,
    },
    show: {
      transition: {scale:1 }
    }
  };


  const AnimatedImg = ({ active, setActive, id, x, y, width , src, angle}:any) => {
    const isDragging = id === active;
      // console.log('transform', transform)
  const springConfig = {
    stiffness: 90,
    damping: 20 + 1 * 5,
  };

  // const rotate = useTransform(x, [angle, ], [0, 2])

    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);
    return (
      <motion.img
        src={src}
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        dragElastic={0.8}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={() => setActive(id)}
        style={{
          width: width,
          height: 'fit-content',
          x: isDragging ? x : dx,
          y: isDragging ? y : dy,
          zIndex: isDragging ? 1 : 0,
          rotate:`${angle}deg`,
          cursor: "grab",

        }}
      />
      )

  }

  return (
    <Layout>
      <div className="flex-col h-full bg-squares ">
      <motion.div
        ref={constraintsRef}
        style={{
          width: "98%",
          padding: "0",
          margin: "0",
          height: "85vh",
          position: "relative",
          display:"flex",
          flexFlow:"wrap",
          pageBreakInside:'avoid',
          marginTop:"auto"
        }}
        // variants={container}
        initial="hidden"
        animate="show"
      >

        <AnimatedImg  src={candy} angle="-82.974" width={sizes.candy.width} id="candy-1" x={candyX} y={candyY} active={active}  setActive={setActive} />
        <AnimatedImg src={gum} angle="-12.013" width={sizes.gum.width} id="gum-1" x={gumX} y={gumY} active={active}  setActive={setActive} />
        <AnimatedImg src={soda} angle="-22.608" width={sizes.gum.width} id="soda-1" x={sodaX} y={sodaY} active={active}  setActive={setActive} />
        <AnimatedImg src={banana} angle="-88.182" width={sizes.banana.width} id="banana-1" x={bananaX} y={bananaY} active={active}  setActive={setActive} />
        <AnimatedImg src={banana} angle="110.164" width={sizes.banana.width} id="banana-2" x={bananaX1} y={bananaY1} active={active}  setActive={setActive} />
        <AnimatedImg  src={bloodbag} angle="-2.89" width={sizes.bloodbag.width} id="bloodbag-1" x={bloodbagX} y={bloodbagY} active={active}  setActive={setActive} />
        <AnimatedImg  src={candy} angle="-71.974" width={sizes.candy.width} id="candy-2" x={candyX1} y={candyY1} active={active}  setActive={setActive} />

        <AnimatedImg  src={fries} angle="53.385" width={sizes.fries.width} id="fries-1" x={friesX} y={friesY} active={active}  setActive={setActive} />

        <AnimatedImg  src={cereal} angle="-3.435" width={sizes.cereal.width} id="cereal-1" x={cerealX} y={cerealY} active={active}  setActive={setActive} />
        <AnimatedImg src={spray} angle="54.328" width={sizes.spray.width} id="spray-1" x={sprayX} y={sprayY} actidve={active}  setActive={setActive} />
        <AnimatedImg src={fries} angle="53.385" width={sizes.fries.width} id="fries-2" x={friesX1} y={friesY1} active={active}  setActive={setActive} />
        <AnimatedImg src={gum} angle="-69.551" width={sizes.gum.width} id="gum-2" x={gumX1} y={gumY1} active={active}  setActive={setActive} />


      {/* <motion.img   
        src={cereal}
        className=""
        style={{
          minWidth:sizes.cereal.width,
          minHeight: sizes.cereal.height,
          width:sizes.cereal.width,
          height:'fit-content',
          transform: 'rotate(-3.435deg)',
      
        }} 
        drag
        dragConstraints={constraintsRef}
        /> */}
      {/* <motion.img   
        src={spray}
        style={{
          minWidth:sizes.spray.width,
          minHeight: sizes.spray.height,
          maxWidth:sizes.spray.width,
          height:'fit-content',
          transform: 'rotate(54.328deg)'
        }} 
        /> */}
{/* 
      <motion.img   
        src={fries}
        style={{
          minWidth:sizes.fries.width,
          minHeight: sizes.fries.height,
          maxWidth:sizes.fries.width,
          height:'fit-content',
          transform: 'rotate(53.385deg)'
        }} /> */}
         
        {/* <motion.img   
        src={gum}
        style={{
          minWidth:sizes.gum.width,
          minHeight: sizes.gum.height,
          maxWidth:sizes.gum.width,
          height:'fit-content',
          transform: 'rotate(-69.551deg)'
        }} /> */}



        {/* <motion.img
          src={cereal}
          style={{ width: 107, height: 151,  position: 'absolute'}}
          // animate={{
          //   rotate: [0, 180, 50 , -28],
          //   x: [700, 250, 60, 7],
          //   y: [0, 200 ,maxHeight-200],
          //   position:'absolute'

          // }}
          drag
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
          dragElastic={1}
          dragConstraints={constraintsRef}
          variants={cerealVar}
        />
        <motion.img src={bloodbag} style={{ width: 113, height: 122 }}
          drag
          dragConstraints={constraintsRef}
          variants={rowOne}
        />
        <motion.img src={soda}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          style={{ width: 112, height: 159, left: 200, rotate: 47.97, position: 'absolute' }} variants={rowOne} transition={{ duration: 2, type: 'spring', bounce: 0.8 }} />

        <motion.img src={candy}
          drag
          dragConstraints={constraintsRef}
          style={{ width: 112, height: 159, left: 45, rotate: -43.98, position: 'absolute' }} variants={rowTwo} transition={{ duration: 2, type: 'spring', bounce: 0.5 }} />
        <motion.img
          drag
          dragConstraints={constraintsRef}
          src={fries} style={{ width: 112, height: 159, left: 190, rotate: 21.5, position: 'absolute' }} variants={rowTwo} transition={{ duration: 2, type: 'spring', bounce: 0.9 }} />

        <motion.img
          drag
          dragConstraints={constraintsRef}
          src={banana} style={{ width: 112, height: 159, left: 10, rotate: -2.02, position: 'absolute' }} variants={rowThree} transition={{ duration: 2, type: 'spring', bounce: 0.5 }} />
        <motion.img drag
          dragConstraints={constraintsRef}
          src={spray} style={{ width: 122, height: 182, left: 80, rotate: -32.62, position: 'absolute' }} variants={rowThree} transition={{ duration: 2, type: 'spring', bounce: 0.6 }} />
        <motion.img drag
          dragConstraints={constraintsRef}
          src={gum} style={{ width: 138, height: 154, left: 186, rotate: -37, position: 'absolute' }} variants={rowThree} transition={{ duration: 2, type: 'spring', bounce: 0.7 }} />  */}


      </motion.div>
        

      </div>

      


    </Layout>

  );
}
