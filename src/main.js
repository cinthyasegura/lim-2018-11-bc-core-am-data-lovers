// console.log(Object.keys(WORLDBANK));

const objData = WORLDBANK.PER
const arrWORLBANK = Object.keys(objData);
console.log(arrWORLBANK);

let newArrIndicador = [];

for(let i=0; i<arrWORLBANK.length; i++){
    newArrIndicador.push(objData[arrWORLBANK[i]].indicators.data)
}

console.log(newArrIndicador);

