const result = Object.entries(WORLDBANK.PER.indicators[0].data);

//console.log(result[0]);

//console.table(WORLDBANK.PER.indicators[0].data);

var años = result.map(function (año) {
  return año.1960;
});

console.log(años);

// console.log(Object.keys(WORLDBANK));
/*
const objData = WORLDBANK.PER
const arrWORLBANK = Object.keys(objData);
console.log(arrWORLBANK);

let newArrIndicador = [];

for(let i=0; i<arrWORLBANK.length; i++){
    newArrIndicador.push(objData[arrWORLBANK[i]].indicators.data)
}

console.log(newArrIndicador);
*/
