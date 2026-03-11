import { motion } from "framer-motion";
import QRCode from "react-qr-code";

type Props = {
  profile: number[];
  onRestart: () => void;
};

function encodeProfile(profile: number[]) {
  return profile.join("-");
}

export default function QROverlay({ profile, onRestart }: Props) {
  const code = encodeProfile(profile);
  const qrValue = "https://tryphe-web.vercel.app/profile?code=" + code;

  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <button className="overlay-close" onClick={onRestart} title="Cerrar">
        ✕
      </button>

      <div className="qr-screen-wrap">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2>Tu identidad olfativa</h2>
          <p>
            Guarda este código y muéstralo en nuestra tienda para recrear exactamente tu fragancia.
          </p>
        </motion.div>

        <motion.div
          className="qr-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="qr-box">
            <QRCode value={qrValue} size={220} />
          </div>
        </motion.div>

        <p className="qr-code">Código: {code}</p>

        <motion.button
          className="btn-gold"
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Crear otra experiencia
        </motion.button>

      </div>
    </motion.div>
  );
}
