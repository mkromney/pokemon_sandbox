fetch('https://pokeapi.co/api/v2/pokemon/zubat/')
  .then(function(response) {
    return response.json();
  })
  .then(function(pokemonData) {
    console.log(pokemonData);

    fetch(pokemonData.location_area_encounters)
      .then(function(response) {
        return response.json();
      })
      then(function(encounterData) {
        // console.log(encounterData);

        encounterData.forEach(function(encounterLocation) {
          encounterLocation.version_details.forEach(function(versionData) {
              console.log(versionData.version_name)
            })
         })
      })
      .catch(function(err) {
        console.log(err);
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