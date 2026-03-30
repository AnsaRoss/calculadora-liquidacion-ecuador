function CalculatorForm({ formData, errors, onChange, onSubmit }) {
  return (
    <form className="calculator-form" onSubmit={onSubmit} noValidate>
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
  );
}

export default CalculatorForm;
