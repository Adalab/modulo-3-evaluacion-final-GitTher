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

    const notFound = <p>No hay ningún personaje llamado {props.name}</p>

    return (
        <section>
            <ul>
                {props.characters.length > 1 ? characterData : notFound}
            </ul>
        </section>
    )
}

export default CharacterList