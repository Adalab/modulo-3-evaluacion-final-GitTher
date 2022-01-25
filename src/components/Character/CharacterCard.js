const CharacterCard = (props) => {
    return (
        <article>
            <img src={props.character.image !== "" ? props.character.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`} title={props.character.name} alt={props.character.name} />
            <h3>{props.character.name}</h3>
            <p>{props.character.species}</p>

        </article>
    )
}

export default CharacterCard