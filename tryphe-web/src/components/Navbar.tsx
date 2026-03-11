import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onStaff: () => void;
};

export default function Navbar({ onStaff }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <span className="navbar-brand">TRYPHÉ</span>

        <ul className="navbar-links">
          <li><a onClick={(e) => { e.preventDefault(); scrollTo("brand"); }} href="#brand">Nosotros</a></li>
          <li><a onClick={(e) => { e.preventDefault(); scrollTo("collection"); }} href="#collection">Colección</a></li>
          <li><a onClick={(e) => { e.preventDefault(); scrollTo("quiz"); }} href="#quiz">Experiencia</a></li>
        </ul>

        <div className="navbar-right">
          <button className="navbar-staff" onClick={onStaff}>Staff</button>
          <button
            className="navbar-burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="navbar-mobile-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >✕</button>
            <a onClick={(e) => { e.preventDefault(); scrollTo("brand"); }} href="#brand">Nosotros</a>
            <a onClick={(e) => { e.preventDefault(); scrollTo("collection"); }} href="#collection">Colección</a>
            <a onClick={(e) => { e.preventDefault(); scrollTo("quiz"); }} href="#quiz">Experiencia</a>
            <button onClick={() => { setMenuOpen(false); onStaff(); }}>Modo Staff</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
