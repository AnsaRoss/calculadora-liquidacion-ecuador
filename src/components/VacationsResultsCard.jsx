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

function VacationsResultsCard({ result }) {
  return (
    <section className="results-card" aria-live="polite">
      <h2>Resultado de vacaciones</h2>

      {!result ? (
        <p className="results-empty">
          Completa los datos para ver el valor proporcional de vacaciones.
        </p>
      ) : (
        <div className="results-grid">
          <article>
            <span>Meses trabajados</span>
            <strong>{formatNumber(result.months)}</strong>
          </article>
          <article className="results-total">
            <span>Vacaciones estimadas</span>
            <strong>{formatCurrency(result.vacations)}</strong>
          </article>
        </div>
      )}
    </section>
  );
}

export default VacationsResultsCard;
