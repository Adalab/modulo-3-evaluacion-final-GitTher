import '../../styles/components/Form/FormName.scss'

const FormName = (props) => {
    const handleName = (event) => {
        props.handleFilter({
            key: 'name',
            value: event.currentTarget.value,
        })
    }

    return (
        <>
            <label
                className='form__label' htmlFor="name">Nombre:
                <input className='form__input' type="text" value={props.name} id="name" onChange={handleName} />
            </label>
        </>
    )
}

export default FormName