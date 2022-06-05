import { useNavigate } from "react-router-dom";

function Header(props) {
  const userName = "Ilan";

  const navigate = useNavigate();

  const savedNewsRouteChange = () => {
    props.onSavedArticlesButtonClick();
    const savedNewsPath = "/saved-news";
    navigate(savedNewsPath);
  };
  const homeRouteChange = () => {
    props.onHomeButtonClick();
    const homePath = "/";
    navigate(homePath);
  };

  return (
    <header
      className={`
      ${props.isHamburgerMenuOpen ? props.mobileHeaderClass : props.headerClass}
      ${props.isLoginPopupOpen ? props.headerInactiveClass : props.headerClass}
      ${props.isSignupPopupOpen ? props.headerInactiveClass : props.headerClass}
      `}
    >
      <div className="header__mobile-alignment">
        <h3
          className={
            props.isHamburgerMenuOpen
              ? props.headerLogoHamburgerClass
              : props.headerLogoClass
          }
        >
          NewsExplorer
        </h3>
        <button
          className={
            props.isHamburgerMenuOpen
              ? props.headerHamburgerMenuCloseClass
              : props.headerHamburgerMenuClass
          }
          type="button"
          onClick={props.onHamburgerMenuClick}
        ></button>
      </div>
      <div
        className={
          props.isHamburgerMenuOpen
            ? props.headerMenuMobileClass
            : props.headerMenuClass
        }
      >
        <nav className="header__links">
          <button
            className={props.headerMenuButtonClass}
            onClick={homeRouteChange}
          >
            Home
          </button>
          <button
            className={
              props.isLoggedIn
                ? props.headerMenuLoggedInClass
                : props.headerMenuLoggedOutClass
            }
            onClick={savedNewsRouteChange}
          >
            Saved Articles
          </button>
        </nav>
        <button
          className={props.headerUserButtonClass}
          type="button"
          onClick={
            !props.isLoggedIn ? props.onLoginClick : props.onLogoutButtonClick
          }
        >
          {props.isLoggedIn ? userName : "Sign In"}
          <div
            className={
              props.isLoggedIn
                ? props.headerLogoutButtonInactiveClass &&
                  props.headerLogoutButtonActiveClass
                : props.headerLogoutButtonInactiveClass
            }
          ></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
