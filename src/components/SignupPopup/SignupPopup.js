import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignupPopup(props) {
  return (
    <PopupWithForm
      title={"Sign up"}
      buttonText={"Sign up"}
      altFormText={"Sign in"}
      altFormButton={props.altForm}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <div className="popup__input-alignment">
        <label className="popup__input-label" htmlFor="input-field">
          Email
        </label>
        <input className="popup__input" id="input-field" type="text"></input>
        <span className="popup__input-err">
          Invalid email adress
        </span>
      </div>
      <div className="popup__input-alignment">
        <label className="popup__input-label" htmlFor="input-field">
          Password
        </label>
        <input className="popup__input" id="input-field" type="text"></input>
        <span className="popup__input-err">
          Invalid password
        </span>
      </div>
      <div className="popup__input-alignment">
        <label className="popup__input-label" htmlFor="input-field">
          Username
        </label>
        <input className="popup__input" id="input-field" type="text"></input>
        <span className="popup__input-err">
          Invalid User Name
        </span>
      </div>
    </PopupWithForm>
  );
}

export default SignupPopup;
