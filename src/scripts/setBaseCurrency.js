import { ratesApi } from './ratesApi';
import { refs } from './refs';
import { rates, renderRates, eraseValues } from './renderValues';
const onChange = e => {
  eraseValues();
  ratesApi.currency = refs.selectField.value;
  rates(ratesApi.getRatesByQuery())
    .then(markup => renderRates(markup))
    .catch(error => console.log(error.message));
};

refs.currencyForm.addEventListener('change', onChange);
