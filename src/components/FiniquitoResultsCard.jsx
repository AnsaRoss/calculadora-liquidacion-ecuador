function formatCurrency(value) {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value) {
  return Number(value).toFixed(2);
}

function FiniquitoResultsCard({ result }) {
  return (
    <section className="results-card" aria-live="polite">
      <h2>Resultado del finiquito estimado</h2>

      {!result ? (
        <p className="results-empty">
          Completa los datos para ver una estimacion basica del finiquito.
        </p>
      ) : (
        <div className="results-grid">
          <article>
            <span>Meses trabajados</span>
            <strong>{formatNumber(result.months)}</strong>
          </article>
          <article>
            <span>Decimo tercero</span>
            <strong>{formatCurrency(result.decimo)}</strong>
          </article>
          <article>
            <span>Vacaciones</span>
            <strong>{formatCurrency(result.vacations)}</strong>
          </article>
          <article className="results-total">
            <span>Total estimado</span>
            <strong>{formatCurrency(result.total)}</strong>
          </article>
        </div>
      )}
    </section>
  );
}

export default FiniquitoResultsCard;
