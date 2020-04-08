/*
import data from '..src/data/atletas/atletas.js';
*/
import {
  sortData, searchText, medalists, athleteNameFilter,
} from '../src/data.js';


const dataTest = [
  {
    id: 109758,
    name: 'Shim Seok-Hui',
    gender: 'F',
    height: '173',
    weight: '56',
    'date-birth': 1997,
    sport: 'Short Track Speed Skating',
    game: '2014 Winter',
    team: 'South Korea',
    noc: 'KOR',
  },
  {
    id: 11799,
    name: 'Matteo Bisiani',
    gender: 'M',
    height: '184',
    weight: '85',
    'date-birth': 1976,
    sport: 'Archery',
    game: '2000 Summer',
    team: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
  {
    id: 28056,
    name: 'Ilario Di Bu',
    gender: 'M',
    height: '175',
    weight: '90',
    'date-birth': 1966,
    sport: 'Archery',
    game: '2008 Summer',
    team: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2008,
        ciudad: 'Beijing',
        medalla: 'Silver',
      },
    ],
  },
];

const sortDataTestMax = [
  {
    id: 11799,
    name: 'Matteo Bisiani',
    gender: 'M',
    height: '184',
    weight: '85',
    'date-birth': 1976,
    sport: 'Archery',
    game: '2000 Summer',
    team: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
  {
    id: 28056,
    name: 'Ilario Di Bu',
    gender: 'M',
    height: '175',
    weight: '90',
    'date-birth': 1966,
    sport: 'Archery',
    game: '2008 Summer',
    team: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2008,
        ciudad: 'Beijing',
        medalla: 'Silver',
      },
    ],
  },
  {
    id: 109758,
    name: 'Shim Seok-Hui',
    gender: 'F',
    height: '173',
    weight: '56',
    'date-birth': 1997,
    sport: 'Short Track Speed Skating',
    game: '2014 Winter',
    team: 'South Korea',
    noc: 'KOR',
  },
];

const sortDataTestMin = [
  {
    id: 109758,
    name: 'Shim Seok-Hui',
    gender: 'F',
    height: '173',
    weight: '56',
    'date-birth': 1997,
    sport: 'Short Track Speed Skating',
    game: '2014 Winter',
    team: 'South Korea',
    noc: 'KOR',
  },
  {
    id: 28056,
    name: 'Ilario Di Bu',
    gender: 'M',
    height: '175',
    weight: '90',
    'date-birth': 1966,
    sport: 'Archery',
    game: '2008 Summer',
    team: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2008,
        ciudad: 'Beijing',
        medalla: 'Silver',
      },
    ],
  },
  {
    id: 11799,
    name: 'Matteo Bisiani',
    gender: 'M',
    height: '184',
    weight: '85',
    'date-birth': 1976,
    sport: 'Archery',
    game: '2000 Summer',
    team: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
];

const searchDataTest = [
  {
    id: 11799,
    name: 'Matteo Bisiani',
    gender: 'M',
    height: '184',
    weight: '85',
    'date-birth': 1976,
    sport: 'Archery',
    game: '2000 Summer',
    team: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
];

const medalistTest = [
  {
    noc: 'KOR',
    athleteName: 'Shim Seok-Hui',
    disciplina: 'Short Track Speed Skating',
    birth: 1997,
    game: '2014 Winter',
    height: '173',
    weight: '56',
    gender: 'F',
    medGold: 0,
    medSilver: 0,
    medBronze: 0,
    total: 0,
  },
  {
    noc: 'ITA',
    athleteName: 'Matteo Bisiani',
    disciplina: 'Archery',
    birth: 1976,
    game: '2000 Summer',
    height: '184',
    weight: '85',
    gender: 'M',
    medBronze: 0,
    medGold: 0,
    medSilver: 0,
    total: 1,
  },
  {
    noc: 'ITA',
    athleteName: 'Ilario Di Bu',
    disciplina: 'Archery',
    birth: 1966,
    game: '2008 Summer',
    height: '175',
    weight: '90',
    gender: 'M',
    medGold: 0,
    medSilver: 2,
    medBronze: 0,
    total: 2,
  },
];

const athleteNameFilterTest = {
  id: 28056,
  name: 'Ilario Di Bu',
  gender: 'M',
  height: '175',
  weight: '90',
  'date-birth': 1966,
  sport: 'Archery',
  game: '2008 Summer',
  team: 'Italy',
  noc: 'ITA',
  disciplinas: [
    {
      disciplina: "Archery Men's Team",
      temporada: 'Summer',
      año: 2000,
      ciudad: 'Sydney',
      medalla: 'Silver',
    },
    {
      disciplina: "Archery Men's Team",
      temporada: 'Summer',
      año: 2008,
      ciudad: 'Beijing',
      medalla: 'Silver',
    },
  ],
};

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('ordenar a los atletas segun altura de mayor a menor', () => {
    expect(sortData(dataTest, 'height', -1)).toEqual(sortDataTestMax);
  });

  it('ordenar a los atletas segun altura de menor a mayor', () => {
    expect(sortData(dataTest, 'height', 1)).toEqual(sortDataTestMin);
  });
});


describe('searchText', () => {
  it('is a function', () => {
    expect(typeof searchText).toBe('function');
  });

  it('retorna un array de objetos que contenga at en el nombre', () => {
    expect(searchText(dataTest, 'name', 'at')).toEqual(searchDataTest);
  });
});


describe('medalists', () => {
  it('is a function', () => {
    expect(typeof medalists).toBe('function');
  });

  it('retorna un array pero con datos calculados', () => {
    expect(medalists(dataTest)).toEqual(medalistTest);
  });
});

describe('athleteNameFilter', () => {
  it('is a function', () => {
    expect(typeof athleteNameFilter).toBe('function');
  });

  it('retorna el elemento encontrado por su nombre exacto', () => {
    expect(athleteNameFilter(dataTest, 'name', 'Ilario Di Bu')).toEqual(athleteNameFilterTest);
  });
});
