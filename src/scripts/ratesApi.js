const axios = require('axios').default;

axios.defaults.baseURL = `https://api.frankfurter.app/latest?`;

export const ratesApi = {
  baseCurrency: '',
  get currency() {
    return this.baseCurrency;
  },
  set currency(currency) {
    this.baseCurrency = currency;
  },

  sellCurrency: '',
  get currencyForSale() {
    return this.sellCurrency;
  },
  set currencyForSale(currency) {
    this.sellCurrency = currency;
  },

  buyCurrency: '',

  get currencyToBuy() {
    return this.buyCurrency;
  },
  set currencyToBuy(currency) {
    this.buyCurrency = currency;
  },

  amount: '',

  get amountValue() {
    return this.amount;
  },
  set amountValue(value) {
    this.amount = value;
  },

  async getRates() {
    const response = await axios.get();
    const data = response.data.rates;
    return data;
  },

  async getRatesByQuery() {
    const request = {
      params: {
        from: `${this.baseCurrency}`,
      },
    };
    const response = await axios.request(request);
    const data = response.data.rates;
    return data;
  },

  async calculateCurrencyValue() {
    const request = {
      params: {
        amount: `${this.amount}`,
        from: `${this.sellCurrency}`,
        to: `${this.buyCurrency}`,
      },
    };
    const response = await axios.request(request);
    const data = response.data.rates;
    return data;
  },

  get exchange() {
    return this.exchangeCurrency;
  },
  set exchange(currency) {
    this.exchangeCurrency = currency;
  },
};
