import FormHouse from "./FormHouse"
import FormName from "./FormName"

const Form = (props) => {
    return (
        <form>
            <FormName name={props.name} handleFilter={props.handleFilter} />
            <FormHouse house={props.house} handleFilter={props.handleFilter} />
        </form>
    )
}

export default Form