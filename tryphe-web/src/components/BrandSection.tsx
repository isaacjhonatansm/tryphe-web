import { motion } from "framer-motion";

export default function BrandSection() {
  return (
    <section className="brand-section-wrap" id="brand">
      <div className="section">
        <div className="brand-grid">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="section-label">Nuestra Esencia</p>
            <blockquote className="brand-quote">
              "El perfume es la forma más íntima del arte. Invisibe, eterno y completamente tuyo."
            </blockquote>
            <p className="brand-text">
              Tryphé nació de la convicción de que cada persona posee una huella olfativa única.
              Nuestra misión es ayudarte a descubrirla, y ofrecerte la fragancia que mejor
              la expresa.
            </p>
            <p className="brand-text">
              Elaboramos nuestras fragancias con materias primas de la más alta calidad,
              seleccionadas de los principales centros de perfumería del mundo. Cada botella
              es una obra de arte; cada aroma, una historia.
            </p>
          </motion.div>

          <motion.div
            className="brand-image-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <img
              src="/perfumes/perfume-12.jpg"
              alt="Tryphé — Alta Perfumería"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
