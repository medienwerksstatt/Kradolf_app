


const getDataFromApi = (url,endpoint) => {
    return fetch(`${url}/wp-json/wp/v2/${endpoint}`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
}

export default getDataFromApi