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
const menFilter = (arr, string) => {
  let menArray = [];
  menArray = arr.filter(man => man.indicatorCode.includes(string));
  return menArray;
};
const orderIndicator = (arr) => {
  let indicatorOrder = [];
  indicatorOrder = arr.sort(order => order.indicatorName); // pop is like arr[í]
  return indicatorOrder;
};

window.worldbank = {
  populationFilter,
  laborFilter,
  unemploymentFilter,
  educationFilter,
  violenceFilter,
  womenFilter,
  menFilter,
  orderIndicator
};