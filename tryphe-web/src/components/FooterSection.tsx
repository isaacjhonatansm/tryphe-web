export default function FooterSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">

      <div>
        <p className="footer-brand">TRYPHÉ</p>
        <p className="footer-tagline">
          Alta perfumería creada para quienes entienden el lujo como una
          experiencia sensorial única e irrepetible.
        </p>
      </div>

      <div>
        <p className="footer-heading">Navegación</p>
        <ul className="footer-links">
          <li><a href="#brand" onClick={(e) => { e.preventDefault(); scrollTo("brand"); }}>Nosotros</a></li>
          <li><a href="#collection" onClick={(e) => { e.preventDefault(); scrollTo("collection"); }}>Colección</a></li>
          <li><a href="#quiz" onClick={(e) => { e.preventDefault(); scrollTo("quiz"); }}>Experiencia</a></li>
        </ul>
      </div>

      <div>
        <p className="footer-heading">Contacto</p>
        <ul className="footer-links">
          <li><a href="mailto:info@tryphe.com">info@tryphe.com</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">WhatsApp</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Tryphé. Todos los derechos reservados.</span>
        <span>Alta Perfumería · Experiencias Olfativas</span>
      </div>

    </footer>
  );
}
