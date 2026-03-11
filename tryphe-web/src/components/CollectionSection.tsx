import { motion } from "framer-motion";
import { fragrances } from "../data/fragrances";

const NOTE_LABELS = ["Cítrico", "Floral", "Amaderado", "Fresco", "Dulce", "Oriental"];

export default function CollectionSection() {
  return (
    <section className="section collection-section" id="collection">

      <div className="collection-header">
        <p className="section-label">Nuestras Fragancias</p>
        <h2 className="section-title">La Colección Tryphé</h2>
        <p className="section-subtitle">
          Cinco expresiones del lujo olfativo, cada una única en su personalidad y profundidad.
        </p>
      </div>

      <div className="collection-grid">
        {fragrances.map((f, i) => (
          <motion.div
            key={f.id}
            className="fragrance-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.65 }}
          >
            <img
              src={f.image ?? `/perfumes/perfume-0${i + 1}.jpg`}
              alt={f.name}
              className="fragrance-card-img"
            />
            <div className="fragrance-card-body">
              <p className="fragrance-card-brand">{f.brand}</p>
              <h3 className="fragrance-card-name">{f.name}</h3>
              <p className="fragrance-card-desc">{f.description}</p>
              <div className="fragrance-card-notes">
                {f.notes.map((val, ni) =>
                  val >= 6
                    ? <span key={ni} className="note-tag">{NOTE_LABELS[ni]}</span>
                    : null
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
