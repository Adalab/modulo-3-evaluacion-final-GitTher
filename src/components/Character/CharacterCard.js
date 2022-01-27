import '../../styles/components/Character/CharacterCard.scss'

import { Link } from 'react-router-dom';

const CharacterCard = (props) => {

    const getSpecies = () => {
        if (props.character.species === "human") {
            return "Humano";
        } else if (props.character.species === "ghost") {
            return "Fantasma"
        } else if (props.character.species === "werewolf") {
            return "Hombre lobo"
        } else if (props.character.species === "half-giant") {
            return "Medio gigante"
        }
    }

    const getBlood = () => {
        if (props.character.blood === "half-blood") {
            return "Mestizo";
        } else if (props.character.blood === "pure-blood") {
            return "Sangre pura";
        } else if (props.character.blood === "muggleborn") {
            return "Hijo de muggles";
        } else if (props.character.blood === "") {
            return "Ascendencia desconocida";
        }
    }

    return (
        <Link className='list__link' to={`/character/${props.character.house}/${props.character.id}`}>
            <article className='list__card'>
                <img className='list__card--image' src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/200x275/091d33/cdd1d6/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <h3 className='list__card--title' >{props.character.name}</h3>
                <p className='list__card--text' >{getSpecies()}</p>
                <p className='list__card--text' >{getBlood()}</p>


            </article>
        </Link>
    )
}

export default CharacterCard