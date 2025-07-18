import './Form.css';
import FormButton from '../Components/FormButton';
import { bikes } from '../Data.js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Form({ index }) {
    const navigate = useNavigate()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [values, setValues] = useState({
        name: '',
        age: '',
        email: '',
        bike: `${bikes[index].brand} - ${bikes[index].name}`
    })

    const [error, setError] = useState({
        name: '',
        age: '',
        email: '',
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
        } else if (values.age <= 20) {
            setError(prev => ({ ...prev, age: "You have to be at least 21 years of age." }));
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
        if (
            values.name &&
            values.age &&
            values.email &&
            emailRegex.test(values.email) &&
            values.age > 20
        ) {
            navigate('/confirmation', { state: values });
        }
    }

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <section className='formsection'>
            <h1>Booking form</h1>
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
                </label>
                <FormButton text='Confirm booking' type="submit" />
            </form>
        </section>

    )
}

export default Form;
