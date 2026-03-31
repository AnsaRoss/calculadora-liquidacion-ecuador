import { useState } from 'react';
import { Link } from 'react-router-dom';
import CalculatorForm from '../components/CalculatorForm';
import ResultsCard from '../components/ResultsCard';
import SeoHead from '../components/SeoHead';
import { calculateSettlement } from '../utils/calculations';

const initialForm = {
  salary: '',
  startDate: '',
  endDate: '',
};

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Liquidacion Ecuador',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  description:
    'Calculadora online para estimar liquidacion laboral en Ecuador, incluyendo decimo tercero y vacaciones.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

function Home() {
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

    const calculation = calculateSettlement(formData);

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
        title="Calculadora de Liquidacion Ecuador Gratis"
        description="Calcula tu liquidacion laboral en Ecuador con una herramienta gratis. Estima decimo tercero, vacaciones y total en segundos."
        path="/"
        structuredData={homeStructuredData}
      />

      <main className="app-shell page-home">
        <section className="calculator-card">
          <div className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow">Herramienta laboral</p>
              <h1>Calculadora de Liquidacion Laboral en Ecuador</h1>
              <p className="subtitle">
                Calcula una estimacion rapida de decimo tercero, vacaciones y total
                acumulado segun el tiempo trabajado.
              </p>
            </div>

            <nav className="hero-nav" aria-label="Guias relacionadas">
              <Link to="/como-calcular-liquidacion-ecuador">Como calcular paso a paso</Link>
              <Link to="/decimo-tercero-ecuador">Decimo tercero en Ecuador</Link>
              <Link to="/vacaciones-ecuador">Vacaciones en Ecuador</Link>
            </nav>

            <div className="hero-highlights">
              <article>
                <strong>Calculo simple</strong>
                <span>Formula proporcional basada en meses trabajados.</span>
              </article>
              <article>
                <strong>Resultado claro</strong>
                <span>Montos visibles, ordenados y con dos decimales.</span>
              </article>
              <article>
                <strong>Accesible y rapido</strong>
                <span>Se adapta bien a telefono y escritorio.</span>
              </article>
            </div>
          </div>

          <CalculatorForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          <ResultsCard result={result} />
        </section>

        <section className="seo-section">
          <div className="seo-content seo-content--home">
            <h2>Como calcular la liquidacion laboral en Ecuador</h2>
            <p>
              Esta calculadora te ayuda a estimar rapidamente valores comunes de la
              liquidacion laboral en Ecuador. Solo necesitas ingresar tu sueldo
              mensual, la fecha de ingreso y la fecha de salida para obtener una
              referencia automatica.
            </p>
            <p>
              El calculo actual toma los meses trabajados como la diferencia en dias
              dividida para treinta. A partir de ese dato estima el decimo tercero,
              las vacaciones proporcionales y el total resultante. Es una herramienta
              util para trabajadores que desean revisar un finiquito antes de tomar
              decisiones.
            </p>
            <div className="seo-links-grid">
              <Link to="/como-calcular-liquidacion-ecuador">Leer guia completa</Link>
              <Link to="/decimo-tercero-ecuador">Aprender sobre decimo tercero</Link>
              <Link to="/vacaciones-ecuador">Aprender sobre vacaciones</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
