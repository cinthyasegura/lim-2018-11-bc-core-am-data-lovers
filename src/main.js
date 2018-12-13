// const indicatorsName = WORLDBANK.PER.indicators.map(indicator => indicator.indicatorName);
//   document.getElementById("demo").innerHTML = indicatorsName.join()

// copy of WORLDBANK object 
// const worldbankCopy = Object.entries(WORLDBANK);
// const copy = (arr) => {
//   const newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     newArr.push(Object.assign({}, arr[i]))
//   } 
//   return newArr;
//  }
// console.log(copy(worldbankCopy))

// const result = Object.values(WORLDBANK.PER);
// console.log(result)

//listado de paises
const arrCountries = Object.keys(WORLDBANK);
let countriesList = '';
arrCountries.forEach(countries => {
  const list = `<li> ${countries} </li>`;
  countriesList += list;
});

const ulCountriesList = document.getElementById('countries-list');
ulCountriesList.innerHTML = countriesList;

const keysOfPer = Object.keys(WORLDBANK.PER);
console.log(keysOfPer)


// const resultado = Object.keys(WORLDBANK.PER.indicators.data)
//console.log(resultado)



// 

// var result = Object.keys(WORLDBANK.PER.indicators.data).map(key => {
//     return Number(key), WORLDBANK.PER.indicators.data[key];
//   });
  
//   console.log(result);

// var obj = {
//     "1":5,
//     "2":7,
//     "3":0,
//     "4":0,
//     "5":0,
//     "6":0,
//     "7":0,
//     "8":0,
//     "9":0,
//     "10":0,
//     "11":0,
//     "12":0
// }
// var result = Object.keys(obj).map(key => {
//   return Number(key), obj[key];
// });

// console.log(result);