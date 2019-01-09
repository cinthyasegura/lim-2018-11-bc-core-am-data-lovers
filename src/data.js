const filter = (arr, string) => {
  let filterArray = [];
  filterArray = arr.filter(indicator => indicator.indicatorCode.slice(0, 6) === string); 
  return filterArray;
};
const educationFilter = (arr, string) => {
  let educationArray = [];
  educationArray = arr.filter(edu => edu.indicatorCode.slice(0, 2) === string);
  return educationArray;
};
const genreFilter = (arr, string) => {
  let genreArray = [];
  genreArray = arr.filter(genre => genre.indicatorCode.includes(string));
  return genreArray;
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
const calculateAverage = (arr) => {
  let averageArray = [];
  arr.forEach(value => {
    let sum = value.reduce((total, current) => {
      return (Number(total) + Number(current));
    }, 0);
    let average = sum / value.length;
    averageArray.push(Object.assign(average.toFixed(2)));    
  });
  return averageArray;
};

window.worldbank = {
  filter,
  educationFilter,
  genreFilter,
  orderIndicator,
  fallingIndicator,
  calculateAverage
};