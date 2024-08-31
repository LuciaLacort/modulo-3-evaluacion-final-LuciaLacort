const getDataFromAPi = () => {
    return fetch('https://hp-api.onrender.com/api/characters')
      .then((resp) => resp.json())
      .then((data) => {
        const newArray = data.map((user) => {
          return {
            id: user.id,
            name: user.name,
            image: user.image,
            alive: user.alive,
            ancestry: user.ancestry || 'Unknown',
            origin: user.house || 'Unknown', //origin.name
            episodes: user.actor || 'Unknown', //episode
            gender: user.gender,
          };
        });
        return newArray;
      });
  };
  export default getDataFromAPi;
  