const axios = require("axios");
//API's
// https://api.apilayer.com/fixer/latest?apikey=XzgAMHHsmazXG1H6hpEVpVh050gcFcrY
// apikey=XzgAMHHsmazXG1H6hpEVpVh050gcFcrY;

//1st Function

// use of async await
const getExchange = async (fromCurrency, toCurrency) => {
  const response = await axios.get(
    "https://api.apilayer.com/fixer/latest?apikey=XzgAMHHsmazXG1H6hpEVpVh050gcFcrY"
  );
  const rate = response.data.rates;
  const euro = 1 / rate[fromCurrency];
  const exchangeRate = euro * rate[toCurrency];
  return exchangeRate;
};

// 2nd function
const getCountries = async (toCurrency) => {
  const response = await axios.get(
    `http://api.countrylayer.com/v2/currency/${toCurrency}?access_key=814335b63cc9e255e10686441b33af96`
    // https://api.countrylayer.com/v2/all?access_key=3eaf904fe1de51cbd1c96ee9b6522780
  );

  return response.data.map((country) => country.name);
};

// 3rd function
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  const exchangeRate = await getExchange(fromCurrency, toCurrency);
  const countries = await getCountries(toCurrency);
  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spent these in the following countries: ${countries}`;
};
// Call convert  currency to
convertCurrency("USD", "EUR", 30).then((message) => {
  console.log(message);
});
// getExchange("USD", "EUR");
// getCountries("USD");
