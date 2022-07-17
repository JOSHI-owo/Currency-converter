// 1st Function

// const getExchange = (fromCurrency, toCurrency) => {
//   axios
//     .get(
//       "https://api.apilayer.com/fixer/latest?apikey=XzgAMHHsmazXG1H6hpEVpVh050gcFcrY"
//     )
//     .then((response) => {
//       const rate = response.data.rates;
//       console.log(rate);

//       // Converting fromCurrency into Euro as Euro is the greatest int the list
//       const euro = 1 / rate[fromCurrency];
//       // Converting euro into toCurrency
//       const exchangeRate = euro * rate[toCurrency];
//       console.log(exchangeRate);
//     });

// };
