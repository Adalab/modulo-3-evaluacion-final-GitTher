import { Link } from 'react-router-dom';

const CharacterCard = (props) => {

    const getSpecies = () => {
        if (props.character.species === "human") {
            return "humano";
        } else if (props.character.species === "ghost") {
            return "fantasma"
        } else if (props.character.species === "werewolf") {
            return "hombre lobo"
        } else if (props.character.species === "half-giant") {
            return "medio gigante"
        }
    }

    return (
        <article>
            <Link to={`/character/${props.character.id}`}>
                <img src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <h3>{props.character.name}</h3>
                <p>{getSpecies()}</p>
            </Link>

        </article>
    )
}

export default CharacterCard