import './Button.css';

function FormButton({buttonlink, text, type}) {

  return (
            <button href={buttonlink} className="cardbutton" type={type}>{text}</button>
  )
}

export default FormButton;