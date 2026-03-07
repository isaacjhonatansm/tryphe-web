import { motion } from "framer-motion";
import type{ Fragrance } from "../types/fragrance";

type Result = {
  fragrance: Fragrance;
  score: number;
};

type Props = {
  results: Result[];
};

export default function PerfumeCarousel({ results }: Props) {

  return (

    <div className="carousel-container">

      <div className="carousel">

        {results.slice(1, 8).map((result, index) => (

          <motion.div
            className="carousel-card"
            key={result.fragrance.id}
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{
              delay: index * 0.08,
              duration:0.5
            }}
            whileHover={{
              scale:1.05,
              y:-6
            }}
          >

            <img
              src={result.fragrance.image}
              alt={result.fragrance.name}
            />

            <div className="carousel-info">

              <h3>{result.fragrance.name}</h3>

              <p>{result.fragrance.brand}</p>

              <div className="score">
                {result.score}% match
              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );

}