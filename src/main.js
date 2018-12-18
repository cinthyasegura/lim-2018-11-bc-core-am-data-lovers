
<<<<<<< HEAD
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
// const arrCountries = Object.keys(WORLDBANK);
// let countriesList = '';
// arrCountries.forEach(countries => {
//   const list = `<li> ${countries} </li>`;
//   countriesList += list;
// });
// document.getElementById('countries-list').innerHTML = countriesList;

let populationList = '';
const population = WORLDBANK.PER.indicators
  .filter(pop => pop.indicatorCode.slice(0, 6) === 'SP.POP')
  .map(pop => pop.indicatorName)
  .forEach(pop => {
    const popList = `<li><a href=#> ${pop} </a></li>`;
    populationList += popList;
  });
document.getElementById('population-list').innerHTML = populationList;
//document.getElementById('demo').innerHTML = population;

let educationList = '';
const education = WORLDBANK.PER.indicators
  .filter(edu => edu.indicatorCode.slice(0, 2) === 'SE')
  .map(edu => edu.indicatorName)
  .forEach(edu => {
    const eduList = `<li><a href=#> ${edu} </a></li>`;
    educationList += eduList;
  });
document.getElementById('education-list').innerHTML = educationList;

let laboralList = '';
const laboral = WORLDBANK.PER.indicators
  .filter(lab => lab.indicatorCode.slice(0, 6) === 'SL.TLF')
  .map(lab => lab.indicatorName)
  .forEach(lab => {
    const labList = `<li><a href=#> ${lab} <a/></li>`;
    laboralList += labList;
  });
document.getElementById('laboral-list').innerHTML = laboralList;

let unemploymentList = '';
const unemployment = WORLDBANK.PER.indicators
  .filter(unemployed => unemployed.indicatorCode.slice(0, 6) === 'SL.UEM')
  .map(unemployed => unemployed.indicatorName)
  .forEach(unemployed => {
    const unemployedList = `<li><a href=#> ${unemployed} </a></li>`;
    unemploymentList += unemployedList;
  });
document.getElementById('unemployment-list').innerHTML = unemploymentList;

let violenceList = '';
const violence = WORLDBANK.PER.indicators
  .filter(violent => violent.indicatorCode.slice(0, 6) === 'SG.VAW')
  .map(violent => violent.indicatorName)
  .forEach(violent => {
    const violentList = `<li><a href=#> ${violent} </a></li>`;
    violenceList += violentList;
  });
document.getElementById('violence-list').innerHTML = violenceList;


//select option
function showIndicators() {
  const selectIndicator = document.getElementById('select-indicator');
  const userInput = selectIndicator.options[selectIndicator.selectedIndex].value;
  if(userInput == 'population'){
    document.getElementById('population-list').style.visibility = 'visible';
  }
  else if(userInput == 'labor'){
    document.getElementById('laboral-list').style.visibility = 'visible';
    document.getElementById('population-list').style.visibility = 'hidden';
  }
  else if(userInput == 'education'){
    document.getElementById('education-list').style.visibility = 'visible';
    document.getElementById('laboral-list').style.visibility = 'hidden';
  }
  else if(userInput == 'unemployment'){
    document.getElementById('unemployment-list').style.visibility = 'visible';
    document.getElementById('education-list').style.visibility = 'hidden';
  }
  else if(userInput == 'violence'){
    document.getElementById('violence-list').style.visibility = 'visible';
    document.getElementById('unemployment-list').style.visibility = 'hidden';
  }
}
// selectIndicator.addEventListener('change', showIndicators => {
  
// });



// const resultado = Object.keys(WORLDBANK.PER.indicators[0].data)
// document.write(resultado)



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
=======

const populationIndicators = document.getElementById('population-indicators');
const laboralIndicators = document.getElementById('laboral-indicators');
const unemploymentIndicators = document.getElementById('unemployment-indicators');
const educationIndicators = document.getElementById('education-indicators');
const violenceIndicators = document.getElementById('violence-indicators');
const map = document.getElementsByClassName('map');


let populationList = '';
const population = WORLDBANK.PER.indicators
worldbank.populationFilter(population, 'SP.POP').forEach(pop => {
  const popList = `<div><a href=#> ${pop.indicatorName} </a></div>`;
    populationList += popList;
});
populationIndicators.innerHTML = populationList;

