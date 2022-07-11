import PopupWithForm from "../PopupWithForm/PopupWithForm";

function RegistrationSuccessPopup(props) {
  return (
    <PopupWithForm
      title={
        props.isRegisterError
          ? "Error while registering new user, please try again later"
          : "Registration successfully completed!"
      }
      altFormText={"Sign in"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      altFormButton={props.altForm}
      isRegistrationSuccess={props.isRegistrationSuccess}
    />
  );
}

export default RegistrationSuccessPopup;
