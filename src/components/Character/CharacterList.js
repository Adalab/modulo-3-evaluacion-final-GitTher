import CharacterCard from "./CharacterCard"

const CharacterList = (props) => {
    const characterData = props.characters.map((character) => {
        return (
            <li>
                <CharacterCard character={character} />
            </li>
        )
    })
    return (
        <section>
            <ul>
                <li>
                    {characterData}
                </li>
            </ul>
        </section>
    )
}

export default CharacterList