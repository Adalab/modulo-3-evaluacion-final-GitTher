import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    return (
        <article>
            <Link to={`/character/${props.character.id}`}>
                <img src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
                <h3>{props.character.name}</h3>
                <p>{props.character.species}</p>
            </Link>

        </article>
    )
}

export default CharacterCard