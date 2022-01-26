import FormHouse from "./FormHouse"
import FormName from "./FormName"

const Form = (props) => {
    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormName name={props.name} handleFilter={props.handleFilter} />
            <FormHouse house={props.house} handleFilter={props.handleFilter} />
        </form>
    )
}

export default Form