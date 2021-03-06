import { ratesApi } from './ratesApi';
import { refs } from './refs';

export const options = async data => {
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

export const renderOptions = (markup, ref) => {
  ref.insertAdjacentHTML('beforeend', markup);
};

options(ratesApi.getRates())
  .then(markup => {
    renderOptions(markup, refs.selectField);
    renderOptions(markup, refs.fromField);
    renderOptions(markup, refs.intoField);
  })
  .catch(error => console.log(error.message));
