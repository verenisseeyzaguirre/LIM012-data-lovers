// import { example } from './data.js';
// import { anotherExample } from './data.js';
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';
import data from './data/atletas/atletas.js';

const athletesData = data.atletas;

// for (k in orderedNameArray)  for (let j = 0; j < data.atletas[i].disciplinas.length; j++)
const medalists = (arrAthletes) => {
  const arrayMedals = [];
  for (let i in arrAthletes) {
    if (arrAthletes[i].disciplinas) {
      const medGold = arrAthletes[i].disciplinas.filter(discip => (discip.medalla === 'Gold'));
      const medSilver = arrAthletes[i].disciplinas.filter(discip => (discip.medalla === 'Silver'));
      const medBronze = arrAthletes[i].disciplinas.filter(discip => (discip.medalla === 'Bronze'));
      arrayMedals.push({
        'noc' : arrAthletes[i].noc,
        'athleteName' : arrAthletes[i].name,
        'disciplina' : arrAthletes[i].sport,
        'medGold' : medGold.length,
        'medSilver': medSilver.length,
        'medBronze': medBronze.length,
        'total': medGold.length + medSilver.length + medBronze.length,
      })
  } else {
    arrayMedals.push({
      'noc' : arrAthletes[i].noc,
      'athleteName' : arrAthletes[i].name,
      'disciplina' : arrAthletes[i].sport,
      'medGold' : 0,
      'medSilver': 0,
      'medBronze': 0,
      'total': 0,
    })
  }
} 
  return arrayMedals;
};

// ejecuta la fx medalists con la data de Atletas y se guarda en la variable result medallistas
const medalistsResult = medalists(athletesData);

// ordena de mayor a menor por num de medallas el arrayMedallas
const medalistOrder = medalistsResult.sort((a, b) => {
  if (a.total > b.total) {
    return -1;
  }
  return 1;
});
console.log(medalistOrder);
// no pude ordenar las lista nameNac por nombre, segundo parametro
// funcion de ordenar por nombre A a Z la data inicial
const orderedName = athletesData.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});
// mostrar ciertos datos de la datos ordenados por nombre
const orderedNameArray = orderedName.map(({
  noc, name, sport, disciplinas,
}) => [`${noc}, ${name}, ${sport.toUpperCase()}`, disciplinas]);

// console.log(athletesData);

const addClassPerId = (id, clase) => {
  document.getElementById(id).classList.add(clase);
};

const athletesList = document.getElementById("athletesList");

const showMedalists = (array) => {
  let athletesRow = '';
  array.forEach((atleta, index) => {
    if (index < 10) {
      if (index % 2 === 0) {
        athletesRow += `
      <li class="white">
          <a>${index + 1}</a>
          <a class="noc">${atleta.noc}</a> 
          <a class="name">${atleta.athleteName}</a>
          <a class="disciplina">${atleta.disciplina.toUpperCase()}</a>
          <a class="goldMedal">${atleta.medGold}</a>
          <a class="silverMedal">${atleta.medSilver}</a>
          <a class="bronzeMedal">${atleta.medBronze}</a>
          <div class="totalMedals">
          <a class="total">${atleta.total}</a>  
          <img class="laurel" src="imagenes/header and main icons/002-laurel.png" width="45">
        </div> 
      </li>
      `;
      } else {
        athletesRow += `
      <li class="grey">
          <a>${index + 1}</a> 
          <a class="noc">${atleta.noc}</a> 
          <a class="name">${atleta.athleteName}</a>
          <a class="disciplina">${atleta.disciplina.toUpperCase()}</a>
          <a class="goldMedal">${atleta.medGold}</a>
          <a class="silverMedal">${atleta.medSilver}</a>
          <a class="bronzeMedal">${atleta.medBronze}</a>
          <div class="totalMedals">
            <a class="total">${atleta.total}</a>  
            <img class="laurel" src="imagenes/header and main icons/002-laurel.png" width="45">
          </div>  
      </li>
      `;
      }
    }
  });
  return athletesRow;
};

athletesList.innerHTML = showMedalists(medalistOrder);

let press = 0;
const orderMedals = () => {
  if (press === 0) {
    console.log('de menor a mayor');
    press = 1;
    const disorderMedalists = medalistsResult.sort((a, b) => {
      if (a.total > b.total) {
        return 1;
      }
      return -1;
    });
    athletesList.innerHTML = showMedalists(disorderMedalists);
  } else if (press === 1) {
    console.log('de mayor a menor');
    press = 0;
    const medalistOrder = medalistsResult.sort((a, b) => {
      if (a.total > b.total) {
        return -1;
      }
      return 1;
    });
    athletesList.innerHTML = showMedalists(medalistOrder);
  }
};

// Ejecutar la funcion de ordenar
const orderButton = document.getElementById('btnOrder');
orderButton.addEventListener('click', orderMedals);


// imprime la bandera ubicada en la posicion 30 de la data de ese url
const url = 'https://restcountries.eu/rest/v2/all';
fetch(url)
  .then(resp => resp.json())
  .then((flag) => {
    document.getElementById('flags').innerHTML = `<img class="flags" src="${flag[30].flag}">`;
  })
  .catch((error) => {
    console.log(JSON.stringify(error));
});
