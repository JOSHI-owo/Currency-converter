import axios from "axios";
//API's
// apikey=XzgAMHHsmazXG1H6hpEVpVh050gcFcrY;
//1st Function
const getExchange = (fromCurrency, toCurrency) => {
  axios
    .get(
      "https://api.apilayer.com/fixer/latest?apikey=XzgAMHHsmazXG1H6hpEVpVh050gcFcrY"
    )
    .then((response) => {
      const rate = response.data.rates;
      console.log(rate);
    });
};
