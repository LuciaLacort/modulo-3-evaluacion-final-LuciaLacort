const getDataFromAPi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then((resp) => resp.json())
      .then((data) => {
        const newArray = data.results.map((user) => {
          return {
            id: user.id,
            name: user.name,
            image: user.image,
            status: user.status,
            species: user.species,
            origin: user.origin.name,
            episodes: user.episode,
            gender: user.gender,
          };
        });
        return newArray;
      });
  };
  export default getDataFromAPi;
  