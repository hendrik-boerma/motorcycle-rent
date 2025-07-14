import './Form.css';
import FormButton from '../Components/FormButton';
import { bikes } from '../Data.js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Form({ index }) {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: '',
        age: '',
        bike: `${bikes[index].brand} - ${bikes[index].name}`
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted");
        console.log(values)
        navigate('/confirmation', { state: values });
    }

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <section className='formsection'>
            <h2>Booking form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        onChange={handleChanges}
                        required
                    />
                </label>
                <label>Age
                    <input
                        type="text"
                        name="age"
                        onChange={handleChanges}
                        required
                    />
                </label>
                <label>Bike
                    <input
                        value={`${bikes[index].brand} - ${bikes[index].name}`}
                        type="text"
                        name="bike"
                        required
                        disabled
                    />
                    <p>${bikes[index].price} <span>per day</span></p>
                </label>
                <FormButton text='Confirm booking' type="submit" />
            </form>
        </section>

    )
}

export default Form;
