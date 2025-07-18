import { useLocation } from 'react-router-dom';
import './Confirmation.css'

function Confirmation() {
    const location = useLocation();
    const { name, age, bike, email } = location.state || {};

    return (
        <section>
            <h1>Booking Confirmation</h1>
            <h2>Booking details</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <th>Bike</th>
                        <td>{bike}</td>
                    </tr>
                </tbody>
            </table>

        </section>
    );
}

export default Confirmation;
