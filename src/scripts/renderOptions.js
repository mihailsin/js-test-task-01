import { ratesApi } from './ratesApi';
import { refs } from './refs';

const options = async data => {
  const response = await data;
  const keys = Object.keys(response);
  return keys
    .map(key => {
      return `
       <option value="${key}" class="currency__option">${key}</option>
        `;
    })
    .join('');
};

const renderOptions = markup => {
  refs.selectField.insertAdjacentHTML('beforeend', markup);
};

options(ratesApi.getRates())
  .then(markup => renderOptions(markup))
  .catch(error => console.log(error.message));
