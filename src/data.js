// const filtradoPorPoblacion = (arr, string) => {
//   let  newArray = [];
//    newArray =  arr.filter(pop => pop.indicatorCode.slice(0, 6) === string)
//   return newArray;
//  }
// window.worldbank = {
//   filtradoPorPoblacion
// };

window.worldbank = {
  populationFilter: (arr, string) => {
    let populationArray = [];
    populationArray = arr.filter(pop => pop.indicatorCode.slice(0, 6) === string)
    return populationArray;
  },
  laboralFilter: (arr, string) => {
    let laboralArray = [];
    laboralArray = arr.filter(lab => lab.indicatorCode.slice(0, 6) === string)
    return laboralArray;
  },
  unemploymentFilter: (arr, string) => {
    let unemploymentArray = [];
    unemploymentArray = arr.filter(unemployed => unemployed.indicatorCode.slice(0, 6) === string)
    return unemploymentArray;
  },
  educationFilter: (arr, string) => {
    let educationArray = [];
    educationArray = arr.filter(edu => edu.indicatorCode.slice(0, 2) === string)
    return educationArray;
  },
  violenceFilter: (arr, string) => {
    let violenceArray = [];
    violenceArray = arr.filter(violent => violent.indicatorCode.slice(0, 6) === string)
    return violenceArray;
  }
};