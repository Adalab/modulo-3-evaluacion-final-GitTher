import '../../styles/components/Form/Form.scss'
import FormAlive from './FormAlive';

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
            value: 'Gryffindor',
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
        <section className='form'>
            <h2 className='form__title'>Filtros:</h2>
            <form className='form__form' onSubmit={handleSubmit}>
                <FormName name={props.name} handleFilter={props.handleFilter} />
                <FormHouse house={props.house} handleFilter={props.handleFilter} />
                <FormBlood blood={props.blood} handleFilter={props.handleFilter} />
                <FormAlive alive={props.alive} handleFilter={props.handleFilter} />
            </form>
            <button className='form__reset' onClick={handleReset}>Reset</button>
        </section>
    )
}

export default Form