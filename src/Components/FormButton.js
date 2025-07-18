import './FormButton.css';

function FormButton({text, type}) {

  return (
            <button className="formbutton" type={type}>{text}</button>
  )
}

export default FormButton;