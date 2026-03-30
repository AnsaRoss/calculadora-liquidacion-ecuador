import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsCard from './components/ResultsCard';
import { calculateSettlement } from './utils/calculations';

const initialForm = {
  salary: '',
  startDate: '',
  endDate: '',
};

function App() {
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
    <main className="app-shell">
      <section className="calculator-card">
        <div className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Herramienta laboral</p>
            <h1>Calculadora de Liquidacion Ecuador</h1>
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
    </main>
  );
}

export default App;
