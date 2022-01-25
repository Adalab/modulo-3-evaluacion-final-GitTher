import CharacterCard from "./CharacterCard"
import { v4 as uuid } from 'uuid';

const CharacterList = (props) => {
    const characterData = props.characters.map((character) => {
        return (
            <li key={uuid()}>
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