// importando las funciones de data.js
import { medalists, sortData } from './data.js';
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
        <div class="white">
            <a>${index + 1}</a>
            <a class="noc">${atleta.noc}</a>
            <a id="nombreAtleta">${atleta.athleteName}</a>
            <a class="disciplina">${atleta.disciplina.toUpperCase()}</a>
            <a class="goldMedal">${atleta.medGold}<a>
            <a class="silverMedal">${atleta.medSilver}<a>
            <a class="bronzeMedal">${atleta.medBronze}<a>  
            <a class="total">${atleta.total}</a>
          </div>
      `;
      } else {
        athletesRow += `
        <div class="grey">
            <a>${index + 1}</a>
            <a class="noc">${atleta.noc}</a>
            <a id="nombreAtleta">${atleta.athleteName}</a>
            <a class="disciplina">${atleta.disciplina.toUpperCase()}</a>
            <a class="goldMedal">${atleta.medGold}<a>
            <a class="silverMedal">${atleta.medSilver}<a>
            <a class="bronzeMedal">${atleta.medBronze}<a>  
            <a class="total">${atleta.total}</a>
          </div>
      `;
      }
    }
  });
  return athletesRow;
};

/*
const buscar = () => {
  // const datoAtleta = { name: 'Matteo Bisiani', noc: 'ITA' };
  // mostrarMedallistas(datoAtleta);
  listaAtletas.innerHTML = 'pais nombre deporte y numero de medallas';
  console.log('aun no hay funcion');
};

// Ejecutar la funcion de BUSCAR luego de presionar el boton
const botonSearch = document.getElementById('btnSearch');
botonSearch.addEventListener('click', buscar);
*/

// 'fichaAtleta' es el ID del UL en el HTML
const athleteFile = document.getElementById('athleteFile');
const showAthlete = (array) => {
  let athleteInfo = '';
  array.forEach((atleta, index) => {
    if (index === 10) {
      athleteInfo = `
      <li>
        <div class="whiteDiv">
          <div class="figure">
            <img src="imagenes/flags/png/261-kiribati.png" width="100" alt="">
            <h2 class="name">${atleta.athleteName}</h2>
            <p class="noc">${atleta.noc}</p> 
          </div>

          <div>
            <a class="goldMedal">${atleta.medGold}<a>
            <a class="silverMedal">${atleta.medSilver}<a>
            <a class="bronzeMedal">${atleta.medBronze}<a>
            <div class="totalMedals">
              <a class="total">${atleta.total}</a>
              <img class="laurel" src="imagenes/header and main icons/002-laurel.png" width="45">
            </div>
          </div>
        </div>
        
        <div class="greyDiv">
        <div>
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

          <div>
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
      </li>
      `;
    }
  });
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
// imprimiento el resultados de la fx, filasAtleta, en el HTML
const showAthleteScreen = () => {
  addClassPerId('medalsPage', 'hide');
  athleteFile.innerHTML = showAthlete(mostMedals);
  removeClassPerId('header', 'hide');
  removeClassPerId('athletePage', 'hide');
};


// imprimiento el resultados de la fx, filasAtleta, en el HTML
const showMedalsScreen = () => {
  addClassPerId('menu', 'hide');
  // imprimiento el resultados de la fx, filasAtleta, en el HTML
  athletesList.innerHTML = showMedalists(mostMedals);
  // Ejecutar la funcion de ORDENAR luego de presionar el boton
  const orderButton = document.getElementById('btnOrder');
  orderButton.addEventListener('click', orderMedals);
  removeClassPerId('header', 'hide');
  removeClassPerId('medalsPage', 'hide');
  addClassPerId('athletePage', 'hide');
};
// Ejecutar la funcion de para mostrarFicha Atleta luego de presionar el boton
const searchButton = document.getElementById('btnSearch');
searchButton.addEventListener('click', showAthleteScreen);
// Ejecutar la funcion de para mostrar PAGE Medallas Atleta luego de presionar el boton
const medalsButton = document.getElementById('btnMedallas');
medalsButton.addEventListener('click', showMedalsScreen);

/*
// buscando imprimir ficha segun atleta
const imprimirNombreAtleta = () => {
console.log('atleta');
};
const nombreFichaAtleta = document.getElementsById('nombreAtleta');
nombreFichaAtleta.addEventListener('click', imprimirNombreAtleta);
*/
