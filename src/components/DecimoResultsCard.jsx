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

function DecimoResultsCard({ result }) {
  return (
    <section className="results-card" aria-live="polite">
      <h2>Resultado del decimo tercero</h2>

      {!result ? (
        <p className="results-empty">
          Completa los datos para ver el valor proporcional del decimo tercero.
        </p>
      ) : (
        <div className="results-grid">
          <article>
            <span>Meses trabajados</span>
            <strong>{formatNumber(result.months)}</strong>
          </article>
          <article className="results-total">
            <span>Decimo tercero estimado</span>
            <strong>{formatCurrency(result.decimo)}</strong>
          </article>
        </div>
      )}
    </section>
  );
}

export default DecimoResultsCard;
