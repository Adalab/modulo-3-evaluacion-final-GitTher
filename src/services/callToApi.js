const callToApi = (house) => {
    return fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
        .then((response) => response.json())
        .then((data) => {
            const charactersData = data.map((character, index) => {
                return {
                    name: character.name,
                    altnames: character.alternate_names,
                    species: character.species,
                    gender: character.gender,
                    house: character.house,
                    alive: character.alive,
                    image: character.image,
                    actor: character.actor,
                    blood: character.ancestry,
                    id: character.name.replace(/\s+/g, '-') + "-by-" + character.actor.replace(/\s+/g, '-') + "-" + index,
                };

            });
            return charactersData;
        });
};

export default callToApi