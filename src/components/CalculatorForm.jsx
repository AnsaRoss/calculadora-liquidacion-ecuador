import AdSlot from './AdSlot';

function CalculatorForm({ formData, errors, onChange, onSubmit }) {
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
            aria-describedby={errors.salary ? 'salary-error' : undefined}
          />
          {errors.salary ? <small id="salary-error" className="field-error">{errors.salary}</small> : null}
        </label>

        <label className="field">
          <span>Fecha de ingreso</span>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={onChange}
            aria-describedby={errors.startDate ? 'startDate-error' : undefined}
          />
          {errors.startDate ? <small id="startDate-error" className="field-error">{errors.startDate}</small> : null}
        </label>

        <label className="field">
          <span>Fecha de salida</span>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={onChange}
            aria-describedby={errors.endDate ? 'endDate-error' : undefined}
          />
          {errors.endDate ? <small id="endDate-error" className="field-error">{errors.endDate}</small> : null}
        </label>

        {errors.form ? <p className="form-error">{errors.form}</p> : null}

        <button className="primary-button" type="submit">
          Calcular
        </button>
      </form>

      <section className="promo-card">
        <div className="promo-ad">
          <p className="promo-label">Publicidad</p>
          <AdSlot slot="2820629327" />
        </div>

        <div className="promo-copy">
          <h3>Antes de aceptar tu finiquito</h3>
          <p>
            Revisa los valores proporcionales de decimo tercero y vacaciones para
            tener una referencia clara antes de firmar cualquier documento.
          </p>

          <h3>Consejos rapidos</h3>
          <ul className="promo-list">
            <li>Verifica bien la fecha real de salida.</li>
            <li>Confirma si tu sueldo incluye componentes variables.</li>
            <li>Guarda una captura del resultado para compararlo despues.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CalculatorForm;
