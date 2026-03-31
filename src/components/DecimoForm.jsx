import AdSlot from './AdSlot';

function DecimoForm({ formData, errors, onChange, onSubmit }) {
  return (
    <div className="form-column">
      <form className="calculator-form" onSubmit={onSubmit} noValidate>
        <div className="form-header">
          <h2>Calcular decimo tercero</h2>
          <p>Ingresa sueldo y fechas para estimar el valor proporcional acumulado.</p>
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
          Calcular decimo tercero
        </button>
      </form>

      <section className="promo-card">
        <div className="promo-ad">
          <p className="promo-label">Publicidad</p>
          <AdSlot slot="2820629327" />
        </div>

        <div className="promo-copy">
          <h3>Para que sirve esta calculadora</h3>
          <p>
            Te ayuda a estimar rapidamente cuanto podrias recibir por decimo tercero
            proporcional segun tu sueldo y el tiempo trabajado.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DecimoForm;
