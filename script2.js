fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  .then(function(response) {
    return response.json();
  })
  .then(function(pokemonData) {
    console.log(pokemonData);

    fetch(pokemonData.location_area_encounters)
      .then(function(response) {
        return response.json();
      })
      
      //////////////////////////////////////////////////////
      .then(function(encounterData) {
        console.log(encounterData[1].location_area.name);
        console.log(encounterData[2].location_area.name);
        console.log(encounterData[3].location_area.name);
        console.log(encounterData[4].location_area.name);
        console.log(encounterData[5].location_area.name);
      })
      /////////////////////////////////////////////////////

      .catch(function(err) {
        console.log(err); M
      });
  })
  .catch(function(error) {
    console.log(error);
  });



async function getPokemonData() {
    try {
    const response = await fetch();
    const pokemonData = await response.json();
  } catch (error) {

  } 

}