import { refs } from './refs';

refs.ratesRef.addEventListener('click', e => {
  e.preventDefault();
  refs.currunciesRates.style.display = 'block';
});
