import FormHouse from "./FormHouse"
import FormName from "./FormName"

const Form = (props) => {
    return (
        <form>
            <FormName />
            <FormHouse house={props.house} handleFilter={props.handleFilter} />
        </form>
    )
}

export default Form