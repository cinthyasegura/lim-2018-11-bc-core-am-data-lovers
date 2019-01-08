const populationFilter = (arr, string) => {
  let populationArray = [];
  populationArray = arr.filter(pop => pop.indicatorCode.slice(0, 6) === string); 
  return populationArray;
};
const laborFilter = (arr, string) => {
  let laborArray = [];
  laborArray = arr.filter(lab => lab.indicatorCode.slice(0, 6) === string);
  return laborArray;
};
const unemploymentFilter = (arr, string) => {
  let unemploymentArray = [];
  unemploymentArray = arr.filter(unemployed => unemployed.indicatorCode.slice(0, 6) === string);
  return unemploymentArray;
};
const educationFilter = (arr, string) => {
  let educationArray = [];
  educationArray = arr.filter(edu => edu.indicatorCode.slice(0, 2) === string);
  return educationArray;
};
const violenceFilter = (arr, string) => {
  let violenceArray = [];
  violenceArray = arr.filter(violent => violent.indicatorCode.slice(0, 6) === string);
  return violenceArray;
};
const womenFilter = (arr) => {
  let womenArray = [];
  womenArray = arr.filter(woman => woman.indicatorCode.includes('FE'));
  return womenArray;
};
const menFilter = (arr) => {
  let menArray = [];
  menArray = arr.filter(man => man.indicatorCode.includes('MA'));
  return menArray;
};
const orderIndicator = (arr) => {
  let orderIndicatorName = arr.sort(function(prev, next) {
    if (prev.indicatorName > next.indicatorName) {
      return 1;
    } if (prev.indicatorName < next.indicatorName) {
      return -1;
    } 
    return 0; 
  });
  return orderIndicatorName; 
};
const fallingIndicator = (arr) => {
  let fallingIndicatorName = arr.sort(function(prev, next) {
    if (prev.indicatorName > next.indicatorName) {
      return -1;
    } if (prev.indicatorName < next.indicatorName) {
      return 1;
    } return 0; 
  });
  return fallingIndicatorName; 
};
// let indicData = [];
// let maximo = [];
// const calculateMax = arr => {
//   for (let indx in arr) {
//     for (let key in arr[indx].data) {
//       indicData.push(Number(arr[indx].data[key]));
//     }
//   }
//   maximo.push(Math.max(...indicData))
//   return maximo;
// };

const calculateAverage = (arr) => {
  let averageArray = [];
  arr.forEach(value => {
    let sum = value.reduce((total, current) => {
      return (Number(total) + Number(current));
    }, 0);
    let average = sum / value.length;
    averageArray.push(average.toFixed(2));    
  });
  return averageArray;
};

window.worldbank = {
  populationFilter,
  laborFilter,
  unemploymentFilter,
  educationFilter,
  violenceFilter,
  womenFilter,
  menFilter,
  orderIndicator,
  fallingIndicator,
  calculateAverage
};