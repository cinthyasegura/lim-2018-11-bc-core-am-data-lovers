const populationIndicators = document.getElementsByClassName('population-indicators');
const laborIndicators = document.getElementsByClassName('labor-indicators');
const unemploymentIndicators = document.getElementsByClassName('unemployment-indicators');
const educationIndicators = document.getElementsByClassName('education-indicators');
const violenceIndicators = document.getElementsByClassName('violence-indicators');
const indicatorsPeruArray = WORLDBANK.PER.indicators;
const indicatorsBrazilArray = WORLDBANK.BRA.indicators;
const indicatorsChileArray = WORLDBANK.CHL.indicators;
const indicatorsMexicoArray = WORLDBANK.MEX.indicators;

// filtrado de indicadores por codigo PARA PERU
const populationData = (people) => {
  return `
  <ul> ${people.map(pop => `
    <li>${pop.join(' - ')}</li>`).join('')}
  </ul>
  `;
};
let populationStringPer = '';
worldbank.populationFilter(indicatorsPeruArray, 'SP.POP').forEach(pop => {
  const populationListPer = `
    <div> ${pop.indicatorName}</div>
    <a href="#" onclick="showElement()">Ver |</a>
       <a href="#" onclick="hideElement(this)">Ocultar</a>
       <section id="listado">
          <h5>Año  -  Datos</h5>
          ${populationData(Object.entries(pop.data))}
       </section>
    `;
  populationStringPer += populationListPer;
  populationIndicators[0].innerHTML = populationStringPer;
});
// funcion para ocultar la data
// const hideElement = (hiddenElement) => {
//   hiddenElement.style.display = 'none';
//   document.getElementById('listado').style.display = 'none';
// };
const laborData = work => {
  return `
    <ul> ${work.map(lab => `
      <li>${lab.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
let laborStringPer = '';
worldbank.laborFilter(indicatorsPeruArray, 'SL.TLF').forEach(lab => {
  const laborListPer = `
  <div> ${lab.indicatorName} </div>
  <h5>Año  -  Datos</h5>
   ${laborData(Object.entries(lab.data))}
  `;
  laborStringPer += laborListPer;
  laborIndicators[0].innerHTML = laborStringPer;
});
const unemploymentData = unemploy => {
  return `
    <ul> ${unemploy.map(unemployed => `
      <li>${unemployed.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
let unemploymentStringPer = '';
worldbank.unemploymentFilter(indicatorsPeruArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentListPer = `
  <div> ${unemployed.indicatorName}</div>
  <h5>Año  -  Datos</h5>
   ${unemploymentData(Object.entries(unemployed.data))}
  `;
  unemploymentStringPer += unemploymentListPer;
  unemploymentIndicators[0].innerHTML = unemploymentStringPer;
});
const educationData = educa => {
  return `
    <ul> ${educa.map(edu => `
      <li>${edu.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
let educationStringPer = '';
worldbank.educationFilter(indicatorsPeruArray, 'SE').forEach(edu => {
  const educationListPer = `
  <div> ${edu.indicatorName}</div>
  <h5>Año  -  Datos</h5>
   ${educationData(Object.entries(edu.data))}
  `;
  educationStringPer += educationListPer;
  educationIndicators[0].innerHTML = educationStringPer;
}); 
const violenceData = assault => {
  return `
    <ul> ${assault.map(violent => `
      <li>${violent.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
let violenceStringPer = '';
worldbank.violenceFilter(indicatorsPeruArray, 'SG.VAW').forEach(violent => {
  const violenceListPer = `
  <div> ${violent.indicatorName} </div>
  <h5>Año  -  Datos</h5>
   ${violenceData(Object.entries(violent.data))}
  `;
  violenceStringPer += violenceListPer;
  violenceIndicators[0].innerHTML = violenceStringPer;
});

let populationStringBra = '';
worldbank.populationFilter(indicatorsBrazilArray, 'SP.POP').forEach(pop => {
  const populationListBra = `
    <div> ${pop.indicatorName}</div>
    <a href="#" onclick="showElement()">Ver |</a>
       <a href="#" onclick="hideElement(this)">Ocultar</a>
       <section id="listado">
          <h5>Año  -  Datos</h5>
          ${populationData(Object.entries(pop.data))}
       </section>
    `;
  populationStringBra += populationListBra;
  populationIndicators[1].innerHTML = populationStringBra;
});
let laborStringBra = '';
worldbank.laborFilter(indicatorsBrazilArray, 'SL.TLF').forEach(lab => {
  const laborListBra = `
  <div> ${lab.indicatorName} </div>
  <h5>Año  -  Datos</h5>
   ${laborData(Object.entries(lab.data))}
  `;
  laborStringBra += laborListBra;
  laborIndicators[1].innerHTML = laborStringBra;
});
let unemploymentStringBra = '';
worldbank.unemploymentFilter(indicatorsBrazilArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentListBra = `
  <div> ${unemployed.indicatorName}</div>
  <h5>Año  -  Datos</h5>
   ${unemploymentData(Object.entries(unemployed.data))}
  `;
  unemploymentStringBra += unemploymentListBra;
  unemploymentIndicators[1].innerHTML = unemploymentStringBra;
});
let educationStringBra = '';
worldbank.educationFilter(indicatorsBrazilArray, 'SE').forEach(edu => {
  const educationListBra = `
  <div> ${edu.indicatorName}</div>
  <h5>Año  -  Datos</h5>
   ${educationData(Object.entries(edu.data))}
  `;
  educationStringBra += educationListBra;
  educationIndicators[1].innerHTML = educationStringBra;
}); 
let violenceStringBra = '';
worldbank.violenceFilter(indicatorsBrazilArray, 'SG.VAW').forEach(violent => {
  const violenceListBra = `
  <div> ${violent.indicatorName} </div>
  <h5>Año  -  Datos</h5>
   ${violenceData(Object.entries(violent.data))}
  `;
  violenceStringBra += violenceListBra;
  violenceIndicators[1].innerHTML = violenceStringBra;
});

// chile
let populationStringChl = '';
worldbank.populationFilter(indicatorsChileArray, 'SP.POP').forEach(pop => {
  const populationListChl = `
    <div> ${pop.indicatorName}</div>
    <a href="#" onclick="showElement()">Ver |</a>
       <a href="#" onclick="hideElement(this)">Ocultar</a>
       <section id="listado">
          <h5>Año  -  Datos</h5>
          ${populationData(Object.entries(pop.data))}
       </section>
    `;
  populationStringChl += populationListChl;
  populationIndicators[2].innerHTML = populationStringChl;
});
let laborStringChl = '';
worldbank.laborFilter(indicatorsChileArray, 'SL.TLF').forEach(lab => {
  const laborListChl = `
  <div> ${lab.indicatorName} </div>
  <h5>Año  -  Datos</h5>
   ${laborData(Object.entries(lab.data))}
  `;
  laborStringChl += laborListChl;
  laborIndicators[2].innerHTML = laborStringChl;
});
let unemploymentStringChl = '';
worldbank.unemploymentFilter(indicatorsChileArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentListChl = `
  <div> ${unemployed.indicatorName}</div>
  <h5>Año  -  Datos</h5>
   ${unemploymentData(Object.entries(unemployed.data))}
  `;
  unemploymentStringChl += unemploymentListChl;
  unemploymentIndicators[2].innerHTML = unemploymentStringChl;
});
let educationStringChl = '';
worldbank.educationFilter(indicatorsChileArray, 'SE').forEach(edu => {
  const educationListChl = `
  <div> ${edu.indicatorName}</div>
  <h5>Año  -  Datos</h5>
   ${educationData(Object.entries(edu.data))}
  `;
  educationStringChl += educationListChl;
  educationIndicators[2].innerHTML = educationStringChl;
}); 
let violenceStringChl = '';
worldbank.violenceFilter(indicatorsChileArray, 'SG.VAW').forEach(violent => {
  const violenceListChl = `
  <div> ${violent.indicatorName} </div>
  <h5>Año  -  Datos</h5>
   ${violenceData(Object.entries(violent.data))}
  `;
  violenceStringChl += violenceListChl;
  violenceIndicators[2].innerHTML = violenceStringChl;
});
// mexico 
let populationStringMex = '';
worldbank.populationFilter(indicatorsMexicoArray, 'SP.POP').forEach(pop => {
  const populationListMex = `
    <div> ${pop.indicatorName}</div>
    <a href="#" onclick="showElement()">Ver |</a>
       <a href="#" onclick="hideElement(this)">Ocultar</a>
       <section id="listado">
          <h5>Año  -  Datos</h5>
          ${populationData(Object.entries(pop.data))}
       </section>
    `;
  populationStringMex += populationListMex;
  populationIndicators[3].innerHTML = populationStringMex;
});
let laborStringMex = '';
worldbank.laborFilter(indicatorsMexicoArray, 'SL.TLF').forEach(lab => {
  const laborListMex = `
  <div> ${lab.indicatorName} </div>
  <h5>Año  -  Datos</h5>
   ${laborData(Object.entries(lab.data))}
  `;
  laborStringMex += laborListMex;
  laborIndicators[3].innerHTML = laborStringMex;
});
let unemploymentStringMex = '';
worldbank.unemploymentFilter(indicatorsMexicoArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentListMex = `
  <div> ${unemployed.indicatorName}</div>
  <h5>Año  -  Datos</h5>
   ${unemploymentData(Object.entries(unemployed.data))}
  `;
  unemploymentStringMex += unemploymentListMex;
  unemploymentIndicators[3].innerHTML = unemploymentStringMex;
});
let educationStringMex = '';
worldbank.educationFilter(indicatorsMexicoArray, 'SE').forEach(edu => {
  const educationListMex = `
  <div> ${edu.indicatorName}</div>
  <h5>Año  -  Datos</h5>
   ${educationData(Object.entries(edu.data))}
  `;
  educationStringMex += educationListMex;
  educationIndicators[3].innerHTML = educationStringMex;
}); 
let violenceStringMex = '';
worldbank.violenceFilter(indicatorsMexicoArray, 'SG.VAW').forEach(violent => {
  const violenceListMex = `
  <div> ${violent.indicatorName} </div>
  <h5>Año  -  Datos</h5>
   ${violenceData(Object.entries(violent.data))}
  `;
  violenceStringMex += violenceListMex;
  violenceIndicators[3].innerHTML = violenceStringMex;
});

let womenString = '';
worldbank.womenFilter(indicatorsPeruArray).forEach(woman => {
  const womenList = `<div><a href=#> ${woman.indicatorName} </a></div> <button id="showhide-btn">Mostrar</button>
  <div id="tabla"> ${Object.entries(woman.data)} </div>`;
  womenString += womenList;
  document.getElementById('demo').innerHTML = womenString;
});
document.getElementById('showhide-btn').addEventListener('click', () => {
  document.getElementById('tabla').style.display = 'block';
});
let menString = '';
worldbank.menFilter(indicatorsPeruArray, 'MA').forEach(man => {
  const menList = `<div><a href=#> ${man.indicatorName} </div></a>`;
  menString += menList;
  document.getElementById('demo-1').innerHTML = menString;
});
// let sortString = '';
// worldbank.orderIndicator(indicatorsPeruArray).for( const indicador of orderIndicatorName){
//   console.log(indicador.indicatorName)
// }; 
/* let sortString = '';
worldbank.orderIndicator(indicatorsPeruArray).forEach(order => {
  const orderList = `<div><a href=#> ${order.indicatorName} </div></a>`;
  sortString += orderList;
  document.getElementById('btn-asc').style.display = 'block'; 
});*/


document.getElementById('peru-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'block';
  document.getElementById('brazil-page').style.display = 'none'; 
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('third-page').style.display = 'none';
});
document.getElementById('brazil-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none'; 
  document.getElementById('brazil-page').style.display = 'block';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('third-page').style.display = 'none';
});
document.getElementById('chile-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'block';
  document.getElementById('mexico-page').style.display = 'none'; 
  document.getElementById('third-page').style.display = 'none';
});
document.getElementById('mexico-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'block';
  document.getElementById('third-page').style.display = 'none';
});
// peru
document.getElementsByClassName('population-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'block';
  laborIndicators[0].style.display = 'none';
  unemploymentIndicators[0].style.display = 'none';
  educationIndicators[0].style.display = 'none';
  violenceIndicators[0].style.display = 'none';
});
document.getElementsByClassName('labor-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'none';
  laborIndicators[0].style.display = 'block';
  unemploymentIndicators[0].style.display = 'none';
  educationIndicators[0].style.display = 'none';
  violenceIndicators[0].style.display = 'none';
});
document.getElementsByClassName('unemployment-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'none';
  laborIndicators[0].style.display = 'none';
  unemploymentIndicators[0].style.display = 'block';
  educationIndicators[0].style.display = 'none';
  violenceIndicators[0].style.display = 'none';
});
document.getElementsByClassName('education-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'none';
  laborIndicators[0].style.display = 'none';
  unemploymentIndicators[0].style.display = 'none';
  educationIndicators[0].style.display = 'block';
  violenceIndicators[0].style.display = 'none';
});
document.getElementsByClassName('violence-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'none';
  laborIndicators[0].style.display = 'none';
  unemploymentIndicators[0].style.display = 'none';
  educationIndicators[0].style.display = 'none';
  violenceIndicators[0].style.display = 'block';
});

