import '../../styles/components/Form/FormHouse.scss'

const FormBlood = (props) => {
    const handleBlood = (event) => {
        props.handleFilter({
            key: 'blood',
            value: event.currentTarget.value,
        })
    }

    return (
        <>
            <label
                className='form__label' htmlFor="blood">
                Ascendencia:
            </label>

            <select className='form__select' name="blood" id="blood" onChange={handleBlood} value={props.blood}>
                <option value="">cualquiera</option>
                <option value="half-blood">mestizo</option>
                <option value="pure-blood">sangre pura</option>
                <option value="muggleborn">hijo de muggles</option>
            </select>
        </>
    )
}

export default FormBlood