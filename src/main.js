const populationIndicators = document.getElementById('population-indicators');
const laborIndicators = document.getElementById('labor-indicators');
const unemploymentIndicators = document.getElementById('unemployment-indicators');
const educationIndicators = document.getElementById('education-indicators');
const violenceIndicators = document.getElementById('violence-indicators');
const indicatorsPeruArray = WORLDBANK.PER.indicators;

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
        <a href="#" id="link-desc">Descendente</a>
       </section>
    `;
  populationStringPer += populationListPer;
  populationIndicators.innerHTML = populationStringPer;
});
//const btnDescData = document.getElementById('link-desc');
//btnDescData.addEventListener('click', () => {
let getDescDataList = '';
worldbank.fallingYears(populationData(Object.entries(pop.data).forEach(pop => {
  const descDataList = `
       <section id="listado">
          <h5>Año  -  Datos</h5>
          ${populationData(Object.entries(pop.data))}
        <a href="#" id="link-desc">Descendente</a>
       </section>
      `; 
  getDescDataList += descDataList;
  populationData.innerHTML = getDescDataList;
})));
//  const staticData = document.getElementById('static-data');
//  const descData = document.getElementById('des-data');
//  staticData.style.display = 'none';
//  descData.style.display = 'block';
//  descData.innerHTML = getDescDataList; 
//}); 

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
  laborIndicators.innerHTML = laborStringPer;
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
  unemploymentIndicators.innerHTML = unemploymentStringPer;
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
  educationIndicators.innerHTML = educationStringPer;
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
  violenceIndicators.innerHTML = violenceStringPer;
});
// filtrado por sexo femenino y su respectiva data
// const dataFilter = arr => {
//   let dataArray = arr.map(da => Object.entries(da.data));
//   return dataArray;
// };
// document.getElementById('demo-1').innerHTML = dataFilter(worldbank.womenFilter);

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
/*let sortString = '';
worldbank.orderIndicator(indicatorsPeruArray).for(let indicador of orderIndicatorName){
  console.log(indicador.indicatorName)
};*/
let sortString = '';
worldbank.orderIndicator(indicatorsPeruArray).forEach(order => {
  const orderList = `<div>${order.indicatorName} </div>`;
  sortString += orderList;
  document.getElementById('upward-order').innerHTML = sortString;
});
let fallingString = '';
worldbank.fallingIndicator(indicatorsPeruArray).forEach(falling => {
  const fallingList = `<div>${falling.indicatorName} </div>`;
  fallingString += fallingList;
  document.getElementById('falling-order').innerHTML = fallingString;
});

document.getElementById('peru-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('first-page').style.display = 'block'; 
  document.getElementById('third-page').style.display = 'none';
});
document.getElementById('mexico-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('first-page').style.display = 'block'; 
  document.getElementById('third-page').style.display = 'none';
});
document.getElementById('brazil-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('first-page').style.display = 'block'; 
  document.getElementById('third-page').style.display = 'none';
});
document.getElementById('chile-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('first-page').style.display = 'block'; 
  document.getElementById('third-page').style.display = 'none';
});

document.getElementById('population-option').addEventListener('click', () => {
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
  document.getElementById('upward-order').style.display = 'none';
  document.getElementById('falling-order').style.display = 'none';
});
document.getElementById('btn-asc').addEventListener('click', () => {
  document.getElementById('upward-order').style.display = 'block'; 
  document.getElementById('welcome-page').style.display = 'none';
});
document.getElementById('btn-desc').addEventListener('click', () => {
  document.getElementById('falling-order').style.display = 'block'; 
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('upward-order').style.display = 'none';
});

// const objData = WORLDBANK.PER
// const arrWORLBANK = Object.keys(objData);
// console.log(arrWORLBANK);

// const datos = Object.entries(WORLDBANK.PER.indicators[0].data)
// console.log(datos)

