import { refs } from './refs';

refs.ratesRef.addEventListener('click', e => {
  e.preventDefault();
  refs.currenciesRates.style.display = 'block';
  refs.currenciesCalculator.style.display = 'none';
  refs.ratesRef.classList.add('is-active');
  refs.calculatorRef.classList.remove('is-active');
});

refs.calculatorRef.addEventListener('click', e => {
  e.preventDefault();
  refs.currenciesCalculator.style.display = 'block';
  refs.currenciesRates.style.display = 'none';
  refs.calculatorRef.classList.add('is-active');
  refs.ratesRef.classList.remove('is-active');
});
