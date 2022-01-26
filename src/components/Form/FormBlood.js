const FormBlood = (props) => {
    const handleBlood = (event) => {
        props.handleFilter({
            key: 'blood',
            value: event.currentTarget.value,
        })
    }

    return (
        <>
            <label htmlFor="blood">
                Ascendencia:
            </label>

            <select name="blood" id="blood" onChange={handleBlood} value={props.blood}>
                <option value="half-blood">mestizo</option>
                <option value="pure-blood">sangre pura</option>
                <option value="muggleborn">hijo de muggles</option>
                <option value="">cualquiera</option>
            </select>
        </>
    )
}

export default FormBlood