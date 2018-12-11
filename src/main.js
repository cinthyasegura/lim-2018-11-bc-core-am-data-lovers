const indicatorsName = WORLDBANK.PER.indicators.map(indicator => indicator.indicatorName);
  document.getElementById("demo").innerHTML = indicatorsName.join()


const result = Object.keys(WORLDBANK.PER);
console.log(result)

// const result = Object.values(WORLDBANK.PER);
// console.log(result)

const resultado = Object.keys(WORLDBANK.PER.indicators.data)
console.log(resultado)



// var arrProp = Object.keys(WORLDBANK)
// for(var i = 0; i < arrProp.length; i++){
//     WORLDBANK[arrProp[i]]
// }
//console.log(WORLDBANK)

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