// brazil 
document.getElementsByClassName('population-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'block';
  laborIndicators[1].style.display = 'none';
  unemploymentIndicators[1].style.display = 'none';
  educationIndicators[1].style.display = 'none';
  violenceIndicators[1].style.display = 'none';
});
document.getElementsByClassName('labor-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'none';
  laborIndicators[1].style.display = 'block';
  unemploymentIndicators[1].style.display = 'none';
  educationIndicators[1].style.display = 'none';
  violenceIndicators[1].style.display = 'none';
});
document.getElementsByClassName('unemployment-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'none';
  laborIndicators[1].style.display = 'none';
  unemploymentIndicators[1].style.display = 'block';
  educationIndicators[1].style.display = 'none';
  violenceIndicators[1].style.display = 'none';
});
document.getElementsByClassName('education-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'none';
  laborIndicators[1].style.display = 'none';
  unemploymentIndicators[1].style.display = 'none';
  educationIndicators[1].style.display = 'block';
  violenceIndicators[1].style.display = 'none';
});
document.getElementsByClassName('violence-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'none';
  laborIndicators[1].style.display = 'none';
  unemploymentIndicators[1].style.display = 'none';
  educationIndicators[1].style.display = 'none';
  violenceIndicators[1].style.display = 'block';
});
// chile 
document.getElementsByClassName('population-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'block';
  laborIndicators[2].style.display = 'none';
  unemploymentIndicators[2].style.display = 'none';
  educationIndicators[2].style.display = 'none';
  violenceIndicators[2].style.display = 'none';
});
document.getElementsByClassName('labor-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'none';
  laborIndicators[2].style.display = 'block';
  unemploymentIndicators[2].style.display = 'none';
  educationIndicators[2].style.display = 'none';
  violenceIndicators[2].style.display = 'none';
});
document.getElementsByClassName('unemployment-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'none';
  laborIndicators[2].style.display = 'none';
  unemploymentIndicators[2].style.display = 'block';
  educationIndicators[2].style.display = 'none';
  violenceIndicators[2].style.display = 'none';
});
document.getElementsByClassName('education-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'none';
  laborIndicators[2].style.display = 'none';
  unemploymentIndicators[2].style.display = 'none';
  educationIndicators[2].style.display = 'block';
  violenceIndicators[2].style.display = 'none';
});
document.getElementsByClassName('violence-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'none';
  laborIndicators[2].style.display = 'none';
  unemploymentIndicators[2].style.display = 'none';
  educationIndicators[2].style.display = 'none';
  violenceIndicators[2].style.display = 'block';
});
// mexico
document.getElementsByClassName('population-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'block';
  laborIndicators[3].style.display = 'none';
  unemploymentIndicators[3].style.display = 'none';
  educationIndicators[3].style.display = 'none';
  violenceIndicators[3].style.display = 'none';
});
document.getElementsByClassName('labor-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'none';
  laborIndicators[3].style.display = 'block';
  unemploymentIndicators[3].style.display = 'none';
  educationIndicators[3].style.display = 'none';
  violenceIndicators[3].style.display = 'none';
});
document.getElementsByClassName('unemployment-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'none';
  laborIndicators[3].style.display = 'none';
  unemploymentIndicators[3].style.display = 'block';
  educationIndicators[3].style.display = 'none';
  violenceIndicators[3].style.display = 'none';
});
document.getElementsByClassName('education-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'none';
  laborIndicators[3].style.display = 'none';
  unemploymentIndicators[3].style.display = 'none';
  educationIndicators[3].style.display = 'block';
  violenceIndicators[3].style.display = 'none';
});
document.getElementsByClassName('violence-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'none';
  laborIndicators[3].style.display = 'none';
  unemploymentIndicators[3].style.display = 'none';
  educationIndicators[3].style.display = 'none';
  violenceIndicators[3].style.display = 'block';
});

document.getElementById('women-btn').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('demo').style.display = 'block';
  document.getElementById('third-page').style.display = 'none';
});
document.getElementById('men-btn').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('demo').style.display = 'none';
  document.getElementById('demo-1').style.display = 'block';
  document.getElementById('third-page').style.display = 'none';
});

document.getElementById('order-indicator').addEventListener('click', () => {
  document.getElementById('third-page').style.display = 'block';
  document.getElementById('welcome-page').style.display = 'none';
});

// const objData = WORLDBANK.PER
// const arrWORLBANK = Object.keys(objData);
// console.log(arrWORLBANK);

// const datos = Object.entries(WORLDBANK.PER.indicators[0].data)
// console.log(datos)

