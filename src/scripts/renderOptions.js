import { ratesApi } from './ratesApi';
import { refs } from './refs';

const options = async data => {
  const objects = await data;
  const keys = Object.keys(objects);
  return keys
    .map(key => {
      return `
       <option value="">${key}</option>
        `;
    })
    .join('');
};

const renderOptions = markup => {
  refs.selectField.insertAdjacentHTML('beforeend', markup);
};

options(ratesApi.getBaseCurrency())
  .then(markup => renderOptions(markup))
  .catch(error => console.log(error.message));
