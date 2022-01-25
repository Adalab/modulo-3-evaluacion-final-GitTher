import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {

    const getGender = () => {
        if (props.character.gender === "male") {
            return "masculino";
        } else if (props.character.gender === "female") {
            return "femenino"
        }
    }

    // const getStatus = () => {
    //     if (props.character.status === true) {
    //         return "vivo";
    //     } else if (props.character.status === false) {
    //         return "fallecido"
    //     }
    // }

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
        <>
            <Link to="/">Volver</Link>
            <article>
                <img src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <h3>{props.character.name}</h3>
                <p>Estatus:  {props.character.alive === true ? "vivo" : "muerto"}</p>
                <p>Especie: {getSpecies()}</p>
                <p>Genero: {getGender()}</p>
                <p>Casa: {props.character.house}</p>
            </article>
        </>
    )
}

export default CharacterDetail