const getDataFromAPi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((resp) => {
      if (!resp.ok) {
        // Verifica si la respuesta no es exitosa
        throw new Error('Error al obtener los datos de la API');
      }
      return resp.json();
    })
    .then((data) => {
      const newArray = data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          image: user.image,
          alive: user.alive,
          ancestry: user.ancestry || 'Unknown',
          origin: user.house || 'Unknown', // origin.name
          episodes: user.actor || 'Unknown', // episode
          gender: user.gender,
        };
      });
      return newArray;
    })
    .catch((error) => {
      // Muestra un mensaje amigable o maneja el error como necesites
      console.error('Error fetching data:', error);
      return { error: true, message: 'No se pudieron obtener los datos. Por favor, inténtalo de nuevo más tarde.' };
    });
};

export default getDataFromAPi;
