function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_open"}`}>
      <div className="popup__container">
        <button className="popup__close-btn" onClick={props.onClose}></button>
        <div className="popup__form-container">
          <form className="popup__form">
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button
              className={
                props.isRegistrationSuccess
                  ? "popup__submit-btn_inactive"
                  : "popup__submit-btn"
              }
            >
              {props.buttonText}
            </button>
            <div className={ props.isRegistrationSuccess ?  "popup__alt-form popup__alt-form_left" : "popup__alt-form"}>
              <span
                className={
                  props.isRegistrationSuccess
                    ? "popup__alt-form-text_inactive"
                    : "popup__alt-form-text"
                }
              >
                or{" "}
              </span>
              <button
                className="popup__alt-form-link"
                onClick={props.altFormButton}
              >
                {props.altFormText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
