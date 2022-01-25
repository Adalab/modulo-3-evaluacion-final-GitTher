const callToApi = (house) => {
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
        .then((response) => response.json())
        .then((data) => {
            const charactersData = data.map((character) => {
                return {
                    name: character.name,
                    altnames: character.alternate_names,
                    species: character.species,
                    gender: character.gender,
                    house: character.house,
                    alive: character.alive,
                    image: character.image,
                };
            });
            return charactersData;
        });
};

export default callToApi