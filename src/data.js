// funcion que almacena el numero de medallas segun tipo y CALCULA el total de medallas en un ARRAY
export const medalists = (arrAthletes) => {
  const arrayMedals = [];
  Object.keys(arrAthletes).forEach((key) => {
    if (arrAthletes[key].disciplinas) {
      const medGold = arrAthletes[key].disciplinas.filter(discip => (discip.medalla === 'Gold'));
      const medSilver = arrAthletes[key].disciplinas.filter(discip => (discip.medalla === 'Silver'));
      const medBronze = arrAthletes[key].disciplinas.filter(discip => (discip.medalla === 'Bronze'));
      arrayMedals.push({
        noc: arrAthletes[key].noc,
        athleteName: arrAthletes[key].name,
        disciplina: arrAthletes[key].sport,
        birth: arrAthletes[key]['date-birth'],
        game: arrAthletes[key].game,
        height: arrAthletes[key].height,
        weight: arrAthletes[key].weight,
        gender: arrAthletes[key].gender,
        medGold: medGold.length,
        medSilver: medSilver.length,
        medBronze: medBronze.length,
        total: medGold.length + medSilver.length + medBronze.length,
      });
    } else {
      arrayMedals.push({
        noc: arrAthletes[key].noc,
        athleteName: arrAthletes[key].name,
        disciplina: arrAthletes[key].sport,
        birth: arrAthletes[key]['date-birth'],
        game: arrAthletes[key].game,
        height: arrAthletes[key].height,
        weight: arrAthletes[key].weight,
        gender: arrAthletes[key].gender,
        medGold: 0,
        medSilver: 0,
        medBronze: 0,
        total: 0,
      });
    }
  });
  return arrayMedals;
};

// funcion para ordenar
export const sortData = (data, sortBy, sortOrder) => {
  const orderedData = data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return sortOrder;
    }
    return -sortOrder;
  });
  return orderedData;
};

// funcion para filtrar por nombre el .athleteName proviene de medalist
export const athleteNameFilter = (arrAthletes, propiedad, nombre) => {
  const objetoEncontrado = arrAthletes.filter(medallero => (medallero[propiedad] === nombre))[0];
  return objetoEncontrado;
};

//  funcion para encontrar elemento
export const searchText = (data, property, condition) => {
  const searchAthlete = data.filter(element => (element[property]).indexOf(condition) !== -1);
  return searchAthlete;
};
