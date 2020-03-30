// importando las funciones de data.js
<<<<<<< HEAD
import { medallistas, sortData } from './data.js';
// importando la data con la que se trabaja
import data from './data/atletas/atletas.js';
// almacenando la data por objeto(atleta) en dataAtleas
const dataAtletas = data.atletas;
// ejecuta la fx medallistas con dataAtletas, se guarda en la var. resultadoMedallistas lo q retorna
const resultadoMedallistas = medallistas(dataAtletas);
// ordena de mayor a menor por # de medallas el arrayMedallas(-1 es de mayor a menor y 1 vicev)
const mayorMedallas = sortData(resultadoMedallistas, -1);
// funcion que MUESTRA 10 atletas ordenados por numero de medallas en Lista
// 'listaAtletas' es el ID del UL en el HTML
const listaAtletas = document.getElementById('listaAtletas');
const mostrarMedallistas = (array) => {
  let filaAtleta = '';
  array.forEach((atleta, index) => {
    if (index < 10) {
      if (index === 0) {
        filaAtleta += `
        <tr>
          <th>#</th>
=======
import { medalists, sortData } from "./data.js";
// importando la data con la que se trabaja
import data from "./data/atletas/atletas.js";
// almacenando la data por objeto(atleta) en dataAtleas
const athletesData = data.atletas;
// ejecuta la fx medallistas con dataAtletas, se guarda en la var. resultadoMedallistas lo q retorna
const medalistsResult = medalists(athletesData);
// ordena de mayor a menor por # de medallas el arrayMedallas(-1 es de mayor a menor y 1 vicev)
const mostMedals = sortData(medalistsResult, -1);
// funcion que MUESTRA 10 atletas ordenados por numero de medallas en Lista
// 'listaAtletas' es el ID del UL en el HTML
const athletesList = document.getElementById("athletesList");
const showMedalists = (array) => {
  let athletesRow = "";
  array.forEach((atleta, index) => {
    if (index < 10) {
      if (index === 0) {
        athletesRow += `
        <tr>
          <th>N°</th>
>>>>>>> 6aa7e5989966dde14294c1040a0f92f20c1061aa
          <th>PAÍS</th>
          <th>MEDALLISTA</th>
          <th>DISCIPLINAS</th>
          <th>MEDALLAS</th>
          <th>
            <button id="btnOrder">
              <img src="imagenes/header and main icons/013-arrows-1.png" width="20" alt="">
            </button>
          </th>  
        </tr>
        <tr class="white">
          <td>${index + 1}</td>
          <td class="noc">${atleta.noc}</td>
          <td>
<<<<<<< HEAD
            <a href="#" id="nombreAtleta">${atleta.nombreAtleta}</a>
=======
            <a href="#"  id="nombreAtleta">${atleta.athleteName}</a>
>>>>>>> 6aa7e5989966dde14294c1040a0f92f20c1061aa

          </td>
          <td class="disciplina">${atleta.disciplina.toUpperCase()}</td>
          <td> 
<<<<<<< HEAD
            <a class="medallaOro">${atleta.medGold}<a>
            <a class="medallaSilver">${atleta.medSilver}<a>
            <a class="medallaBronze">${atleta.medBronze}<a>  
          </td>
          <td>${atleta.total}</td>
        <tr>
        `;
      } else if (index % 2 === 0) {
        filaAtleta += `
        <tr class="white">
          <td>${index + 1}</td>
          <td class="noc">${atleta.noc}</td>
          <td class="name">${atleta.nombreAtleta}</td>
          <td class="disciplina">${atleta.disciplina.toUpperCase()}</td>
          <td> 
            <a class="medallaOro">${atleta.medGold}<a>
            <a class="medallaSilver">${atleta.medSilver}<a>
            <a class="medallaBronze">${atleta.medBronze}<a>  
          </td>
          <td>${atleta.total}</td>
        <tr>
      `;
      } else {
        filaAtleta += `
        <tr class="pink">
          <td>${index + 1}</td>
          <td class="noc">${atleta.noc}</td>
          <td class="name">${atleta.nombreAtleta}</td>
          <td class="disciplina">${atleta.disciplina.toUpperCase()}</td>
          <td> 
            <a class="medallaOro">${atleta.medGold}<a>
            <a class="medallaSilver">${atleta.medSilver}<a>
            <a class="medallaBronze">${atleta.medBronze}<a>  
          </td>
          <td>${atleta.total}</td>
=======
            <a class="goldMedal">${atleta.medGold}<a>
            <a class="silverMedal">${atleta.medSilver}<a>
            <a class="bronzeMedal">${atleta.medBronze}<a>  
          </td>
          <td class="totalMedals">
            <a class="total">${atleta.total}</a>
            <img class="laurel" src="imagenes/header and main icons/002-laurel.png" width="45">
          </td>
        <tr>
        `;
      } else if (index % 2 === 0) {
        athletesRow += `
        <tr class="white">
          <td>${index + 1}</td>
          <td class="noc">${atleta.noc}</td>
          <td class="name">${atleta.athleteName}</td>
          <td class="disciplina">${atleta.disciplina.toUpperCase()}</td>
          <td> 
            <a class="goldMedal">${atleta.medGold}<a>
            <a class="silverMedal">${atleta.medSilver}<a>
            <a class="bronzeMedal">${atleta.medBronze}<a>  
          </td>
          <td class="totalMedals">
            <a class="total">${atleta.total}</a>
            <img class="laurel" src="imagenes/header and main icons/002-laurel.png" width="45">
          </td>
        <tr>
      `;
      } else {
        athletesRow += `
        <tr class="grey">
          <td>${index + 1}</td>
          <td class="noc">${atleta.noc}</td>
          <td class="name">${atleta.athleteName}</td>
          <td class="disciplina">${atleta.disciplina.toUpperCase()}</td>
          <td> 
            <a class="goldMedal">${atleta.medGold}<a>
            <a class="silverMedal">${atleta.medSilver}<a>
            <a class="bronzeMedal">${atleta.medBronze}<a>  
          </td>
          <td class="totalMedals">
            <a class="total">${atleta.total}</a>
            <img class="laurel" src="imagenes/header and main icons/002-laurel.png" width="45">
          </td>
>>>>>>> 6aa7e5989966dde14294c1040a0f92f20c1061aa
        <tr>
      `;
      }
    }
  });
<<<<<<< HEAD
  return filaAtleta;
=======
  return athletesRow;
>>>>>>> 6aa7e5989966dde14294c1040a0f92f20c1061aa
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
<<<<<<< HEAD
const fichaAtleta = document.getElementById('fichaAtleta');
const mostrarAtleta = (array) => {
  let infoAtleta = '';
  array.forEach((atleta, index) => {
    if (index === 10) {
      infoAtleta = `
      <li>
          <a class="name">${atleta.nombreAtleta}</a>
          <br>
          <a class="noc">${atleta.noc}</a> 
          <br>
          <a>${atleta.medGold}</a>
          <a>${atleta.medSilver}</a>
          <a>${atleta.medBronze}</a>
          <a>${atleta.total}</a>
          <br>
          <a>${atleta.disciplina.toUpperCase()}</a>
          <a>${atleta.game}</a>
          <a>${atleta.birth}</a>
          <br>
          <a>${atleta.height}</a>
          <a>${atleta.weight}</a>
          <a>${atleta.gender}</a>
=======
const athleteFile = document.getElementById("athleteFile");
const showAthlete = (array) => {
  let athleteInfo = "";
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
>>>>>>> 6aa7e5989966dde14294c1040a0f92f20c1061aa
      </li>
      `;
    }
  });
<<<<<<< HEAD
  return infoAtleta;
};
const removerClasePorid = (id, clase) => {
  document.getElementById(id).classList.remove(clase);
};
const agregarClasePorId = (id, clase) => {
  document.getElementById(id).classList.add(clase);
};

let presionado = 0;
const ordenarMedallero = () => {
  if (presionado === 0) {
    presionado = 1;
    const menosMedallas = sortData(resultadoMedallistas, 1);
    listaAtletas.innerHTML = mostrarMedallistas(menosMedallas);
    agregarClasePorId('pageAtleta', 'hide');
  } else if (presionado === 1) {
    presionado = 0;
    const invertirMedallas = sortData(resultadoMedallistas, -1);
    listaAtletas.innerHTML = mostrarMedallistas(invertirMedallas);
    agregarClasePorId('pageAtleta', 'hide');
  }
};
// imprimiento el resultados de la fx, filasAtleta, en el HTML
const mostrarPantallaAtleta = () => {
  agregarClasePorId('pageMedallas', 'hide');
  fichaAtleta.innerHTML = mostrarAtleta(mayorMedallas);
  removerClasePorid('pageAtleta', 'hide');
=======
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
    addClassPerId("athletePage", "hide");
  } else if (press === 1) {
    press = 0;
    const invertMedals = sortData(medalistsResult, -1);
    athletesList.innerHTML = showMedalists(invertMedals);
    addClassPerId("athletePage", "hide");
  }
};
// imprimiento el resultados de la fx, filasAtleta, en el HTML
const showAthleteScreen = () => {
  addClassPerId("medalsPage", "hide");
  athleteFile.innerHTML = showAthlete(mostMedals);
  removeClassPerId("header", "hide");
  removeClassPerId("athletePage", "hide");
>>>>>>> 6aa7e5989966dde14294c1040a0f92f20c1061aa
};


// imprimiento el resultados de la fx, filasAtleta, en el HTML
<<<<<<< HEAD
const mostrarPantallaMedallas = () => {
  agregarClasePorId('pageInicial', 'hide');
  // imprimiento el resultados de la fx, filasAtleta, en el HTML
  listaAtletas.innerHTML = mostrarMedallistas(mayorMedallas);
  // Ejecutar la funcion de ORDENAR luego de presionar el boton
  const botonOrder = document.getElementById('btnOrder');
  botonOrder.addEventListener('click', ordenarMedallero);

  removerClasePorid('pageMedallas', 'hide');
  agregarClasePorId('pageAtleta', 'hide');
};
// Ejecutar la funcion de para mostrarFicha Atleta luego de presionar el boton
const botonSearch = document.getElementById('btnSearch');
botonSearch.addEventListener('click', mostrarPantallaAtleta);
// Ejecutar la funcion de para mostrar PAGE Medallas Atleta luego de presionar el boton
const botonMedallas = document.getElementById('btnMedallas');
botonMedallas.addEventListener('click', mostrarPantallaMedallas);
=======
const showMedalsScreen = () => {
  addClassPerId("menu", "hide");
  // imprimiento el resultados de la fx, filasAtleta, en el HTML
  athletesList.innerHTML = showMedalists(mostMedals);
  // Ejecutar la funcion de ORDENAR luego de presionar el boton
  const orderButton = document.getElementById("btnOrder");
  orderButton.addEventListener("click", orderMedals);
  removeClassPerId("header", "hide");
  removeClassPerId("medalsPage", "hide");
  addClassPerId("athletePage", "hide");
};
// Ejecutar la funcion de para mostrarFicha Atleta luego de presionar el boton
const searchButton = document.getElementById("btnSearch");
searchButton.addEventListener("click", showAthleteScreen);
// Ejecutar la funcion de para mostrar PAGE Medallas Atleta luego de presionar el boton
const medalsButton = document.getElementById("btnMedallas");
medalsButton.addEventListener("click", showMedalsScreen);
>>>>>>> 6aa7e5989966dde14294c1040a0f92f20c1061aa

/*
// buscando imprimir ficha segun atleta
const imprimirNombreAtleta = () => {
console.log('atleta');
};
const nombreFichaAtleta = document.getElementsById('nombreAtleta');
nombreFichaAtleta.addEventListener('click', imprimirNombreAtleta); 
*/
