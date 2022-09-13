export function formatCurrency(value) {
  if (value / 10 ** 12 >= 1) {
    return `${(value / 10 ** 12).toFixed(2)}t`;
  }

  if (value / 10 ** 9 >= 1) {
    return `${(value / 10 ** 9).toFixed(2)}b`;
  }

  if (value / 10 ** 6 >= 1) {
    return `${(value / 10 ** 6).toFixed(2)}m`;
  }

  if (value / 10 ** 5 >= 1) {
    return `${(value / 10 ** 5).toFixed(2)}k`;
  }

  return value.toFixed(2);
}
