import '../../styles/components/Character/CharacterDetail.scss'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { faSkull } from '@fortawesome/free-solid-svg-icons'

import houseGryffindor from '../../images/house_gryffindor.png'
import houseSlytherin from '../../images/house_slytherin.png'
import houseHufflepuff from '../../images/house_hufflepuff.png'
import houseRavenclaw from '../../images/house_ravenclaw.png'

const CharacterDetail = (props) => {

    const getGender = () => {
        if (props.character.gender === "male") {
            return "masculino";
        } else if (props.character.gender === "female") {
            return "femenino"
        }
    }

    const getStatus = () => {
        if (props.character.alive === true) {
            return (<span>Vivo < FontAwesomeIcon icon={faHeartbeat} /></span>);
        } else {
            return (<span>Fallecido < FontAwesomeIcon icon={faSkull} /></span>);
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

    const getHouse = () => {
        if (props.character.house === "Gryffindor") {
            return (
                <span>Gryffindor<img className='detail__text--house' src={houseGryffindor} title="gryffindor" alt="gryffindor" /></span>
            )
        } else if (props.character.house === "Slytherin") {
            return (
                <span>Slytherin<img className='detail__text--house' src={houseSlytherin} title="slytherin" alt="slytherin" /></span>
            )
        } else if (props.character.house === "Hufflepuff") {
            return (
                <span>Hufflepuff<img className='detail__text--house' src={houseHufflepuff} title="hufflepuff" alt="hufflepuff" /></span>
            )
        } else if (props.character.house === "Ravenclaw") {
            return (
                <span>Ravenclaw<img className='detail__text--house' src={houseRavenclaw} title="ravenclaw" alt="ravenclaw" /></span>
            )
        }
    }
    const getAltNames = () => {
        if (props.character.altnames.length > 0) {
            return (
                <p>Otros nombres: {props.character.altnames}</p>
            )
        }
    }

    const renderNotFound = () => {
        return (
            <p>El personaje que buscas no existe</p>
        );
    };

    const renderDetail = () => {
        return (
            <article className='detail'  >
                <img className='detail__image' src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <h3 className='detail__title' >{props.character.name}</h3>
                {getAltNames()}
                <p className='detail__text' >Estatus: {getStatus()}</p>
                <p className='detail__text' >Especie: {getSpecies()}</p>
                <p className='detail__text' >Genero: {getGender()}</p>
                <p className='detail__text' >Ascendencia: {getBlood()}</p>
                <p className='detail__text' >Casa: {getHouse()}</p>

            </article>
        )
    }

    return (
        <>
            <Link to="/">Volver</Link>
            {props.character === undefined ? renderNotFound() : renderDetail()}
        </>
    )
}

export default CharacterDetail