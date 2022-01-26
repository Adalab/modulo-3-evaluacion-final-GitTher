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

    const getBlood = () => {
        if (props.character.blood === "half-blood") {
            return "mestizo";
        } else if (props.character.blood === "pure-blood") {
            return "sangre pura";
        } else if (props.character.blood === "muggleborn") {
            return "hijo de muggles";
        } else if (props.character.blood === "") {
            return "desconocida";
        }
    }

    return (
        <Link to={`/character/${props.character.id}`}>
            <article>
                <img src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <h3>{props.character.name}</h3>
                <p>{getSpecies()}</p>
                <p>Ascendencia: {getBlood()}</p>


            </article>
        </Link>
    )
}

export default CharacterCard