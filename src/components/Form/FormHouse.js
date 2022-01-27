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


                <select className='form__select' name="house" id="house" onChange={handleHouse} value={props.house}>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                </select>
            </label>
        </>
    )
}

export default FormHouse