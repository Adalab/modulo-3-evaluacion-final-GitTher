import '../../styles/components/Form/FormHouse.scss'

const FormHouse = (props) => {
    const handleHouse = (event) => {
        props.handleFilter({
            key: 'house',
            value: event.currentTarget.value,
        })
    }

    return (
        <>
            <label className='form__label' htmlFor="house">
                Casa:
            </label>

            <select className='form__select' name="house" id="house" onChange={handleHouse} value={props.house}>
                <option value="gryffindor">gryffindor</option>
                <option value="slytherin">slytherin</option>
                <option value="hufflepuff">hufflepuff</option>
                <option value="ravenclaw">ravenclaw</option>
            </select>
        </>
    )
}

export default FormHouse