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
  { 'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS',
  },
  { 'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Inscripción escolar, nivel terciario, mujeres (% bruto)',
    'indicatorCode': 'SE.TER.ENRR.FE',
  },
  { 'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Población, mujeres (% del total)',
    'indicatorCode': 'SP.POP.TOTL.FE.ZS',
  }
];

const output = [
  { 'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Población, mujeres (% del total)',
    'indicatorCode': 'SP.POP.TOTL.FE.ZS'
  }
];

describe('worldbank.populationFilter', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.populationFilter).toBe('function');
  });
  it('deberia retornar un array de objeto con los indicatorNames que inicien su indicatorCode con SP.POP', () => {
    expect(worldbank.populationFilter(input)).toEqual(output);
  });
});
