import CharacterCard from "./CharacterCard"

const CharacterList = (props) => {
    const characterData = props.characters.map((character) => {
        return (
            <li key={character.id}>
                <CharacterCard character={character} />
            </li >
        )
    })

    const notFound = <p>No hay ningún personaje llamado {props.name}</p>

    return (
        <section>
            <ul>
                {props.characters.length >= 1 ? characterData : notFound}
            </ul>
        </section>
    )
}

export default CharacterList