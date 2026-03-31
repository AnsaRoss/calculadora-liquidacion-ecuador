import { useState } from 'react';
import { Link } from 'react-router-dom';
import FiniquitoForm from '../components/FiniquitoForm';
import FiniquitoResultsCard from '../components/FiniquitoResultsCard';
import SeoHead from '../components/SeoHead';
import SiteFooter from '../components/SiteFooter';
import { calculateFiniquito } from '../utils/calculations';

const initialForm = {
  salary: '',
  startDate: '',
  endDate: '',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Finiquito Ecuador',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  description:
    'Calculadora online para estimar finiquito basico en Ecuador.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

function CalculadoraFiniquito() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: '',
      form: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const calculation = calculateFiniquito(formData);

    if (calculation.errors) {
      setErrors(calculation.errors);
      setResult(null);
      return;
    }

    setErrors({});
    setResult(calculation);
  };

  return (
    <>
      <SeoHead
        title="Calculadora de Finiquito Ecuador Gratis y Rapida"
        description="Calcula un finiquito basico en Ecuador gratis. Estima decimo tercero, vacaciones y total con una herramienta facil de usar."
        path="/calculadora-finiquito-ecuador"
        structuredData={structuredData}
      />

      <main className="app-shell page-home">
        <section className="calculator-card">
          <div className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow">Calculadora especifica</p>
              <h1>Calculadora de Finiquito Ecuador</h1>
              <p className="subtitle">
                Estima un finiquito basico sumando decimo tercero y vacaciones
                proporcionales en una sola vista.
              </p>
            </div>

            <nav className="hero-nav" aria-label="Navegacion relacionada">
              <Link to="/finiquito-ecuador">Guia del finiquito</Link>
              <Link to="/">Calculadora de liquidacion</Link>
              <Link to="/calculadora-vacaciones-ecuador">Calculadora de vacaciones</Link>
            </nav>

            <div className="hero-highlights">
              <article>
                <strong>Muy buscable</strong>
                <span>Ideal para atraer usuarios que buscan finiquito directo.</span>
              </article>
              <article>
                <strong>Lectura simple</strong>
                <span>Muestra decimo tercero, vacaciones y total estimado.</span>
              </article>
              <article>
                <strong>Buena retencion</strong>
                <span>Puede enviar usuarios a otras guias y calculadoras.</span>
              </article>
            </div>
          </div>

          <FiniquitoForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          <FiniquitoResultsCard result={result} />
        </section>

        <section className="seo-section">
          <div className="seo-content seo-content--home">
            <h2>Como funciona la calculadora de finiquito</h2>
            <p>
              Esta pagina entrega una referencia simple del finiquito basico usando
              meses trabajados, decimo tercero y vacaciones proporcionales.
            </p>
            <p>
              Como keyword, finiquito puede traerte usuarios con intencion alta,
              lo que ayuda mucho tanto al SEO como a la monetizacion por anuncios.
            </p>
            <div className="seo-links-grid">
              <Link to="/finiquito-ecuador">Leer la guia de finiquito</Link>
              <Link to="/calculadora-vacaciones-ecuador">Ir a vacaciones</Link>
              <Link to="/">Volver a la calculadora principal</Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}

export default CalculadoraFiniquito;
