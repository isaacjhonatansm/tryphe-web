import { motion } from "framer-motion";
import ResultsScreen from "./ResultsScreen";

type Props = {
  profile: number[];
  onGenerateQR: () => void;
  onClose: () => void;
};

export default function ResultsOverlay({ profile, onGenerateQR, onClose }: Props) {
  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <button className="overlay-close" onClick={onClose} title="Volver a la tienda">
        ✕
      </button>
      <ResultsScreen profile={profile} onGenerateQR={onGenerateQR} />
    </motion.div>
  );
}
