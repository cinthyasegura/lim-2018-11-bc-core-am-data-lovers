require('../src/data.js');

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

const input = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS'
  },
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Población, mujeres (% del total)',
    'indicatorCode': 'SP.POP.TOTL.FE.ZS'
  }
];

const output = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Población, mujeres (% del total)',
    'indicatorCode': 'SP.POP.TOTL.FE.ZS'
  },
];

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.populationFilter', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.populationFilter).toBe('function');
    });
    it('deberia retornar una nuevo array con los indicadores de poblacion', () => {
      expect(worldbank.populationFilter(input, 'SP.POP')).toEqual(output);
    });
  });
});
