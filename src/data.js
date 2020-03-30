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
export const sortData = (data, sortOrder) => {
  const orderedData = data.sort((a, b) => {
    if (a.total > b.total) {
      return sortOrder;
    }
    return -sortOrder;
  });
  return orderedData;
};
