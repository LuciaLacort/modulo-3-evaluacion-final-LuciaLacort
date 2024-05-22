const getDataFromAPi = () => {
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
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
            episodes: user.episode.length
          };
        });
        return newArray;
      });
  };
  export default getDataFromAPi;
  