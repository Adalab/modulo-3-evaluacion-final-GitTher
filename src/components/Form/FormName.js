const FormName = (props) => {
    const handleName = (event) => {
        event.preventDefault()
        props.handleFilter({
            key: 'name',
            value: event.currentTarget.value,
        })
    }

    return (
        <>
            <label htmlFor="name">Nombre
                <input type="text" value={props.name} id="name" onChange={handleName} />
            </label>
        </>
    )
}

export default FormName