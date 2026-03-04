import { motion } from "framer-motion"

interface Props {
  onStart: () => void
}

const IntroScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="intro-screen d-flex flex-column justify-content-center align-items-center text-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="brand-title"
      >
        TRYHPÉ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8, duration: 1 }}
        className="brand-subtitle"
      >
        Descubre tu identidad olfativa
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="btn btn-gold mt-5 px-5 py-3"
      >
        Comenzar Experiencia
      </motion.button>

    </div>
  )
}

export default IntroScreen