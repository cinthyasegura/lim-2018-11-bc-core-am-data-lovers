const populationIndicators = document.getElementsByClassName('population-indicators');
const laborIndicators = document.getElementsByClassName('labor-indicators');
const unemploymentIndicators = document.getElementsByClassName('unemployment-indicators');
const educationIndicators = document.getElementsByClassName('education-indicators');
const violenceIndicators = document.getElementsByClassName('violence-indicators');
const indicatorsPeruArray = WORLDBANK.PER.indicators;
const indicatorsBrazilArray = WORLDBANK.BRA.indicators;
const indicatorsChileArray = WORLDBANK.CHL.indicators;
const indicatorsMexicoArray = WORLDBANK.MEX.indicators;

// funcion que me muesta en un array de arrays los values de data
const dataOfData = arr => {
  let acum = [];
  const arrData = arr.map(val => val.data);
  const valuesOfData = arrData.map(val => Object.values(val));
  acum.push(valuesOfData);
  return acum;
};

const populationData = (people) => {
  return `
  <h5><strong>Año  -  Datos</strong></h5>
  <ul class="population-list"> ${people.map(pop => `
    <li>${pop.join(' - ')}</li>`).join('')}
  </ul>
  `;
};
const populationInfo = (pop, index, country) => {
  const averagePopulationArray = worldbank.calculateAverage(...dataOfData(worldbank.filter(country, 'SP.POP')));
  return `
  <div class="indicator-name"> ${pop.indicatorName}</div>
  <section class="listado-data">
    ${populationData(Object.entries(pop.data))}
    <p class ="average-value"> El promedio es: ${averagePopulationArray[index]}</p>
  </section>
  `; 
};
// map will run the function populationInfo once for each item in the original array and each time the function runs whatever it returns gets added to the new array
populationIndicators[0].innerHTML = `${worldbank.filter(indicatorsPeruArray, 'SP.POP').map(populationInfo).join('')}`;
populationIndicators[1].innerHTML = `${worldbank.filter(indicatorsBrazilArray, 'SP.POP').map(populationInfo).join('')}`;
populationIndicators[2].innerHTML = `${worldbank.filter(indicatorsChileArray, 'SP.POP').map(populationInfo).join('')}`;
populationIndicators[3].innerHTML = `${worldbank.filter(indicatorsMexicoArray, 'SP.POP').map(populationInfo).join('')}`;
/* <button class="show-btn">Ver</button>
    <button class="hide-btn">Ocultar</button>

const showBtn = document.getElementsByClassName('show-btn');
const hideBtn = document.getElementsByClassName('hide-btn');

for (let i = 0; i < showBtn.length; i++) {
  for (let j = 0; j < hideBtn.length; j++) {
    showBtn[i].addEventListener('click', () => {
      showBtn[i].style.display = 'none';
      hideBtn[j].style.display = 'block';  
    });
    hideBtn[j].addEventListener('click', () => {
      showBtn[i].style.display = 'block'; 
      hideBtn[j].style.display = 'none';
    // document.getElementsByClassName('listado-data').style.display = 'block'; 
    });
  }
} */
const laborData = work => {
  return `
    <h5>Año  -  Datos</h5>
    <ul> ${work.map(lab => `
      <li>${lab.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
const laborInfo = (lab, index, country) => {
  const averageLaborArray = worldbank.calculateAverage(...dataOfData(worldbank.filter(country, 'SL.TLF')));
  return `
  <div class="indicator-name"> ${lab.indicatorName} </div>
  <section class="listado-data">
    ${laborData(Object.entries(lab.data))}
    <p class ="average-value"> El promedio es: ${averageLaborArray[index]}</p>
  </section>
  `;
};
laborIndicators[0].innerHTML = `${worldbank.filter(indicatorsPeruArray, 'SL.TLF').map(laborInfo).join('')}`;
laborIndicators[1].innerHTML = `${worldbank.filter(indicatorsBrazilArray, 'SL.TLF').map(laborInfo).join('')}`;
laborIndicators[2].innerHTML = `${worldbank.filter(indicatorsChileArray, 'SL.TLF').map(laborInfo).join('')}`;
laborIndicators[3].innerHTML = `${worldbank.filter(indicatorsMexicoArray, 'SL.TLF').map(laborInfo).join('')}`;
// const <p>${worldbank.calculateAverage(Object.values(lab.data))}</p>
const unemploymentData = unemploy => {
  return `
    <h5>Año  -  Datos</h5>
    <ul> ${unemploy.map(unemployed => `
      <li>${unemployed.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
const unemploymentInfo = (unemployed, index, country) => {
  const averageUnemploymentArray = worldbank.calculateAverage(...dataOfData(worldbank.filter(country, 'SL.UEM')));
  return `
  <div class="indicator-name"> ${unemployed.indicatorName}</div>
  <section class="listado-data">
    ${unemploymentData(Object.entries(unemployed.data))} 
    <p class="average-value"> El promedio es: ${averageUnemploymentArray[index]}<p/>
   </section>
  `;
};
unemploymentIndicators[0].innerHTML = `${worldbank.filter(indicatorsPeruArray, 'SL.UEM').map(unemploymentInfo).join('')}`;
unemploymentIndicators[1].innerHTML = `${worldbank.filter(indicatorsBrazilArray, 'SL.UEM').map(unemploymentInfo).join('')}`;
unemploymentIndicators[2].innerHTML = `${worldbank.filter(indicatorsChileArray, 'SL.UEM').map(unemploymentInfo).join('')}`;
unemploymentIndicators[3].innerHTML = `${worldbank.filter(indicatorsMexicoArray, 'SL.UEM').map(unemploymentInfo).join('')}`;

const educationData = educa => {
  return `
    <h5>Año  -  Datos</h5>
    <ul> ${educa.map(edu => `
      <li>${edu.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
const educationInfo = (edu, index, country) => {
  const averageEducationArray = worldbank.calculateAverage(...dataOfData(worldbank.educationFilter(country, 'SE')));
  return `
  <div class="indicator-name"> ${edu.indicatorName}</div>
  <section class="listado-data">
    ${educationData(Object.entries(edu.data))}
    <p class="average-value"> El promedio es: ${averageEducationArray[index]}<p/>
   </section>
  `;
};
educationIndicators[0].innerHTML = `${worldbank.educationFilter(indicatorsPeruArray, 'SE').map(educationInfo).join('')}`;
educationIndicators[1].innerHTML = `${worldbank.educationFilter(indicatorsBrazilArray, 'SE').map(educationInfo).join('')}`;
educationIndicators[2].innerHTML = `${worldbank.educationFilter(indicatorsChileArray, 'SE').map(educationInfo).join('')}`;
educationIndicators[3].innerHTML = `${worldbank.educationFilter(indicatorsMexicoArray, 'SE').map(educationInfo).join('')}`;

const violenceData = assault => {
  return `
    <h5>Año  -  Datos</h5>
    <ul> ${assault.map(violent => `
      <li>${violent.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
const violenceInfo = (violent, index, country) => {
  const averageViolenceArray = worldbank.calculateAverage(...dataOfData(worldbank.filter(country, 'SG.VAW')));
  return `
  <div class="indicator-name"> ${violent.indicatorName} </div>
  <section class="listado-data">
    ${violenceData(Object.entries(violent.data))}
    <p class="average-value"> El promedio es: ${averageViolenceArray[index]}<p/>
  </section>
  `;
};
violenceIndicators[0].innerHTML = `${worldbank.filter(indicatorsPeruArray, 'SG.VAW').map(violenceInfo).join('')}`;
violenceIndicators[1].innerHTML = `${worldbank.filter(indicatorsBrazilArray, 'SG.VAW').map(violenceInfo).join('')}`;
violenceIndicators[2].innerHTML = `${worldbank.filter(indicatorsChileArray, 'SG.VAW').map(violenceInfo).join('')}`;
violenceIndicators[3].innerHTML = `${worldbank.filter(indicatorsMexicoArray, 'SG.VAW').map(violenceInfo).join('')}`;
// filtrado por sexo 
const womenData = (girl) => {
  return `
  <h5>Año  -  Datos</h5>
  <ul class="women-list"> ${girl.map(woman => `
    <li>${woman.join(' - ')}</li>`).join('')}
  </ul>
  `;
};
const womenInfo = (woman, index, country) => {
  const averageWomenArray = worldbank.calculateAverage(...dataOfData(worldbank.genreFilter(country, 'FE')));
  return `
  <div class="indicator-name"> ${woman.indicatorName}</div>
  <section class="listado-data">
    ${womenData(Object.entries(woman.data))}
    <p class="average-value"> El promedio es: ${averageWomenArray[index]}<p/> 
  </section>
  `;
};
document.getElementById('women-indicators-pe').innerHTML = `${worldbank.genreFilter(indicatorsPeruArray, 'FE').map(womenInfo).join('')}`;
document.getElementById('women-indicators-br').innerHTML = `${worldbank.genreFilter(indicatorsBrazilArray, 'FE').map(womenInfo).join('')}`;
document.getElementById('women-indicators-ch').innerHTML = `${worldbank.genreFilter(indicatorsChileArray, 'FE').map(womenInfo).join('')}`;
document.getElementById('women-indicators-me').innerHTML = `${worldbank.genreFilter(indicatorsMexicoArray, 'FE').map(womenInfo).join('')}`;
// Mostrar indicadores mujeres en html con select
const countrySelectWomen = document.getElementById('country-select-women');
const womenShowIndicator = () => {
  if (countrySelectWomen.selectedIndex === 0) {
    document.getElementById('select1').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'block';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'none';
  } else if (countrySelectWomen.selectedIndex === 1) {
    document.getElementById('select1').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-br').style.display = 'block';
    document.getElementById('women-indicators-ch').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'none';
  } else if (countrySelectWomen.selectedIndex === 2) {
    document.getElementById('select1').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'block';
    document.getElementById('women-indicators-me').style.display = 'none';
  } else {
    document.getElementById('select1').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'block';
  }
};
countrySelectWomen.addEventListener('click', womenShowIndicator);

const menData = (guy) => {
  return `
  <h5>Año  -  Datos</h5>
  <ul class="women-list"> ${guy.map(man => `
    <li>${man.join(' - ')}</li>`).join('')}
  </ul>
  `;
};
const menInfo = (man, index, country) => {
  const averageMenArray = worldbank.calculateAverage(...dataOfData(worldbank.genreFilter(country, 'MA')));
  return `
  <div class="indicator-name"> ${man.indicatorName} </div>
  <section class="listado-data">
    ${menData(Object.entries(man.data))}
    <p class="average-value"> El promedio es: ${averageMenArray[index]}<p/> 
  </section>
  `;
};
document.getElementById('men-indicators-pe').innerHTML = `${worldbank.genreFilter(indicatorsPeruArray, 'MA').map(menInfo).join('')}`;
document.getElementById('men-indicators-br').innerHTML = `${worldbank.genreFilter(indicatorsBrazilArray, 'MA').map(menInfo).join('')}`;
document.getElementById('men-indicators-ch').innerHTML = `${worldbank.genreFilter(indicatorsChileArray, 'MA').map(menInfo).join('')}`;
document.getElementById('men-indicators-me').innerHTML = `${worldbank.genreFilter(indicatorsMexicoArray, 'MA').map(menInfo).join('')}`;
// Mostrar indicadores hombres en html con select
const countrySelectMen = document.getElementById('country-select-men');

const menShowIndicator = () => {
  if (countrySelectMen.selectedIndex === 0) {
    document.getElementById('select2').style.display = 'block';
    document.getElementById('men-indicators-pe').style.display = 'block';
    document.getElementById('men-indicators-br').style.display = 'none';
    document.getElementById('men-indicators-ch').style.display = 'none';
    document.getElementById('men-indicators-me').style.display = 'none';
  } else if (countrySelectMen.selectedIndex === 1) {
    document.getElementById('select2').style.display = 'block';
    document.getElementById('men-indicators-pe').style.display = 'none';
    document.getElementById('men-indicators-br').style.display = 'block';
    document.getElementById('men-indicators-ch').style.display = 'none';
    document.getElementById('men-indicators-me').style.display = 'none';
  } else if (countrySelectMen.selectedIndex === 2) {
    document.getElementById('select2').style.display = 'block';
    document.getElementById('men-indicators-pe').style.display = 'none';
    document.getElementById('men-indicators-br').style.display = 'none';
    document.getElementById('men-indicators-ch').style.display = 'block';
    document.getElementById('men-indicators-me').style.display = 'none';
  } else {
    document.getElementById('select2').style.display = 'block';
    document.getElementById('men-indicators-pe').style.display = 'none';
    document.getElementById('men-indicators-br').style.display = 'none';
    document.getElementById('men-indicators-ch').style.display = 'none';
    document.getElementById('men-indicators-me').style.display = 'block';
  }
};
countrySelectMen.addEventListener('click', menShowIndicator);

// sort 
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
  document.getElementById('peru-page').style.display = 'block';
  document.getElementById('brazil-page').style.display = 'none'; 
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
document.getElementById('brazil-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none'; 
  document.getElementById('brazil-page').style.display = 'block';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
document.getElementById('chile-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'block';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none'; 
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
document.getElementById('mexico-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'block';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
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

document.getElementById('women-option').addEventListener('click', () => {
  document.getElementById('women-page').style.display = 'block';
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
document.getElementById('men-option').addEventListener('click', () => {
  document.getElementById('men-page').style.display = 'block';
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('men-indicators-pe').style.display = 'none';
  document.getElementById('men-indicators-br').style.display = 'none';
  document.getElementById('men-indicators-ch').style.display = 'none';
  document.getElementById('men-indicators-me').style.display = 'none';
});
document.getElementById('order-option').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'block';
});
document.getElementById('btn-asc').addEventListener('click', () => {
  document.getElementById('upward-order').style.display = 'block';
  document.getElementById('falling-order').style.display = 'none'; 
});
document.getElementById('btn-desc').addEventListener('click', () => {
  document.getElementById('falling-order').style.display = 'block'; 
  document.getElementById('upward-order').style.display = 'none';
});

