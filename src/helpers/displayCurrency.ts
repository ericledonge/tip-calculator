export const displayCurrency = (amount: number): string =>
  new Intl.NumberFormat('ca', { style: 'currency', currency: 'CAD' }).format(amount);
