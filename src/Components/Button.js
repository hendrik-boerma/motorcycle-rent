import { Link } from 'react-router-dom';
import './Button.css';

function Button({buttonlink, text}) {

  return (
            <Link to={`/booking/${buttonlink}`} className="cardbutton">{text}</Link>
  )
}

export default Button;