import CharacterCard from "./CharacterCard"


const CharacterList = (props) => {
    const characterData = props.characters.map((character) => {
        return (
            <li key={character.id}>
                <CharacterCard character={character} />
            </li >
        )
    })
    return (
        <section>
            <ul>
                {characterData}
            </ul>
        </section>
    )
}

export default CharacterList