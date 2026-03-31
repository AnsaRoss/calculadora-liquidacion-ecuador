import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorForm from '../components/CalculatorForm';
import ResultsCard from '../components/ResultsCard';
import { calculateSettlement } from '../utils/calculations';
import { Link } from "react-router-dom";

const initialForm = {
  salary: '',
  startDate: '',
  endDate: '',
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
    <Helmet>
      <title>Calculadora de Liquidación Ecuador 2026 Gratis</title>
      <meta 
        name="description" 
        content="Calcula tu liquidación laboral en Ecuador gratis. Incluye décimo tercero, vacaciones y total automático en segundos." 
      />
      <link 
        rel="canonical" 
        href="https://calculadora-liquidacion-ecuador.vercel.app/" 
      />
    </Helmet>
    <main className="app-shell">
      <section className="calculator-card">
        <div className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Herramienta laboral</p>
            <h1>Calculadora de Liquidación Laboral en Ecuador</h1>
            <p className="subtitle">
              Calcula una estimacion rapida de decimo tercero y vacaciones con base
              en el tiempo trabajado.
            </p>
          </div>

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
              <strong>Diseno responsive</strong>
              <span>Se adapta bien a escritorio y telefono.</span>
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
      <section className="seo-content">
            <h2>¿Cómo calcular la liquidación laboral en Ecuador?</h2>

            <p>
              La liquidación laboral en Ecuador incluye varios componentes como el décimo tercero,
              vacaciones no gozadas y otros valores acumulados dependiendo del tiempo trabajado.
            </p>

            <p>
              Para calcularla correctamente es necesario conocer el salario, la fecha de ingreso y la fecha de salida.
              Con estos datos se puede estimar el valor proporcional de cada beneficio.
            </p>

            <h3>¿Qué incluye la liquidación?</h3>
            <ul>
              <li>Décimo tercero proporcional</li>
              <li>Vacaciones no gozadas</li>
              <li>Otros valores según el caso</li>
            </ul>

            <h3>Ejemplo práctico</h3>
            <p>
              Si un trabajador gana $600 y trabajó un año, su liquidación incluirá el décimo tercero acumulado
              y vacaciones proporcionales según el tiempo trabajado.
            </p>

            <h3>Guías relacionadas</h3>
            <ul>
              <li>
                <Link to="/como-calcular-liquidacion-ecuador">
                  Cómo calcular la liquidación paso a paso
                </Link>
              </li>
              <li>
                <a href="/decimo-tercero-ecuador">
                  Cómo calcular el décimo tercero
                </a>
              </li>
              <li>
                <a href="/vacaciones-ecuador">
                  Cómo calcular las vacaciones
                </a>
              </li>
            </ul>
          </section>
    </main>
    </>
  );
}

export default Home;
