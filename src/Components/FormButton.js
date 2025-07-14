import './Button.css';

function FormButton({text, type}) {

  return (
            <button className="cardbutton" type={type}>{text}</button>
  )
}

export default FormButton;