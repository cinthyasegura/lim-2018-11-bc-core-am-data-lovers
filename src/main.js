const mexicoMap = document.getElementById('mexico-map');
const peruMap = document.getElementById('peru-map');

let populationList = '';
const population = WORLDBANK.PER.indicators
  .filter(pop => pop.indicatorCode.slice(0, 6) === 'SP.POP')
  .map(pop => pop.indicatorName)
  .forEach(pop => {
    const popList = `<li><a href=#> ${pop} </a></li>`;
    populationList += popList;
  });
document.getElementById('population-list').innerHTML = populationList;

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

peruMap.addEventListener('click', () =>{
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('lists').style.display = 'block'; 
});