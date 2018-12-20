require('../src/data.js');


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    // expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.populationFilter', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.populationFilter).toBe('function');
    });
  });
});
