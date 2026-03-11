import { motion } from "framer-motion";
import type { Easing } from "framer-motion";

export default function HeroSection() {
  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.9, ease: "easeOut" as Easing }
  });

  return (
    <section className="hero">

      <motion.p className="hero-eyebrow" {...fade(0.3)}>
        Alta Perfumería
      </motion.p>

      <motion.h1 className="hero-title" {...fade(0.55)}>
        TRYPHÉ
      </motion.h1>

      <motion.p className="hero-tagline" {...fade(0.85)}>
        Descubre la fragancia que nació para ti. Una experiencia sensorial única,
        diseñada para revelar tu identidad olfativa.
      </motion.p>

      <motion.button
        className="hero-cta"
        onClick={scrollToQuiz}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Comenzar experiencia
        <span>→</span>
      </motion.button>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>

    </section>
  );
}
