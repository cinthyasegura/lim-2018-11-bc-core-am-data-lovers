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
  },
  {
    'countryName': 'Brasil',
    'countryCode': 'BRA',
    'indicatorName': 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)',
    'indicatorCode': 'SE.ENR.SECO.FM.ZS'
  },
  {
    'countryName': 'Chile',
    'countryCode': 'CHL',
    'indicatorName': 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)',
    'indicatorCode': 'SG.VAW.NEGL.ZS'
  },
  {
    'countryName': 'México',
    'countryCode': 'MEX',
    'indicatorName': 'Personas desempleadas con educación avanzada, mujeres',
    'indicatorCode': 'SL.UEM.ADVN.FE.ZS'
  }
];
const input1 = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS'
  },
];
const input2 = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Desempleo, varones jóvenes (% de participación en la fuerza laboral de varones de 15 a 24 años) (estimación nacional)',
    'indicatorCode': 'SL.UEM.1524.MA.NE.ZS'
  },
];


const output = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Población, mujeres (% del total)',
    'indicatorCode': 'SP.POP.TOTL.FE.ZS'
  },
];
const output1 = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS'
  }
];
const output2 = [
  {
    'countryName': 'México',
    'countryCode': 'MEX',
    'indicatorName': 'Personas desempleadas con educación avanzada, mujeres',
    'indicatorCode': 'SL.UEM.ADVN.FE.ZS'
  }
];
const output3 = [
  {
    'countryName': 'Brasil',
    'countryCode': 'BRA',
    'indicatorName': 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)',
    'indicatorCode': 'SE.ENR.SECO.FM.ZS'
  }
];
const output4 = [
  {
    'countryName': 'Chile',
    'countryCode': 'CHL',
    'indicatorName': 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)',
    'indicatorCode': 'SG.VAW.NEGL.ZS'
  }
];
const output5 = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Desempleo, varones jóvenes (% de participación en la fuerza laboral de varones de 15 a 24 años) (estimación nacional)',
    'indicatorCode': 'SL.UEM.1524.MA.NE.ZS'
  },
];

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
});

describe('worldbank.populationFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.populationFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de poblacion', () => {
    expect(worldbank.populationFilter(input, 'SP.POP')).toEqual(output);
  });
});

describe('worldbank.laborFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.laborFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de empleo', () => {
    expect(worldbank.laborFilter(input, 'SL.TLF')).toEqual(output1);
  });
});

describe('worldbank.unemploymentFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.unemploymentFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de desempleo', () => {
    expect(worldbank.unemploymentFilter(input, 'SL.UEM')).toEqual(output2);
  });
});

describe('worldbank.educationFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.educationFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de educacion', () => {
    expect(worldbank.educationFilter(input, 'SE')).toEqual(output3);
  });
});

describe('worldbank.violenceFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.violenceFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de violencia', () => {
    expect(worldbank.violenceFilter(input, 'SG.VAW')).toEqual(output4);
  });
});

describe('worldbank.womenFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.womenFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de mujeres', () => {
    expect(worldbank.womenFilter(input1, 'FE')).toEqual(output1);
  });
});

describe('worldbank.menFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.menFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de hombres', () => {
    expect(worldbank.menFilter(input2, 'MA')).toEqual(output5);
  });
});