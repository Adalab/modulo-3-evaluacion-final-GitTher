import FormBlood from "./FormBlood";
import FormHouse from "./FormHouse"
import FormName from "./FormName"

const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleReset = (event) => {
        props.handleFilter({
            key: 'house',
            value: 'gryffindor',
        })
        props.handleFilter({
            key: 'name',
            value: '',
        })
        props.handleFilter({
            key: 'blood',
            value: '',
        })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormName name={props.name} handleFilter={props.handleFilter} />
                <FormHouse house={props.house} handleFilter={props.handleFilter} />
                <FormBlood blood={props.blood} handleFilter={props.handleFilter} />
            </form>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Form