let laboralList = '';
const laboral = WORLDBANK.PER.indicators
worldbank.laboralFilter(laboral, 'SL.TLF').forEach(lab => {
  const labList = `<div><a href=#> ${lab.indicatorName} <a/></div>`;
    laboralList += labList;
});
laboralIndicators.innerHTML = laboralList;

let unemploymentList = '';
const unemployment = WORLDBANK.PER.indicators
worldbank.unemploymentFilter(unemployment, 'SL.UEM').forEach(unemployed => {
  const unemployedList = `<div><a href=#> ${unemployed.indicatorName} </a></div>`;
    unemploymentList += unemployedList;
});
unemploymentIndicators.innerHTML = unemploymentList;

let educationList = '';
const education = WORLDBANK.PER.indicators
worldbank.educationFilter(education, 'SE').forEach(edu => {
  const eduList = `<div><a href=#> ${edu.indicatorName} </a></div>`;
    educationList += eduList;
});   
educationIndicators.innerHTML = educationList;

let violenceList = '';
const violence = WORLDBANK.PER.indicators
worldbank.violenceFilter(violence, 'SG.VAW').forEach(violent => {
  const violentList = `<div><a href=#> ${violent.indicatorName} </a></div>`;
    violenceList += violentList;
});
violenceIndicators.innerHTML = violenceList;

document.getElementById('btn-map').addEventListener('click', () =>{
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('first-page').style.display = 'block'; 
  document.getElementById('indicators-icons').style.visibility = 'hidden';
});

document.getElementById('peru-map').addEventListener('click', () =>{
    // document.getElementById('first-page').style.display = 'none';
    // document.getElementById('second-page').style.display = 'block';
  document.getElementById('indicators-icons').style.visibility = 'visible'; 
});
document.getElementById('population-option').addEventListener('click', () => {
  map[0].style.display = 'none';
  populationIndicators.style.display = 'block';
  laboralIndicators.style.display = 'none';
  unemploymentIndicators.style.display = 'none';
  educationIndicators.style.display = 'none';
  violenceIndicators.style.display = 'none';
});
document.getElementById('laboral-option').addEventListener('click', () => {
  populationIndicators.style.display = 'none';
  laboralIndicators.style.display = 'block';
  unemploymentIndicators.style.display = 'none';
  educationIndicators.style.display = 'none';
  violenceIndicators.style.display = 'none';
});
document.getElementById('unemployment-option').addEventListener('click', () => {
  populationIndicators.style.display = 'none';
  laboralIndicators.style.display = 'none';
  unemploymentIndicators.style.display = 'block';
  educationIndicators.style.display = 'none';
  violenceIndicators.style.display = 'none';
});
document.getElementById('education-option').addEventListener('click', () => {
  populationIndicators.style.display = 'none';
  laboralIndicators.style.display = 'none';
  unemploymentIndicators.style.display = 'none';
  educationIndicators.style.display = 'block';
  violenceIndicators.style.display = 'none';
});
document.getElementById('violence-option').addEventListener('click', () => {
  populationIndicators.style.display = 'none';
  laboralIndicators.style.display = 'none';
  unemploymentIndicators.style.display = 'none';
  educationIndicators.style.display = 'none';
  violenceIndicators.style.display = 'block';
});


//select option
// function showIndicators() {
//   const selectIndicator = document.getElementById('select-indicator');
//   const userInput = selectIndicator.options[selectIndicator.selectedIndex].value;
//   if(userInput == 'population'){
//     document.getElementById('population-list').style.display = 'block';
//   }
//   else if(userInput == 'labor'){
//     document.getElementById('laboral-list').style.display = 'block';
//     document.getElementById('population-list').style.display = 'none';
//   }
//   else if(userInput == 'education'){
//     document.getElementById('education-list').style.display = 'block';
//     document.getElementById('laboral-list').style.display = 'none';
//   }
//   else if(userInput == 'unemployment'){
//     document.getElementById('unemployment-list').style.display = 'block';
//     document.getElementById('education-list').style.display = 'none';
//   }
//   else if(userInput == 'violence'){
//     document.getElementById('violence-list').style.display = 'block';
//     document.getElementById('unemployment-list').style.display = 'none';
//   }
// }
// selectIndicator.addEventListener('change', showIndicators => {

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


const datos = Object.entries(WORLDBANK.PER.indicators[0].data)
console.log(datos)
>>>>>>> 57c65e1b97e22c0db9eb0931d09414b639876611
