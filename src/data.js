const populationFilter = (arr, string) => {
  let populationArray = [];
  populationArray = arr.filter(pop => pop.indicatorCode.slice(0, 6) === string); // pop is like arr[í]
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
    } return 0; 
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
const fallingYears = (arr) => {
  let fallingYear = arr.sort(function(prev, next) {
    if (prev[0] > next[0]) {
      return -1;
    } if (prev[0] < next[0]) {
      return 1;
    } return 0; 
  });
  return fallingYear;
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
  fallingYears
};


/* utilizando array.sort
var orderIndicatorName = indicatorsArray.sort(function (a, b) {
  if (a.indicatorName > b.indicatorName) {
      return 1;
  } if (a.indicatorName < b.indicatorName){
      return -1;
  }
      return 0
});
orderIndicatorName; */