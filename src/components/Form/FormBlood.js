import '../../styles/components/Form/FormBlood.scss'

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


                <select className='form__select' name="blood" id="blood" onChange={handleBlood} value={props.blood}>
                    <option value="">Cualquiera</option>
                    <option value="half-blood">Mestizo</option>
                    <option value="pure-blood">Sangre pura</option>
                    <option value="muggleborn">Hijo de muggles</option>
                </select>
            </label>
        </>
    )
}

export default FormBlood