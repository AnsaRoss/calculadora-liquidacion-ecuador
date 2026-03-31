const MS_PER_DAY = 1000 * 60 * 60 * 24;

function parseDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function validateBaseFields({ salary, startDate, endDate }) {
  const errors = {};

  if (!salary) {
    errors.salary = 'Ingresa el sueldo mensual.';
  } else if (Number(salary) <= 0) {
    errors.salary = 'El sueldo debe ser mayor a 0.';
  }

  if (!startDate) {
    errors.startDate = 'Selecciona la fecha de ingreso.';
  }

  if (!endDate) {
    errors.endDate = 'Selecciona la fecha de salida.';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  if (!start || !end) {
    return {
      errors: {
        form: 'Verifica que las fechas sean validas.',
      },
    };
  }

  if (end < start) {
    return {
      errors: {
        endDate: 'La fecha de salida no puede ser anterior al ingreso.',
      },
    };
  }

  return { start, end, salary: Number(salary) };
}

export function calculateSettlement({ salary, startDate, endDate }) {
  const validation = validateBaseFields({ salary, startDate, endDate });

  if (validation.errors) {
    return { errors: validation.errors };
  }

  const diffInDays = (validation.end.getTime() - validation.start.getTime()) / MS_PER_DAY;
  const months = diffInDays / 30;
  const decimo = (validation.salary / 12) * months;
  const vacations = (validation.salary / 24) * months;
  const total = decimo + vacations;

  return {
    months,
    decimo,
    vacations,
    total,
  };
}

export function calculateDecimoTercero({ salary, startDate, endDate }) {
  const validation = validateBaseFields({ salary, startDate, endDate });

  if (validation.errors) {
    return { errors: validation.errors };
  }

  const diffInDays = (validation.end.getTime() - validation.start.getTime()) / MS_PER_DAY;
  const months = diffInDays / 30;
  const decimo = (validation.salary / 12) * months;

  return {
    months,
    decimo,
  };
}
