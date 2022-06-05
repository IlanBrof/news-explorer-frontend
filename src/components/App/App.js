import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "../../index.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import LoginPopup from "../LoginPopup/LoginPopup";
import SignupPopup from "../SignupPopup/SignupPopup";
import RegistrationSuccessPopup from '../RegistrationSuccessPopup/RegistrationSuccessPopup';

import {
  headerClass,
  headerInactiveClass,
  mobileHeaderClass,
  headerLogoClass,
  headerLogoHamburgerClass,
  headerHamburgerMenuCloseClass,
  headerHamburgerMenuClass,
  headerMenuClass,
  headerMenuMobileClass,
  headerMenuButtonClass,
  headerMenuLoggedInClass,
  headerMenuLoggedOutClass,
  headerUserButtonClass,
  headerLogoutButtonInactiveClass,
  headerLogoutButtonActiveClass,
} from "../../utils/headerConstants";

import {
  snHeaderClass,
  snHeaderInactiveClass,
  snMobileHeaderClass,
  snHeaderLogoClass,
  snHeaderLogoHamburgerClass,
  snHeaderHamburgerMenuCloseClass,
  snHeaderHamburgerMenuClass,
  snHeaderMenuClass,
  snHeaderMenuMobileClass,
  snHeaderMenuButtonClass,
  snHeaderMenuLoggedInClass,
  snHeaderMenuLoggedOutClass,
  snHeaderUserButtonClass,
  snHeaderLogoutButtonInactiveClass,
  snHeaderLogoutButtonActiveClass,
} from "../../utils/sn-headerConstants";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
  const [isRegistrationSuccessPopupOpen, setIsRegistrationSuccessPopupOpen] = React.useState(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = React.useState(true);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);
  const [isOnSavedNews, setIsOnSavedNews] = React.useState(false);
  const [isSearchResult, setIsSearchResult] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNoSearchResult, setIsNoSearchResult] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const navigate = useNavigate();

  function handleLoginPopupClick() {
    setIsLoginPopupOpen(true);
    setIsHamburgerMenuOpen(false);
  }
  function handleLogoutClick() {
    setIsLoggedIn(false);
    setIsHamburgerMenuOpen(false);
    const path = "/";
    navigate(path);
  }
  function handleSignupPopupClick() {
    setIsSignupPopupOpen(true);
  }

  function handleLoginPopupAltClick(evt) {
    evt.preventDefault();
    setIsSignupPopupOpen(true);
    setIsLoginPopupOpen(false);
  }

  function handleSignupPopupAltClick(evt) {
    evt.preventDefault();
    setIsSignupPopupOpen(false);
    setIsLoginPopupOpen(true);
  }

  function handleHamburgerMenuClick() {
    if (!isHamburgerMenuOpen) {
      setIsHamburgerMenuOpen(true);
    } else {
      setIsHamburgerMenuOpen(false);
    }
  }

  function handleSavedArticlesClick() {
    setIsOnSavedNews(true);
    setIsHamburgerMenuOpen(false);
  }

  function handleHomeArticlesClick() {
    setIsOnSavedNews(false);
    setIsHamburgerMenuOpen(false);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsSignupPopupOpen(false);
    setIsRegistrationSuccessPopupOpen(false);
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  React.useEffect(() => {
    const closeByClick = (e) => {
      if (e.target.classList.contains("popup")) {
        closeAllPopups();
      }
    };

    document.addEventListener("click", closeByClick);

    return () => document.removeEventListener("click", closeByClick);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onLoginButtonClick={handleLoginPopupClick}
                onLogoutButtonClick={handleLogoutClick}
                isHamburgerMenuOpen={isHamburgerMenuOpen}
                onHamburgerMenuClick={handleHamburgerMenuClick}
                isLoginPopupOpen={isLoginPopupOpen}
                isSignupPopupOpen={isSignupPopupOpen}
                headerClass={headerClass}
                headerInactiveClass={headerInactiveClass}
                mobileHeaderClass={mobileHeaderClass}
                headerLogoClass={headerLogoClass}
                headerLogoHamburgerClass={headerLogoHamburgerClass}
                headerHamburgerMenuCloseClass={headerHamburgerMenuCloseClass}
                headerHamburgerMenuClass={headerHamburgerMenuClass}
                headerMenuClass={headerMenuClass}
                headerMenuMobileClass={headerMenuMobileClass}
                headerMenuButtonClass={headerMenuButtonClass}
                headerMenuLoggedInClass={headerMenuLoggedInClass}
                headerMenuLoggedOutClass={headerMenuLoggedOutClass}
                headerUserButtonClass={headerUserButtonClass}
                headerLogoutButtonInactiveClass={
                  headerLogoutButtonInactiveClass
                }
                headerLogoutButtonActiveClass={headerLogoutButtonActiveClass}
                isSearchResult={isSearchResult}
                isLoading={isLoading}
                isNoSearchResult={isNoSearchResult}
                onSavedArticlesButtonClick={handleSavedArticlesClick}
                onHomeButtonClick={handleHomeArticlesClick}
              />
            }
          ></Route>

          <Route
            path="/saved-news"
            element={
              <SavedNews
                isLoggedIn={isLoggedIn}
                onLoginButtonClick={handleLoginPopupClick}
                onLogoutButtonClick={handleLogoutClick}
                isHamburgerMenuOpen={isHamburgerMenuOpen}
                onHamburgerMenuClick={handleHamburgerMenuClick}
                isLoginPopupOpen={isLoginPopupOpen}
                isSignupPopupOpen={isSignupPopupOpen}
                headerClass={snHeaderClass}
                headerInactiveClass={snHeaderInactiveClass}
                mobileHeaderClass={snMobileHeaderClass}
                headerLogoClass={snHeaderLogoClass}
                headerLogoHamburgerClass={snHeaderLogoHamburgerClass}
                headerHamburgerMenuCloseClass={snHeaderHamburgerMenuCloseClass}
                headerHamburgerMenuClass={snHeaderHamburgerMenuClass}
                headerMenuClass={snHeaderMenuClass}
                headerMenuMobileClass={snHeaderMenuMobileClass}
                headerMenuButtonClass={snHeaderMenuButtonClass}
                headerMenuLoggedInClass={snHeaderMenuLoggedInClass}
                headerMenuLoggedOutClass={snHeaderMenuLoggedOutClass}
                headerUserButtonClass={snHeaderUserButtonClass}
                headerLogoutButtonInactiveClass={
                  snHeaderLogoutButtonInactiveClass
                }
                headerLogoutButtonActiveClass={snHeaderLogoutButtonActiveClass}
                isOnSavedNews={isOnSavedNews}
                onHomeButtonClick={handleHomeArticlesClick}
              />
            }
          ></Route>
        </Routes>

        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          altForm={handleLoginPopupAltClick}
        />
        <SignupPopup
          isOpen={isSignupPopupOpen}
          onClose={closeAllPopups}
          altForm={handleSignupPopupAltClick}
        />
        <RegistrationSuccessPopup
          isOpen={isRegistrationSuccessPopupOpen}
          onClose={closeAllPopups}
          altForm={handleSignupPopupAltClick}
          isRegistrationSuccess={isRegistrationSuccess}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
