import { motion } from "framer-motion";

export default function Bottle3D(){

  return(

    <motion.div
      className="bottle-3d"
      animate={{
        y:[0,-12,0]
      }}
      transition={{
        duration:4,
        repeat:Infinity,
        ease:"easeInOut"
      }}
    >

      <img
        src="/bottle.png"
        alt="Perfume bottle"
      />

    </motion.div>

  );

}