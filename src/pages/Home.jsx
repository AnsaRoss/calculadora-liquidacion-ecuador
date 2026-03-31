import { useState } from 'react';
import { Link } from 'react-router-dom';
import CalculatorForm from '../components/CalculatorForm';
import ResultsCard from '../components/ResultsCard';
import SeoHead from '../components/SeoHead';
import SiteFooter from '../components/SiteFooter';
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

const calculators = [
  {
    title: 'Liquidacion laboral',
    description: 'Calcula decimo tercero, vacaciones y total en una sola vista.',
    to: '#calculadora-principal',
    label: 'Usar ahora',
  },
  {
    title: 'Decimo tercero',
    description: 'Ruta enfocada en una sola duda con mejor potencial SEO.',
    to: '/calculadora-decimo-tercero-ecuador',
    label: 'Abrir calculadora',
  },
  {
    title: 'Vacaciones',
    description: 'Ideal para validar vacaciones proporcionales rapidamente.',
    to: '/calculadora-vacaciones-ecuador',
    label: 'Abrir calculadora',
  },
  {
    title: 'Finiquito',
    description: 'Estimacion rapida para revisar un pago final de salida.',
    to: '/calculadora-finiquito-ecuador',
    label: 'Abrir calculadora',
  },
];

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
        title="Calculadora de Liquidacion Ecuador Gratis y Rapida"
        description="Calcula tu liquidacion laboral en Ecuador gratis. Estima decimo tercero, vacaciones y finiquito con resultados rapidos y faciles de entender."
        path="/"
        structuredData={homeStructuredData}
      />

      <main className="app-shell page-home">
        <section className="landing-hero">
          <div className="landing-hero__content">
            <p className="eyebrow eyebrow--dark">Herramientas laborales para Ecuador</p>
            <h1>Calcula tu liquidacion en minutos y revisa si el pago final tiene sentido</h1>
            <p className="landing-hero__lead">
              Usa calculadoras gratuitas de liquidacion, decimo tercero, vacaciones
              y finiquito. Pensadas para personas que necesitan una referencia rapida,
              clara y facil de entender.
            </p>

            <div className="landing-hero__actions">
              <a className="primary-button hero-action" href="#calculadora-principal">
                Calcular liquidacion
              </a>
              <Link className="secondary-link" to="/calculadora-finiquito-ecuador">
                Probar calculadora de finiquito
              </Link>
            </div>

            <div className="landing-trust">
              <article>
                <strong>Gratis</strong>
                <span>Sin registro ni pasos innecesarios.</span>
              </article>
              <article>
                <strong>Rapido</strong>
                <span>Resultados en segundos desde celular o escritorio.</span>
              </article>
              <article>
                <strong>Util</strong>
                <span>Ideal para revisar cifras antes de firmar documentos.</span>
              </article>
            </div>
          </div>

          <aside className="landing-hero__panel">
            <p className="landing-hero__panel-label">Empieza por aqui</p>
            <div className="landing-hero__panel-list">
              {calculators.map((item) => (
                <article key={item.title} className="mini-card">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  {item.to.startsWith('#') ? (
                    <a href={item.to}>{item.label}</a>
                  ) : (
                    <Link to={item.to}>{item.label}</Link>
                  )}
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="tool-grid">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">Elige tu herramienta</p>
            <h2>Calculadoras creadas para atraer trafico y ayudarte a comparar valores</h2>
          </div>

          <div className="tool-grid__cards">
            {calculators.map((item) => (
              <article key={item.title} className="tool-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.to.startsWith('#') ? (
                  <a className="tool-card__link" href={item.to}>{item.label}</a>
                ) : (
                  <Link className="tool-card__link" to={item.to}>{item.label}</Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-strip">
          <article>
            <strong>Mas paginas, mas trafico</strong>
            <span>El sitio ahora puede captar multiples busquedas laborales de Ecuador.</span>
          </article>
          <article>
            <strong>Mejor conversion</strong>
            <span>La portada dirige al usuario rapido hacia una herramienta concreta.</span>
          </article>
          <article>
            <strong>Mejor monetizacion</strong>
            <span>Mas paginas vistas y mas tiempo en sitio ayudan a AdSense.</span>
          </article>
        </section>

        <section className="calculator-card" id="calculadora-principal">
          <div className="hero-panel hero-panel--main">
            <div className="hero-copy">
              <p className="eyebrow">Calculadora principal</p>
              <h2>Calculadora de Liquidacion Laboral en Ecuador</h2>
              <p className="subtitle">
                Calcula una estimacion rapida de decimo tercero, vacaciones y total
                acumulado segun el tiempo trabajado.
              </p>
            </div>

            <nav className="hero-nav" aria-label="Guias relacionadas">
              <Link to="/calculadora-decimo-tercero-ecuador">Calculadora de decimo tercero</Link>
              <Link to="/calculadora-vacaciones-ecuador">Calculadora de vacaciones</Link>
              <Link to="/calculadora-finiquito-ecuador">Calculadora de finiquito</Link>
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
              <Link to="/calculadora-decimo-tercero-ecuador">Usar calculadora de decimo tercero</Link>
              <Link to="/calculadora-vacaciones-ecuador">Usar calculadora de vacaciones</Link>
              <Link to="/calculadora-finiquito-ecuador">Usar calculadora de finiquito</Link>
              <Link to="/como-calcular-liquidacion-ecuador">Leer guia completa</Link>
              <Link to="/decimo-tercero-ecuador">Aprender sobre decimo tercero</Link>
              <Link to="/vacaciones-ecuador">Aprender sobre vacaciones</Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}

export default Home;
