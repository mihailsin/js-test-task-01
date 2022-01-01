import { ratesApi } from './ratesApi';
import { refs } from './refs';

export const eraseValues = () => {
  refs.currenciesList.innerHTML = '';
};

export const rates = async data => {
  const response = await data;
  const entries = Object.entries(response);

  return entries
    .map(([currency, value]) => {
      return `
      <li class="currency__item">${currency} : ${value}</li>
        `;
    })
    .join('');
};

export const renderRates = markup => {
  refs.currenciesList.insertAdjacentHTML('beforeend', markup);
};
