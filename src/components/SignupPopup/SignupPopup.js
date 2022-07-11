import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignupPopup(props) {
  function handleSubmitClick(evt) {
    props.handleRegistration(evt, props.email, props.password, props.username);
  }

  return (
    <PopupWithForm
      title={"Sign up"}
      buttonText={"Sign up"}
      altFormText={"Sign in"}
      altFormButton={props.altForm}
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleSubmit={handleSubmitClick}
      isRegisterError={props.isRegisterError}
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
      <div className="popup__input-alignment">
        <label className="popup__input-label" htmlFor="input-field">
          Username
        </label>
        <input
          className="popup__input"
          type="text"
          placeholder="Enter your username"
          value={props.username}
          onChange={props.setUsername}
          required
        ></input>
        <span
          className={
            props.isUsernameError
              ? "popup__input-err popup__input-err_active"
              : "popup__input-err"
          }
        >
          {props.isUsernameErrorText}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default SignupPopup;
