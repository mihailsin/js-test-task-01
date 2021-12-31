const axios = require('axios').default;

axios.defaults.baseURL = `https://api.frankfurter.app/latest`;

export const ratesApi = {
  baseCurrency: '',

  async getRates() {
    const response = await axios.get();
    const data = response.data.rates;
    return data;
  },

  async getRatesByQuery() {
    const response = await axios.get(
      `https://api.frankfurter.app/latest?from=${this.baseCurrency}`,
    );
    const data = response.data.rates;
    return data;
  },

  get currency() {
    return this.baseCurrency;
  },
  set currency(currency) {
    this.baseCurrency = currency;
  },
};
