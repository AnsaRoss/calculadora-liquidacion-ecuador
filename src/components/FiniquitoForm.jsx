import AdSlot from './AdSlot';

function FiniquitoForm({ formData, errors, onChange, onSubmit }) {
  return (
    <div className="form-column">
      <form className="calculator-form" onSubmit={onSubmit} noValidate>
        <div className="form-header">
          <h2>Calcular finiquito basico</h2>
          <p>Estima decimo tercero, vacaciones y total usando una formula simple.</p>
        </div>

        <label className="field">
          <span>Sueldo mensual</span>
          <input type="number" name="salary" min="0" step="0.01" placeholder="Ej: 550" value={formData.salary} onChange={onChange} />
          {errors.salary ? <small className="field-error">{errors.salary}</small> : null}
        </label>

        <label className="field">
          <span>Fecha de ingreso</span>
          <input type="date" name="startDate" value={formData.startDate} onChange={onChange} />
          {errors.startDate ? <small className="field-error">{errors.startDate}</small> : null}
        </label>

        <label className="field">
          <span>Fecha de salida</span>
          <input type="date" name="endDate" value={formData.endDate} onChange={onChange} />
          {errors.endDate ? <small className="field-error">{errors.endDate}</small> : null}
        </label>

        {errors.form ? <p className="form-error">{errors.form}</p> : null}

        <button className="primary-button" type="submit">
          Calcular finiquito
        </button>
      </form>

      <section className="promo-card">
        <div className="promo-ad">
          <p className="promo-label">Publicidad</p>
          <AdSlot slot="2820629327" />
        </div>

        <div className="promo-copy">
          <h3>Referencia rapida</h3>
          <p>
            Util para revisar un valor estimado de finiquito antes de comparar con
            lo entregado por la empresa.
          </p>
        </div>
      </section>
    </div>
  );
}

export default FiniquitoForm;
