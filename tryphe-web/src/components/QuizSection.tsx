import { motion } from "framer-motion";
import QuizScreen from "./QuizScreen";

type Props = {
  onFinish: (values: number[]) => void;
};

export default function QuizSection({ onFinish }: Props) {
  return (
    <section className="section quiz-section-wrap" id="quiz">

      <div className="quiz-section-header">
        <p className="section-label">Experiencia Personalizada</p>
        <h2 className="section-title">Elige tu perfume</h2>
        <p className="section-subtitle">
          Ajusta tus preferencias aromáticas y descubre qué fragancia de nuestra colección
          resuena con tu esencia única.
        </p>
      </div>

      <motion.div
        className="quiz-panel"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <QuizScreen onFinish={onFinish} />
      </motion.div>

    </section>
  );
}
