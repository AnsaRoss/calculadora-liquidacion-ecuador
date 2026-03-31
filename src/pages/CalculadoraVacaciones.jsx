import { useState } from 'react';
import { Link } from 'react-router-dom';
import VacationsForm from '../components/VacationsForm';
import VacationsResultsCard from '../components/VacationsResultsCard';
import SeoHead from '../components/SeoHead';
import SiteFooter from '../components/SiteFooter';
import { calculateVacations } from '../utils/calculations';

const initialForm = {
  salary: '',
  startDate: '',
  endDate: '',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Vacaciones Ecuador',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  description:
    'Calculadora online para estimar vacaciones proporcionales en Ecuador.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

function CalculadoraVacaciones() {
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

    const calculation = calculateVacations(formData);

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
        title="Calculadora de Vacaciones Ecuador Gratis y Rapida"
        description="Calcula vacaciones proporcionales en Ecuador gratis. Ingresa sueldo y fechas para obtener un valor estimado de forma rapida."
        path="/calculadora-vacaciones-ecuador"
        structuredData={structuredData}
      />

      <main className="app-shell page-home">
        <section className="calculator-card">
          <div className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow">Calculadora especifica</p>
              <h1>Calculadora de Vacaciones Ecuador</h1>
              <p className="subtitle">
                Estima rapidamente el valor proporcional de vacaciones segun sueldo
                y tiempo trabajado.
              </p>
            </div>

            <nav className="hero-nav" aria-label="Navegacion relacionada">
              <Link to="/vacaciones-ecuador">Guia de vacaciones</Link>
              <Link to="/">Calculadora de liquidacion</Link>
              <Link to="/calculadora-decimo-tercero-ecuador">Calculadora de decimo tercero</Link>
            </nav>

            <div className="hero-highlights">
              <article>
                <strong>Enfoque puntual</strong>
                <span>Pensada para quien busca solo vacaciones proporcionales.</span>
              </article>
              <article>
                <strong>Uso rapido</strong>
                <span>Obtienes una referencia simple en pocos segundos.</span>
              </article>
              <article>
                <strong>Potencial SEO</strong>
                <span>Ruta propia para captar otra busqueda relevante.</span>
              </article>
            </div>
          </div>

          <VacationsForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          <VacationsResultsCard result={result} />
        </section>

        <section className="seo-section">
          <div className="seo-content seo-content--home">
            <h2>Como funciona la calculadora de vacaciones</h2>
            <p>
              Esta herramienta toma sueldo mensual, fecha de ingreso y fecha de
              salida para estimar el valor proporcional de vacaciones no gozadas.
            </p>
            <p>
              Tener una pagina independiente ayuda a posicionar mejor una busqueda
              concreta y aumenta tus oportunidades de atraer trafico desde Google.
            </p>
            <div className="seo-links-grid">
              <Link to="/vacaciones-ecuador">Leer la guia de vacaciones</Link>
              <Link to="/calculadora-decimo-tercero-ecuador">Ir a decimo tercero</Link>
              <Link to="/">Volver a la calculadora principal</Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}

export default CalculadoraVacaciones;
