import PopupWithForm from "../PopupWithForm/PopupWithForm";

function LoginPopup(props) {
  function handleSubmitClick(evt) {
    props.handleLogin(evt, props.email, props.password);
  }

  return (
    <PopupWithForm
      title={"Sign in"}
      buttonText={"Sign In"}
      altFormText={"Sign up"}
      altFormButton={props.altForm}
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleSubmit={handleSubmitClick}
    >
      <div className="popup__input-alignment">
        <label className="popup__input-label" htmlFor="input-field">
          Email
        </label>
        <input
          className="popup__input"
          type="email"
          placeholder="Enter email"
          value={props.email}
          onChange={props.setEmail}
          required
        ></input>
        <span
          className={
            props.isEmailError
              ? "popup__input-err popup__input-err_active"
              : "popup__input-err"
          }
        >
          {props.isEmailErrorText}
        </span>
      </div>
      <div className="popup__input-alignment">
        <label className="popup__input-label" htmlFor="input-field">
          Password
        </label>
        <input
          className="popup__input"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.setPassword}
          required
        ></input>
        <span
          className={
            props.isPasswordError
              ? "popup__input-err popup__input-err_active"
              : "popup__input-err"
          }
        >
          {props.isPasswordErrorText}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default LoginPopup;
