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
      {/* ANUNCIO */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", marginTop: "20px" }}
        data-ad-client="ca-pub-6376754412949061"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </form>
  );
}

export default CalculatorForm;
