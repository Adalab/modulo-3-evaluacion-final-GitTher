
const FormAlive = (props) => {
    const handleAlive = (event) => {
        props.handleFilter({
            key: 'alive',
            value: event.currentTarget.value,
        })
        console.log(event.currentTarget.value)
    }

    return (
        <>
            <input type="radio" id="alive" name="alive" value="alive" checked={props.alive === true ? true : false} onChange={handleAlive}></input>
            <label className='form__label' htmlFor="alive">
                Vivo
            </label>
            <input type="radio" id="dead" name="alive" value="dead" checked={props.alive === false ? true : false} onChange={handleAlive}></input>
            <label className='form__label' htmlFor="dead">
                Muerto
            </label>
        </>
    )
}

export default FormAlive