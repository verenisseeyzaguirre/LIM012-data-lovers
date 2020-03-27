/* // estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */

// funcion que almacena el numero de medallas segun tipo y CALCULA el total de medallas en un ARRAY
export const medallistas = (arrAtletas) => {
  const arrayMedallas = [];
  Object.keys(arrAtletas).forEach((key) => {
    if (arrAtletas[key].disciplinas) {
      const medGold = arrAtletas[key].disciplinas.filter(discip => (discip.medalla === 'Gold'));
      const medSilver = arrAtletas[key].disciplinas.filter(discip => (discip.medalla === 'Silver'));
      const medBronze = arrAtletas[key].disciplinas.filter(discip => (discip.medalla === 'Bronze'));
      arrayMedallas.push({
        noc: arrAtletas[key].noc,
        nombreAtleta: arrAtletas[key].name,
        disciplina: arrAtletas[key].sport,
        birth: arrAtletas[key]['date-birth'],
        game: arrAtletas[key].game,
        height: arrAtletas[key].height,
        weight: arrAtletas[key].weight,
        gender: arrAtletas[key].gender,
        medGold: medGold.length,
        medSilver: medSilver.length,
        medBronze: medBronze.length,
        total: medGold.length + medSilver.length + medBronze.length,
      });
    } else {
      arrayMedallas.push({
        noc: arrAtletas[key].noc,
        nombreAtleta: arrAtletas[key].name,
        disciplina: arrAtletas[key].sport,
        birth: arrAtletas[key]['date-birth'],
        game: arrAtletas[key].game,
        height: arrAtletas[key].height,
        weight: arrAtletas[key].weight,
        gender: arrAtletas[key].gender,
        medGold: 0,
        medSilver: 0,
        medBronze: 0,
        total: 0,
      });
    }
  });
  return arrayMedallas;
};

// funcion para ordenar
export const sortData = (data, sortOrder) => {
  const dataOrdenada = data.sort((a, b) => {
    if (a.total > b.total) {
      return sortOrder;
    }
    return -sortOrder;
  });
  return dataOrdenada;
};
