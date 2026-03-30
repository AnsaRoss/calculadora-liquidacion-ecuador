import { useEffect } from "react";

function CalculatorForm({ formData, errors, onChange, onSubmit }) {
useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("AdSense error", e);
    }
  }, []); 
  return (
    <div className="form-column">
      <form className="calculator-form" onSubmit={onSubmit} noValidate>
        <div className="form-header">
          <h2>Datos del trabajador</h2>
          <p>Ingresa la informacion base para calcular la liquidacion estimada.</p>
        </div>

        <label className="field">
          <span>Sueldo mensual</span>
          <input
            type="number"
            name="salary"
            min="0"
            step="0.01"
            placeholder="Ej: 550"
            value={formData.salary}
            onChange={onChange}
          />
          {errors.salary ? <small className="field-error">{errors.salary}</small> : null}
        </label>

        <label className="field">
          <span>Fecha de ingreso</span>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={onChange}
          />
          {errors.startDate ? <small className="field-error">{errors.startDate}</small> : null}
        </label>

        <label className="field">
          <span>Fecha de salida</span>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={onChange}
          />
          {errors.endDate ? <small className="field-error">{errors.endDate}</small> : null}
        </label>

        {errors.form ? <p className="form-error">{errors.form}</p> : null}

        <button className="primary-button" type="submit">
          Calcular
        </button>
      </form>

      <section className="promo-card">
        <div className="promo-ad">
          <p className="promo-label">Espacio publicitario</p>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-6376754412949061"
            data-ad-slot="2820629327"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        <div className="promo-copy">
          <h3>Como calcular la liquidacion en Ecuador</h3>
          <p>
            La liquidacion laboral en Ecuador incluye valores proporcionales como
            el decimo tercero, vacaciones no gozadas y el tiempo trabajado.
          </p>

          <h3>Que incluye la liquidacion</h3>
          <ul className="promo-list">
            <li>Decimo tercero proporcional</li>
            <li>Vacaciones no utilizadas</li>
            <li>Tiempo trabajado</li>
          </ul>

          <p>
            Usa esta calculadora para obtener una estimacion rapida y clara antes
            de revisar los valores finales.
          </p>
        </div>
      </section>
    </div>
  );
}

export default CalculatorForm;
