import PopupWithForm from "../PopupWithForm/PopupWithForm";

function LoginPopup(props) {
  return (
    <PopupWithForm
      title={"Sign in"}
      buttonText={"Sign In"}
      altFormText={"Sign up"}
      altFormButton={props.altForm}
      isOpen={props.isOpen}
      onClose={props.onClose}
      // onSubmit={handleSubmit}
    >
      <div className="popup__input-alignment">
        <label className="popup__input-label" htmlFor="input-field">
          Email
        </label>
        <input
          className="popup__input"
          id="input-field"
          type="text"
          placeholder="Enter email"
          required
        ></input>
        <span className="popup__input-err">Invalid email adress</span>
      </div>
      <div className="popup__input-alignment">
        <label className="popup__input-label" htmlFor="input-field">
          Password
        </label>
        <input
          className="popup__input"
          id="input-field"
          type="password"
          placeholder="Enter password"
          required
        ></input>
        <span className="popup__input-err">Invalid Password</span>
      </div>
    </PopupWithForm>
  );
}

export default LoginPopup;
