require('../src/data.js');

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

const filtration = [
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
  }
];
const input2 = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Desempleo, varones jóvenes (% de participación en la fuerza laboral de varones de 15 a 24 años) (estimación nacional)',
    'indicatorCode': 'SL.UEM.1524.MA.NE.ZS'
  }
];
const input3 = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
  }, 
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Proporción de participación en la fuerza laboral de mujeres y varones (%) (estimación nacional)',
  },
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Alumnos de mayor edad, nivel primario, mujeres (% de matrícula de mujeres)',
  }
];
const input4 = [
  ['50.25', '52.15'], ['60.34', '25.10'], ['23.12', '24.22']
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
const output6 = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Alumnos de mayor edad, nivel primario, mujeres (% de matrícula de mujeres)',
  },
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
  },
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Proporción de participación en la fuerza laboral de mujeres y varones (%) (estimación nacional)',
  }
];
const output7 = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Proporción de participación en la fuerza laboral de mujeres y varones (%) (estimación nacional)',
  },
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
  },
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Alumnos de mayor edad, nivel primario, mujeres (% de matrícula de mujeres)',
  }
];
const output8 = ['51.20', '42.72', '23.67'];


const input5 = [
  {
    'data': {
      '1960': 0.334943612263856,
      '1961': 0.349147022654834,
      '1962': 0.353646103597639,
    }
  }
];

const output9 = [[[
  0.334943612263856,
  0.349147022654834, 
  0.353646103597639
]]];


describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
});

describe('worldbank.filter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.filter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de poblacion', () => {
    expect(worldbank.filter(filtration, 'SP.POP')).toEqual(output);
  });
});

describe('worldbank.filter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.filter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de empleo', () => {
    expect(worldbank.filter(filtration, 'SL.TLF')).toEqual(output1);
  });
});

describe('worldbank.filter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.filter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de desempleo', () => {
    expect(worldbank.filter(filtration, 'SL.UEM')).toEqual(output2);
  });
});

describe('worldbank.educationFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.educationFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de educacion', () => {
    expect(worldbank.educationFilter(filtration, 'SE')).toEqual(output3);
  });
});

describe('worldbank.filter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.filter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de violencia', () => {
    expect(worldbank.filter(filtration, 'SG.VAW')).toEqual(output4);
  });
});

describe('worldbank.genreFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.genreFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de mujeres', () => {
    expect(worldbank.genreFilter(input1, 'FE')).toEqual(output1);
  });
});

describe('worldbank.genreFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.genreFilter).toBe('function');
  });
  it('deberia retornar una nuevo array con los indicadores de hombres', () => {
    expect(worldbank.genreFilter(input2, 'MA')).toEqual(output5);
  });
});
describe('worldbank.orderIndicator', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.orderIndicator).toBe('function');
  });
  it('deberia retornar una función con el nombre de los indicadores en ascendente', () => {
    expect(worldbank.orderIndicator(input3)).toEqual(output6);
  });
});
describe('worldbank.fallingIndicator', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.fallingIndicator).toBe('function');
  });
  it('deberia retornar una función con el nombre de los indicadores en descendente', () => {
    expect(worldbank.fallingIndicator(input3)).toEqual(output7);
  });
});
describe('worldbank.calculateAverage', () => {
  it('deberia ser una funcion', () => {
    expect(typeof worldbank.calculateAverage).toBe('function');
  });
  it('deberia calcular el promedio de los valores de la data', () => {
    expect(worldbank.calculateAverage(input4)).toEqual(output8);
  });
});
describe('worldbank.dataOfData', () => {
  it('deberia retornar un array con los valores del objeto', () => {
    expect(worldbank.dataOfData(input5)).toEqual(output9);
  });
});