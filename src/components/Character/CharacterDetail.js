import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { faSkull } from '@fortawesome/free-solid-svg-icons'

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

    const renderNotFound = () => {
        return (
            <p>El personaje que buscas no existe</p>
        );
    };

    const renderDetail = () => {
        return (
            <article>
                <img src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <h3>{props.character.name}</h3>
                <p>Estatus: {getStatus()}</p>
                <p>Especie: {getSpecies()}</p>
                <p>Genero: {getGender()}</p>
                <p>Ascendencia: {getBlood()}</p>
                <p>Casa: {props.character.house}</p>
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