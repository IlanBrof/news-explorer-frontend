import logoutIconBlack from "../../images/logout.svg";
import Header from "../Header/Header";

function SavedNewsHeader(props) {
  return (
    <Header
      isLoggedIn={props.isLoggedIn}
      onLoginClick={props.onLoginButtonClick}
      onLogoutButtonClick={props.onLogoutButtonClick}
      isHamburgerMenuOpen={props.isHamburgerMenuOpen}
      onHamburgerMenuClick={props.onHamburgerMenuClick}
      isLoginPopupOpen={props.isLoginPopupOpen}
      isSignupPopupOpen={props.isSignupPopupOpen}
      headerClass={props.headerClass}
      headerInactiveClass={props.headerInactiveClass}
      mobileHeaderClass={props.mobileHeaderClass}
      headerUserIcon={props.headerUserIcon}
      headerLogoClass={props.headerLogoClass}
      headerLogoHamburgerClass={props.headerLogoHamburgerClass}
      headerHamburgerMenuCloseClass={props.headerHamburgerMenuCloseClass}
      headerHamburgerMenuClass={props.headerHamburgerMenuClass}
      headerMenuClass={props.headerMenuClass}
      headerMenuMobileClass={props.headerMenuMobileClass}
      headerMenuButtonClass={props.headerMenuButtonClass}
      headerMenuLoggedInClass={props.headerMenuLoggedInClass}
      headerMenuLoggedOutClass={props.headerMenuLoggedOutClass}
      headerUserButtonClass={props.headerUserButtonClass}
      headerLogoutButtonInactiveClass={props.headerLogoutButtonInactiveClass}
      headerLogoutButtonActiveClass={props.headerLogoutButtonActiveClass}
    />
  );
}

export default SavedNewsHeader;
