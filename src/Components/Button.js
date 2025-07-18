import { Link } from 'react-router-dom';
import './Button.css';

function Button({buttonlink, text}) {

  return (
            <Link to={buttonlink} className="button">{text}</Link>
  )
}

export default Button;