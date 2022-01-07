import { displayCurrency } from './displayCurrency';

describe('displayCurrency', () => {
  it('should display $15.30', () => {
    expect(displayCurrency(15.3)).toEqual('15,30 CAD');
  });
});
