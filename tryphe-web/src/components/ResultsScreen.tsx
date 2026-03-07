import { motion } from "framer-motion";

import { fragrances } from "../data/fragrances";
import { calculateSimilarity } from "../utils/similarity";

import ProfileRadar from "./ProfileRadar";
import Bottle3D from "./Bottle3D";
import PerfumeCarousel from "./PerfumeCarousel";

type Props = {
  profile: number[];
  onGenerateQR: () => void;
};

export default function ResultsScreen({
  profile,
  onGenerateQR
}: Props) {

  const results = calculateSimilarity(profile, fragrances);

  const topMatch = results[0];

  return (

    <motion.div
      className="screen"
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration:0.8 }}
    >

      <h2>Tu perfil olfativo</h2>

      <div className="results-layout">


        {/* RADAR + BOTELLA */}

        <div className="results-top">

          <ProfileRadar profile={profile} />

          <Bottle3D />

        </div>


        {/* PERFUME DESTACADO */}

        <motion.div
          className="top-match"
          initial={{ opacity:0, scale:0.9 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ delay:0.6 }}
        >

          <h2 className="spotlight-title">
            Tu perfume ideal
          </h2>

          <div className="carousel-card">

            <img
              src={topMatch.fragrance.image}
              alt={topMatch.fragrance.name}
            />

            <div className="top-match-info">

              <h3>{topMatch.fragrance.name}</h3>

              <p>{topMatch.fragrance.brand}</p>

              <div className="top-score">
                {topMatch.score}% Match
              </div>

            </div>

          </div>

        </motion.div>


        {/* CARRUSEL */}

        <div>

          <h2>Otras recomendaciones</h2>

          <PerfumeCarousel results={results} />

        </div>

      </div>


      <motion.button
        className="btn-gold"
        onClick={onGenerateQR}
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.96 }}
      >
        Generar mi QR
      </motion.button>

    </motion.div>

  );

}