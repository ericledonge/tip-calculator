import './App.css';

import React, { useState } from 'react';

import { displayCurrency } from './helpers/displayCurrency';
import { calculateTip, calculateTotalPerPerson } from './usecases/calculateTip';

const App: React.FC = () => {
  const [billAmount, setBillAmount] = useState('0');
  const [numberOfPerson, setNumberOfPerson] = useState('1');
  const [tipPercentage, setTipPercentage] = useState(15);

  const tipAmount = calculateTip(parseFloat(billAmount), tipPercentage);
  const totalPerPerson = calculateTotalPerPerson(
    parseFloat(billAmount),
    tipAmount,
    numberOfPerson,
  );

  const handleTipRateClick = (tipPercentage: number) => {
    setTipPercentage(tipPercentage);
  };

  return (
    <div className="wrapper">
      <div className="tip-amount">
        <div className="label">Tip Amount</div>
        <div className="dollars">
          <span id="tip-amount">{displayCurrency(tipAmount)}</span>
        </div>
      </div>

      <div className="total-per-person">
        <div className="label">Total Per Person</div>
        <div className="dollars">
          <span id="total-per-person">{displayCurrency(totalPerPerson)}</span>
        </div>
      </div>

      <div className="input-fields">
        <div className="bill-amount">
          <div className="field">
            <input
              type="text"
              id="bill-amount"
              name="bill-amount"
              value={billAmount}
              onFocus={() => setBillAmount('')}
              onChange={(e) => setBillAmount(e.target.value)}
            />
          </div>
          <div className="label">Bill Amount</div>
        </div>

        <div className="number-of-people">
          <div className="field">
            <input
              type="text"
              id="number-of-people"
              name="number-of-people"
              value={numberOfPerson}
              onFocus={() => setNumberOfPerson('')}
              onChange={(e) => setNumberOfPerson(e.target.value)}
            />
          </div>
          <div className="label">Number of People</div>
        </div>
      </div>

      <div className="tip-percentages">
        <div>
          <input
            type="radio"
            name="tip"
            value="5%"
            id="five-percent"
            checked={tipPercentage === 5}
            onClick={() => handleTipRateClick(5)}
          />
          <label htmlFor="five-percent">5%</label>
        </div>
        <div>
          <input
            type="radio"
            name="tip"
            value="10%"
            id="ten-percent"
            checked={tipPercentage === 10}
            onClick={() => handleTipRateClick(10)}
          />
          <label htmlFor="ten-percent">10%</label>
        </div>
        <div>
          <input
            type="radio"
            name="tip"
            value="15%"
            id="fifteen-percent"
            checked={tipPercentage === 15}
            onClick={() => handleTipRateClick(15)}
          />
          <label htmlFor="fifteen-percent">15%</label>
        </div>
        <div>
          <input
            type="radio"
            name="tip"
            value="20%"
            id="twenty-percent"
            checked={tipPercentage === 20}
            onClick={() => handleTipRateClick(20)}
          />
          <label htmlFor="twenty-percent">20%</label>
        </div>
      </div>
    </div>
  );
};

export default App;
