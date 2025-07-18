import './Form.css';
import FormButton from '../Components/FormButton';
import { bikes } from '../Data.js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Form({ index }) {
    const navigate = useNavigate()

    const [error, setError] = useState({
        name: '',
        age: '',
        email: '',
    })

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [values, setValues] = useState({
        name: '',
        age: '',
        email: '',
        bike: `${bikes[index].brand} - ${bikes[index].name}`
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!values.name) {
            setError(prev => ({ ...prev, name: "Please enter your name." }));
        } else {
            setError(prev => ({ ...prev, name: "" }));
        }

        if (!values.age) {
            setError(prev => ({ ...prev, age: "Please enter your age." }));
        } else {
            setError(prev => ({ ...prev, age: "" }));
        }

        if (!values.email) {
            setError(prev => ({ ...prev, email: "Please enter your email." }));
        } else if (!emailRegex.test(values.email)) {
            setError(prev => ({ ...prev, email: "Please enter a valid email address." }));
        } else {
            setError(prev => ({ ...prev, email: "" }));
        }

        if (values.name && values.age && values.email && emailRegex.test(values.email)) {
            navigate('/confirmation', { state: values });
        }

    }

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <section className='formsection'>
            <h2>Booking form</h2>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="name">Name
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChanges}
                    />
                    <p className='errorMessage'>{error.name}</p>
                </label>
                <label htmlFor="age">Age
                    <input
                        type="number"
                        name="age"
                        value={values.age}
                        onChange={handleChanges}
                    />
                    <p className='errorMessage'>{error.age}</p>
                </label>
                <label htmlFor="email">Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChanges}
                    />
                    <p className='errorMessage'>{error.email}</p>
                </label>
                <label>Bike
                    <input
                        value={`${bikes[index].brand} - ${bikes[index].name}`}
                        type="text"
                        name="bike"
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
