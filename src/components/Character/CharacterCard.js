import '../../styles/components/Character/CharacterCard.scss'

import { Link } from 'react-router-dom';

const CharacterCard = (props) => {

    const getSpecies = () => {
        if (props.character.species === "human" && props.character.gender === "male") {
            return "Humano";
        } else if (props.character.species === "human" && props.character.gender === "female") {
            return "Humana";
        } else if (props.character.species === "ghost") {
            return "Fantasma"
        } else if (props.character.species === "werewolf" && props.character.gender === "male") {
            return "Hombre lobo"
        } else if (props.character.species === "werewolf" && props.character.gender === "female") {
            return "Mujer lobo"
        } else if (props.character.species === "half-giant" && props.character.gender === "male") {
            return "Medio gigante"
        } else if (props.character.species === "half-giant" && props.character.gender === "female") {
            return "Medio giganta"
        }
    }

    const getBlood = () => {
        if (props.character.blood === "half-blood" && props.character.gender === "male") {
            return "Mestizo";
        } else if (props.character.blood === "half-blood" && props.character.gender === "female") {
            return "Mestiza";
        } else if (props.character.blood === "pure-blood") {
            return "Sangre pura";
        } else if (props.character.blood === "muggleborn" && props.character.gender === "male") {
            return "Hijo de muggles";
        } else if (props.character.blood === "muggleborn" && props.character.gender === "female") {
            return "Hija de muggles";
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