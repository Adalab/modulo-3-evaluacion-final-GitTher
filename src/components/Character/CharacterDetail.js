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
            return "Masculino";
        } else if (props.character.gender === "female") {
            return "Femenino"
        }
    }

    const getStatus = () => {
        if (props.character.alive === true && props.character.gender === "male") {
            return (<span>Vivo < FontAwesomeIcon icon={faHeartbeat} /></span>);
        } else if (props.character.alive === true && props.character.gender === "female") {
            return (<span>Viva < FontAwesomeIcon icon={faHeartbeat} /></span>);
        } else if (props.character.alive === false && props.character.gender === "male") {
            return (<span>Fallecido < FontAwesomeIcon icon={faSkull} /></span>);
        } else if (props.character.alive === false && props.character.gender === "female") {
            return (<span>Fallecida < FontAwesomeIcon icon={faSkull} /></span>);
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
            return "Desconocida";
        }
    }

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

    const getHouse = () => {
        if (props.character.house === "Gryffindor") {
            return (
                <img className='detail__house--house' src={houseGryffindor} title="gryffindor" alt="gryffindor" />

            )
        } else if (props.character.house === "Slytherin") {
            return (
                <img className='detail__house--house' src={houseSlytherin} title="slytherin" alt="slytherin" />
            )
        } else if (props.character.house === "Hufflepuff") {
            return (
                <img className='detail__house--house' src={houseHufflepuff} title="hufflepuff" alt="hufflepuff" />
            )
        } else if (props.character.house === "Ravenclaw") {
            return (
                <img className='detail__house--house' src={houseRavenclaw} title="ravenclaw" alt="ravenclaw" />
            )
        }
    }
    const getAltNames = () => {
        if (props.character.altnames.length > 0) {
            return (
                <p className='detail__text'>Otros nombres: <span className='detail__text--content' >{props.character.altnames.join(', ')}</span></p>
            )
        }
    }

    const renderNotFound = () => {
        return (
            <p className='alert'>El personaje que buscas no existe</p>
        );
    };

    const renderDetail = () => {
        return (
            <article className='detail'  >
                <img className='detail__image' src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/200x275/091d33/cdd1d6/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <div>
                    <h3 className='detail__title' >{props.character.name}</h3>
                    {getAltNames()}
                    <p className='detail__text' >Estatus: <span className='detail__text--content' >{getStatus()}</span></p>
                    <p className='detail__text' >Especie: <span className='detail__text--content' >{getSpecies()}</span></p>
                    <p className='detail__text' >Genero: <span className='detail__text--content' >{getGender()}</span></p>
                    <p className='detail__text' >Ascendencia: <span className='detail__text--content' >{getBlood()}</span></p>
                    <p className='detail__text' >Casa: <span className='detail__text--content' >{props.character.house}</span></p>
                    <div className='detail__house' >
                        {getHouse()}
                    </div>
                </div>

            </article>
        )
    }

    return (
        <>
            <Link className='detail__back' to="/">Volver</Link>
            {props.character === undefined ? renderNotFound() : renderDetail()}
        </>
    )
}

export default CharacterDetail