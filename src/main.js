const populationIndicators = document.getElementById('population-indicators');
const laboralIndicators = document.getElementById('laboral-indicators');
const unemploymentIndicators = document.getElementById('unemployment-indicators');
const educationIndicators = document.getElementById('education-indicators');
const violenceIndicators = document.getElementById('violence-indicators');
const map = document.getElementsByClassName('map');

// filtrado de indicadores por codigo
let populationList = '';
const population = WORLDBANK.PER.indicators;
worldbank.populationFilter(population, 'SP.POP').forEach(pop => {
  const popList = `<div><a href=#> ${pop.indicatorName} </a></div>`;
  populationList += popList;
});
populationIndicators.innerHTML = populationList;
let laboralList = '';
const laboral = WORLDBANK.PER.indicators;
worldbank.laboralFilter(laboral, 'SL.TLF').forEach(lab => {
  const labList = `<div><a href=#> ${lab.indicatorName} <a/></div>`;
  laboralList += labList;
});
laboralIndicators.innerHTML = laboralList;
let unemploymentList = '';
const unemployment = WORLDBANK.PER.indicators;
worldbank.unemploymentFilter(unemployment, 'SL.UEM').forEach(unemployed => {
  const unemployedList = `<div><a href=#> ${unemployed.indicatorName} </a></div>`;
  unemploymentList += unemployedList;
});
unemploymentIndicators.innerHTML = unemploymentList;
let educationList = '';
const education = WORLDBANK.PER.indicators;
worldbank.educationFilter(education, 'SE').forEach(edu => {
  const eduList = `<div><a href=#> ${edu.indicatorName} </a></div>`;
  educationList += eduList;
});   
educationIndicators.innerHTML = educationList;
let violenceList = '';
const violence = WORLDBANK.PER.indicators;
worldbank.violenceFilter(violence, 'SG.VAW').forEach(violent => {
  const violentList = `<div><a href=#> ${violent.indicatorName} </a></div>`;
  violenceList += violentList;
});
violenceIndicators.innerHTML = violenceList;
  
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

// const objData = WORLDBANK.PER
// const arrWORLBANK = Object.keys(objData);
// console.log(arrWORLBANK);

// const datos = Object.entries(WORLDBANK.PER.indicators[0].data)
// console.log(datos)

