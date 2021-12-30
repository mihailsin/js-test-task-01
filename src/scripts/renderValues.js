import { ratesApi } from './ratesApi';
import { refs } from './refs';

const rates = async data => {
  const response = await data;
  const entries = Object.entries(response);

  return entries
    .map(([currency, value]) => {
      return `
      <li class="values__item">${currency} : ${value}</li>
        `;
    })
    .join('');
};

const renderRates = markup => {
  refs.currenciesList.insertAdjacentHTML('beforeend', markup);
};

rates(ratesApi.getRates())
  .then(markup => renderRates(markup))
  .catch(error => console.log(error.message));
