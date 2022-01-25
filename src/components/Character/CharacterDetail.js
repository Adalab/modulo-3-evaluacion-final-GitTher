import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
    return (
        <>
            <Link to="/">Volver</Link>
            <article>
                <img src={props.character.image} alt={props.character.name} title={props.character.name} />
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