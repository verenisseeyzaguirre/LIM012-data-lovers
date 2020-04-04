// importando las funciones de data.js
import { medalists, sortData, athleteNameFilter } from './data.js';
// importando la data con la que se trabaja
import data from './data/atletas/atletas.js';
// almacenando la data por objeto(atleta) en dataAtleas
const athletesData = data.atletas;
// ejecuta la fx medallistas con dataAtletas, se guarda en la var. resultadoMedallistas lo q retorna
const medalistsResult = medalists(athletesData);
// ordena de mayor a menor por # de medallas el arrayMedallas(-1 es de mayor a menor y 1 vicev)
const mostMedals = sortData(medalistsResult, -1);


// funcion que MUESTRA 10 atletas ordenados por numero de medallas en Lista
// 'listaAtletas' es el ID del UL en el HTML
const athletesList = document.getElementById('athletesList');
const showMedalists = (array) => {
  let athletesRow = '';
  array.forEach((atleta, index) => {
    if (index < 10) {
      if (index % 2 === 0) {
        athletesRow += `        
          <a class="num white">${index + 1}</a>
          <a class="noc white">${atleta.noc}</a>
          <a class="name white" id="${atleta.athleteName}">${atleta.athleteName}</a>
          <a class="sport white">${atleta.disciplina.toUpperCase()}</a>
          <div class="medals white">
            <a class="goldMedal">${atleta.medGold}</a>
            <a class="silverMedal">${atleta.medSilver}</a>
            <a class="bronzeMedal">${atleta.medBronze}</a>  
          </div>
          <div class="total white">
            <a class="totalMedals">${atleta.total}</a>  
          </div>
      `;
      } else {
        athletesRow += `
          <a class="num grey">${index + 1}</a>
          <a class="noc grey">${atleta.noc}</a>
          <a class="name grey" id="${atleta.athleteName}">${atleta.athleteName}</a>
          <a class="sport grey">${atleta.disciplina.toUpperCase()}</a>
          <div class="medals grey">
            <a class="goldMedal">${atleta.medGold}</a>
            <a class="silverMedal">${atleta.medSilver}</a>
            <a class="bronzeMedal">${atleta.medBronze}</a>  
          </div>  
          <div class="total grey">
            <a class="totalMedals">${atleta.total}</a>
          </div>          
      `;
      }
    }
  });
  return athletesRow;
};

// 'estructura de fichaAtleta' es un ID del HTML
const athleteFile = document.getElementById('athleteFile');
const showAthlete = (atleta) => {
  let athleteInfo = '';
  athleteInfo = `
        <div class="whiteDiv">
          <img src="imagenes/flags/png/${atleta.noc}.png" width="100" alt="">
          <div class="nameNoc">
            <h2 class="name">${atleta.athleteName}</h2>
            <p class="noc">${atleta.noc}</p>
          </div>

          <div class="prizes">
            <a class="goldMedal">${atleta.medGold}</a>
            <a class="silverMedal">${atleta.medSilver}</a>
            <a class="bronzeMedal">${atleta.medBronze}</a>  
            <a class="totalMedals">${atleta.total}</a>
          </div>
        </div>
        
        <div class="greyDiv">
          <div class="firstRow">
            <a>
              <h3>DEPORTE</h3>
              <p>${atleta.disciplina.toUpperCase()}</p>
            </a>
            
            <a>
              <h3>FECHA DE NACIMIENTO</h3>
              <p>${atleta.birth}</p>
            </a>
            
            <a>
              <h3>JUEGOS OLÍMPICOS</h3>
              <p>${atleta.game}</p>
            </a>
          </div>

          <div class="secondRow">
            <a>
              <h3>ALTURA</h3>
              <p>${atleta.height}</p>
            </a>
            
            <a>
              <h3>PESO</h3>
              <p>${atleta.weight}</p>
            </a>
            
            <a>
              <h3>SEXO</h3>
              <p>${atleta.gender}</p>
            </a>
          </div>
        </div>
 
      `;
  return athleteInfo;
};

const removeClassPerId = (id, clase) => {
  document.getElementById(id).classList.remove(clase);
};
const addClassPerId = (id, clase) => {
  document.getElementById(id).classList.add(clase);
};

let press = 0;
const orderMedals = () => {
  if (press === 0) {
    press = 1;
    const lessMedals = sortData(medalistsResult, 1);
    athletesList.innerHTML = showMedalists(lessMedals);
    addClassPerId('athletePage', 'hide');
  } else if (press === 1) {
    press = 0;
    const invertMedals = sortData(medalistsResult, -1);
    athletesList.innerHTML = showMedalists(invertMedals);
    addClassPerId('athletePage', 'hide');
  }
};
// Pantalla FICHA ATLETA
const showAthleteScreen = (athleteNameFromList) => {
  addClassPerId('medalsPage', 'hide');
  console.log('entro a ficha de atleta');
  removeClassPerId('header', 'hide');
  removeClassPerId('athletePage', 'hide');
  addClassPerId('menu', 'hide');
  // llamando a la funcion de data.js
  const atheleteNameMedalist = athleteNameFilter(medalistsResult, athleteNameFromList);
  athleteFile.innerHTML = showAthlete(atheleteNameMedalist);
};

// reconoce el clic en nombre de la lista en MEDALLAS para q se active la fx FICHA ATLETA
const elementEventClic = () => {
  const listAthlete = document.querySelectorAll('.list');
  listAthlete.forEach(itemAthlete => itemAthlete.addEventListener('click', (event) => {
    const athleteName = event.target.closest('.name').id;
    console.log('entro a la funcion elementEventClic');
    showAthleteScreen(athleteName);
  }));
};

// Pantalla MEDALLAS
const showMedalsScreen = () => {
  addClassPerId('menu', 'hide');
  // imprimiento el resultados de la fx, medalleros, en el HTML
  athletesList.innerHTML = showMedalists(mostMedals);
  console.log('entro showMedalsScreen');
  elementEventClic();
  // Ejecutar la funcion de ORDENAR luego de presionar el boton
  const orderButton = document.getElementById('btnOrder');
  orderButton.addEventListener('click', orderMedals);
  removeClassPerId('header', 'hide');
  removeClassPerId('medalsPage', 'hide');
  addClassPerId('athletePage', 'hide');
};

// Ejecutar la funcion de para mostrar PAGE MEDALLAS
const medalsButton1 = document.getElementById('btnMedallas1');
const medalsButton = document.getElementById('btnMedallas');
medalsButton1.addEventListener('click', showMedalsScreen);
medalsButton.addEventListener('click', showMedalsScreen);

const backMedalist = () => {
  showMedalsScreen();
};
const backButton = document.getElementById('back');
backButton.addEventListener('click', backMedalist);
