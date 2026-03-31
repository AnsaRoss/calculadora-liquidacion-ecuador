import { useState } from 'react';
import { Link } from 'react-router-dom';
import DecimoForm from '../components/DecimoForm';
import DecimoResultsCard from '../components/DecimoResultsCard';
import SeoHead from '../components/SeoHead';
import SiteFooter from '../components/SiteFooter';
import { calculateDecimoTercero } from '../utils/calculations';

const initialForm = {
  salary: '',
  startDate: '',
  endDate: '',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Decimo Tercero Ecuador',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  description:
    'Calculadora online para estimar el decimo tercero proporcional en Ecuador.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

function CalculadoraDecimoTercero() {
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

    const calculation = calculateDecimoTercero(formData);

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
        title="Calculadora de Decimo Tercero Ecuador Gratis"
        description="Calcula el decimo tercero proporcional en Ecuador con una herramienta gratis y facil de usar."
        path="/calculadora-decimo-tercero-ecuador"
        structuredData={structuredData}
      />

      <main className="app-shell page-home">
        <section className="calculator-card">
          <div className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow">Calculadora especifica</p>
              <h1>Calculadora de Decimo Tercero Ecuador</h1>
              <p className="subtitle">
                Estima rapidamente tu decimo tercero proporcional segun sueldo,
                fecha de ingreso y fecha de salida.
              </p>
            </div>

            <nav className="hero-nav" aria-label="Navegacion relacionada">
              <Link to="/decimo-tercero-ecuador">Guia del decimo tercero</Link>
              <Link to="/">Calculadora de liquidacion</Link>
              <Link to="/vacaciones-ecuador">Vacaciones en Ecuador</Link>
            </nav>

            <div className="hero-highlights">
              <article>
                <strong>Respuesta rapida</strong>
                <span>Ideal para revisar un valor proporcional en segundos.</span>
              </article>
              <article>
                <strong>Orientada a una sola duda</strong>
                <span>Mas clara para quien busca solo decimo tercero.</span>
              </article>
              <article>
                <strong>Lista para SEO</strong>
                <span>Ruta independiente con potencial de busqueda propia.</span>
              </article>
            </div>
          </div>

          <DecimoForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          <DecimoResultsCard result={result} />
        </section>

        <section className="seo-section">
          <div className="seo-content seo-content--home">
            <h2>Como funciona la calculadora de decimo tercero</h2>
            <p>
              Esta pagina esta enfocada en una sola necesidad: estimar el valor
              proporcional del decimo tercero en Ecuador. Usa el sueldo mensual y
              el tiempo trabajado para darte una referencia inmediata.
            </p>
            <p>
              Tener una calculadora especifica mejora la experiencia del usuario y
              tambien ayuda a posicionar mejor una keyword concreta en Google. Eso
              puede traer mas visitas y aumentar las oportunidades de monetizacion.
            </p>
            <div className="seo-links-grid">
              <Link to="/decimo-tercero-ecuador">Leer la guia del decimo tercero</Link>
              <Link to="/como-calcular-liquidacion-ecuador">Aprender sobre liquidacion</Link>
              <Link to="/">Volver a la calculadora principal</Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}

export default CalculadoraDecimoTercero;
