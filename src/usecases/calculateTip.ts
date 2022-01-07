export const calculateTip = (
  billAmount: number | string,
  tipPercentage: number | string,
): number => {
  const bill = typeof billAmount === 'string' ? parseFloat(billAmount) : billAmount;
  const tip =
    typeof tipPercentage === 'string' ? parseFloat(tipPercentage) : tipPercentage;

  const tipAmount = (bill * tip) / 100;

  return Number.isNaN(tipAmount) ? 0 : tipAmount;
};

export const calculateTotalPerPerson = (
  billAmount: number | string,
  tipAmount: number | string,
  numberOfPerson: number | string,
): number => {
  const bill = typeof billAmount === 'string' ? parseFloat(billAmount) : billAmount;
  const tip = typeof tipAmount === 'string' ? parseFloat(tipAmount) : tipAmount;
  const persons =
    typeof numberOfPerson === 'string' ? parseFloat(numberOfPerson) : numberOfPerson;

  const totalPerPerson = (bill + tip) / persons;

  return Number.isNaN(totalPerPerson) ? 0 : totalPerPerson;
};
