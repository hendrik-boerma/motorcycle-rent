import { Link } from 'react-router-dom';
import './Button.css';

function Button({buttonlink, text, type}) {

  return (
            <Link to={buttonlink} className="cardbutton">{text}</Link>
  )
}

export default Button;