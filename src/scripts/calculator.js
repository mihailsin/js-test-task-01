import { ratesApi } from './ratesApi';
import { refs } from './refs';
import { options, renderOptions } from './renderOptions';

const calculate = e => {
  e.preventDefault();
  ratesApi.amount = refs.amountField.value;
  ratesApi.sellCurrency = refs.fromField.value;
  ratesApi.buyCurrency = refs.intoField.value;
  const resultText = `${ratesApi.amount} ${ratesApi.sellCurrency} = refs.resultField.textContent = data`;

  ratesApi.calculateCurrencyValue().then(data => {
    refs.resultField.textContent = `${ratesApi.amount} ${ratesApi.sellCurrency} = ${Object.values(
      data,
    )} ${Object.keys(data)}`;
  });
};

refs.currenciesCalculator.addEventListener('submit', calculate);
