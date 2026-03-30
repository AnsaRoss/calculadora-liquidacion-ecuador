const MS_PER_DAY = 1000 * 60 * 60 * 24;

function parseDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function calculateSettlement({ salary, startDate, endDate }) {
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

  const diffInDays = (end.getTime() - start.getTime()) / MS_PER_DAY;
  const months = diffInDays / 30;
  const numericSalary = Number(salary);
  const decimo = (numericSalary / 12) * months;
  const vacations = (numericSalary / 24) * months;
  const total = decimo + vacations;

  return {
    months,
    decimo,
    vacations,
    total,
  };
}
