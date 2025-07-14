import { useLocation } from 'react-router-dom';

function Confirmation() {
    const location = useLocation();
    const { name, age, bike } = location.state || {};

    return (
        <section>
            <h1>Booking Confirmation</h1>
            <h2>Booking details</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Bike:</strong> {bike}</p>
        </section>
    );
}

export default Confirmation;
