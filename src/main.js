// importando las funciones de data.js
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
            <a href="#" id="nombreAtleta">${atleta.nombreAtleta}</a>

          </td>
          <td class="disciplina">${atleta.disciplina.toUpperCase()}</td>
          <td> 
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
        <tr>
      `;
      }
    }
  });
  return filaAtleta;
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
      </li>
      `;
    }
  });
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
};


// imprimiento el resultados de la fx, filasAtleta, en el HTML
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

/*
// buscando imprimir ficha segun atleta
const imprimirNombreAtleta = () => {
console.log('atleta');
};
const nombreFichaAtleta = document.getElementsById('nombreAtleta');
nombreFichaAtleta.addEventListener('click', imprimirNombreAtleta); 
*/
