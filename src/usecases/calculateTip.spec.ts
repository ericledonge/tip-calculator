import { calculateTip, calculateTotalPerPerson } from './calculateTip';

const BILL_AMOUNT = 100;
const TIP_PERCENTAGE = 5;
const TIP_AMOUNT = (BILL_AMOUNT * TIP_PERCENTAGE) / 100;
const NUMBER_OF_PERSON = 2;
const AMOUNT_PER_PERSON = (BILL_AMOUNT + TIP_AMOUNT) / NUMBER_OF_PERSON;

describe('calculateTip', () => {
  it('should calculate the right tip amount, depending the bill amount and the tip percentage selected', () => {
    expect(calculateTip(BILL_AMOUNT, TIP_PERCENTAGE)).toEqual(TIP_AMOUNT);
  });

  describe('At start', () => {
    it('should calculate the right tip amount, depending the bill amount and the tip percentage selected', () => {
      expect(calculateTip('', 15)).toEqual(0);
    });
  });
});

describe('calculateTotalPerPerson', () => {
  it('should calculate the right total per person, depending the bill amount, the tip amount and the number of person', () => {
    expect(calculateTotalPerPerson(BILL_AMOUNT, TIP_AMOUNT, NUMBER_OF_PERSON)).toEqual(
      AMOUNT_PER_PERSON,
    );
  });

  describe('At start', () => {
    it('should calculate the right total per person, depending the bill amount, the tip amount and the number of person', () => {
      expect(calculateTotalPerPerson(0, 0, 0)).toEqual(0);
    });
  });
});
