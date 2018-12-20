const populationIndicators = document.getElementById('population-indicators');
const laborIndicators = document.getElementById('labor-indicators');
const unemploymentIndicators = document.getElementById('unemployment-indicators');
const educationIndicators = document.getElementById('education-indicators');
const violenceIndicators = document.getElementById('violence-indicators');
const map = document.getElementsByClassName('map');
const indicatorsArray = WORLDBANK.PER.indicators;

// filtrado de indicadores por codigo
let populationString = '';
worldbank.populationFilter(indicatorsArray, 'SP.POP').forEach(pop => {
  const populationList = `<div><a href=#> ${pop.indicatorName} </a></div>`;
  populationString += populationList;
  populationIndicators.innerHTML = populationString;
});

let laborString = '';
worldbank.laborFilter(indicatorsArray, 'SL.TLF').forEach(lab => {
  const laborList = `<div><a href=#> ${lab.indicatorName} <a/></div>`;
  laborString += laborList;
  laborIndicators.innerHTML = laborString;
});

let unemploymentString = '';
worldbank.unemploymentFilter(indicatorsArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentList = `<div><a href=#> ${unemployed.indicatorName} </a></div>`;
  unemploymentString += unemploymentList;
  unemploymentIndicators.innerHTML = unemploymentString;
});

let educationString = '';
worldbank.educationFilter(indicatorsArray, 'SE').forEach(edu => {
  const educationList = `<div><a href=#> ${edu.indicatorName} </a></div>`;
  educationString += educationList;
  educationIndicators.innerHTML = educationString;
});   

let violenceString = '';
worldbank.violenceFilter(indicatorsArray, 'SG.VAW').forEach(violent => {
  const violenceList = `<div><a href=#> ${violent.indicatorName} </a></div> <button id="btn">Mostrar </button>`;
  violenceString += violenceList;
  violenceIndicators.innerHTML = violenceString;
});

// filtrado por sexo femenino y su respectiva data
let womenString = '';
// let datos = '';
worldbank.womenFilter(indicatorsArray, 'FE').forEach(woman => {
  const womenList = `<div id="indicadores"><a href=#> ${woman.indicatorName} </a></div>
  <table id="tabla">
    <tr> 
      <th>Año</th>
      <th>Data</th>
    </tr>
    <tr>
      <td id="keys">${Object.keys(woman.data)}</td>
      <td id"values">${Object.values(woman.data)}</td>
    </tr>
  </table>`;
  womenString += womenList;
  // let tRow = document.createElement('tr');
  // let tData1 = document.createElement('td');
  // let years = document.createTextNode(Object.keys(woman.data));
  // let tData2 = document.createElement('td');
  // let percentage = document.createTextNode(Object.values(woman.data));
  // tRow.appendChild(tData1);
  // tRow.appendChild(tData2);
  // tData1.appendChild(years);
  // tData2.appendChild(percentage);
  // document.getElementById('lista').appendChild(tRow);
  document.getElementById('demo').innerHTML = womenString;
});

let menString = '';
worldbank.menFilter(indicatorsArray, 'MA').forEach(man => {
  const menList = `<div><a href=#> ${man.indicatorName} </div></a>`;
  menString += menList;
  document.getElementById('demo-1').innerHTML = menString;
});

document.getElementById('btn-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('first-page').style.display = 'block'; 
  document.getElementById('indicators-icons').style.visibility = 'hidden';
});

document.getElementById('peru-map').addEventListener('click', () => {
  document.getElementById('indicators-icons').style.visibility = 'visible'; 
});
document.getElementById('mexico-map').addEventListener('click', () => {
  document.getElementById('indicators-icons').style.visibility = 'visible'; 
});
document.getElementById('brazil-map').addEventListener('click', () => {
  document.getElementById('indicators-icons').style.visibility = 'visible'; 
});
document.getElementById('chile-map').addEventListener('click', () => {
  document.getElementById('indicators-icons').style.visibility = 'visible'; 
});
document.getElementById('population-option').addEventListener('click', () => {
  map[0].style.display = 'none';
  populationIndicators.style.display = 'block';
  laborIndicators.style.display = 'none';
  unemploymentIndicators.style.display = 'none';
  educationIndicators.style.display = 'none';
  violenceIndicators.style.display = 'none';
});
document.getElementById('labor-option').addEventListener('click', () => {
  populationIndicators.style.display = 'none';
  laborIndicators.style.display = 'block';
  unemploymentIndicators.style.display = 'none';
  educationIndicators.style.display = 'none';
  violenceIndicators.style.display = 'none';
});
document.getElementById('unemployment-option').addEventListener('click', () => {
  populationIndicators.style.display = 'none';
  laborIndicators.style.display = 'none';
  unemploymentIndicators.style.display = 'block';
  educationIndicators.style.display = 'none';
  violenceIndicators.style.display = 'none';
});
document.getElementById('education-option').addEventListener('click', () => {
  populationIndicators.style.display = 'none';
  laborIndicators.style.display = 'none';
  unemploymentIndicators.style.display = 'none';
  educationIndicators.style.display = 'block';
  violenceIndicators.style.display = 'none';
});
document.getElementById('violence-option').addEventListener('click', () => {
  populationIndicators.style.display = 'none';
  laborIndicators.style.display = 'none';
  unemploymentIndicators.style.display = 'none';
  educationIndicators.style.display = 'none';
  violenceIndicators.style.display = 'block';
});

// const objData = WORLDBANK.PER
// const arrWORLBANK = Object.keys(objData);
// console.log(arrWORLBANK);

// const datos = Object.entries(WORLDBANK.PER.indicators[0].data)
// console.log(datos)

// document.getElementById('indicadores').addEventListener('click', () => {
//   document.getElementById('tabla').style.display = 'block'
// });