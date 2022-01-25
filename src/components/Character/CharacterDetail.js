import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
    return (
        <>
            <Link to="/">Volver</Link>
            <article>
                <img src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <h3>{props.character.name}</h3>
                <p>Estatus: {props.character.alive === true ? "vivo" : "muerto"}</p>
                <p>Especie: {props.character.species}</p>
                <p>Genero: {props.character.gender}</p>
                <p>Casa: {props.character.house}</p>
            </article>
        </>
    )
}

export default CharacterDetail