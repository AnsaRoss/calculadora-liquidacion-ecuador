import { Link } from 'react-router-dom';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <section>
          <h2>Calculadora de Liquidacion Ecuador</h2>
          <p>
            Herramienta gratuita para estimar liquidacion laboral, decimo tercero
            y vacaciones en Ecuador.
          </p>
        </section>

        <nav aria-label="Enlaces principales">
          <h3>Guias</h3>
          <Link to="/como-calcular-liquidacion-ecuador">Como calcular liquidacion</Link>
          <Link to="/decimo-tercero-ecuador">Decimo tercero</Link>
          <Link to="/vacaciones-ecuador">Vacaciones</Link>
          <Link to="/finiquito-ecuador">Finiquito</Link>
          <Link to="/renuncia-voluntaria-ecuador">Renuncia voluntaria</Link>
        </nav>

        <nav aria-label="Enlaces legales">
          <h3>Legal</h3>
          <Link to="/politica-de-privacidad">Politica de privacidad</Link>
          <Link to="/terminos-y-condiciones">Terminos y condiciones</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}

export default SiteFooter;
