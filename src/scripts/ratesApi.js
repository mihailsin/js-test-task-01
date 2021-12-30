const axios = require('axios').default;

axios.defaults.baseURL = `https://api.frankfurter.app/latest`;

export const ratesApi = {
  async getRates() {
    const response = await axios.get();
    const data = response.data.rates;
    return data;
  },
};
