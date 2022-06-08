import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "../../index.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import LoginPopup from "../LoginPopup/LoginPopup";
import SignupPopup from "../SignupPopup/SignupPopup";
import RegistrationSuccessPopup from "../RegistrationSuccessPopup/RegistrationSuccessPopup";

import MainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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

import { getSearchResult } from "../../utils/NewsApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
  const [isRegistrationSuccessPopupOpen, setIsRegistrationSuccessPopupOpen] =
    React.useState(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] =
    React.useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);
  const [isOnSavedNews, setIsOnSavedNews] = React.useState(false);
  const [isSearchResult, setIsSearchResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNoSearchResult, setIsNoSearchResult] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isRegisterError, setIsRegisterError] = React.useState(false);

  const navigate = useNavigate();

  function handleLoginPopupClick() {
    setIsLoginPopupOpen(true);
    setIsHamburgerMenuOpen(false);
  }
  function handleLogoutClick() {
    localStorage.removeItem("jwt");
    setCurrentUser({});
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
    closeAllPopups();
    setIsSignupPopupOpen(true);
  }

  function handleSignupPopupAltClick(evt) {
    evt.preventDefault();
    closeAllPopups();
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
    setIsRegistrationSuccess(false);
    setIsRegisterError(false);
    setIsRegistrationSuccessPopupOpen(false);
  }

  function handleEmailField(evt) {
    setEmail(evt.target.value);
  }
  function handlePasswordField(evt) {
    setPassword(evt.target.value);
  }
  function handleUsernameField(evt) {
    setUsername(evt.target.value);
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

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.checkToken(jwt).then((res) => {
        if (res) {
          const data = {
            email: res.email,
            id: res._id,
          };
          setIsLoggedIn(true);
          setCurrentUser(data);
        }
      });
      MainApi.getSavedArticles()
        .then((data) => {
          setSavedArticles(data);
        })
        .catch((err) => {
          console.log("WTH?", err); //eslint-disable
        });
    }
  }, []);

  function handleRegistration(evt, email, password, name) {
    try {
      evt.preventDefault();
      auth
        .signup(email, password, name)
        .then(() => {
          console.log("please wait..."); //eslint-disable
        })
        .catch((err) => {
          setIsRegisterError(true);
          console.log("What", err); //eslint-disable
          // need to display err to user
        });
    } finally {
      setIsSignupPopupOpen(false);
      setIsRegistrationSuccess(true);
      setIsRegistrationSuccessPopupOpen(true);
    }
  }

  function handleLogin(evt, email, password) {
    evt.preventDefault();
    auth
      .signin(email, password)
      .then((data) => {
        if (data) {
          const userData = {
            email: email,
            token: data,
          };
          setCurrentUser(userData);
          setIsLoggedIn(true);
          setIsLoginPopupOpen(false);
        }
        window.location.reload();
      })
      .catch((err) => {
        console.log(err); //eslint-disable
        // need to display err to user
      });
  }

  async function handleSearchClick(evt, keyWord) {
    evt.preventDefault();
    try {
      setIsLoading(true);
      let searchResult = await getSearchResult(keyWord);
      if (searchResult.totalResults > 0) {
        localStorage.setItem(
          "lastSearch",
          JSON.stringify(searchResult.articles)
        );
        localStorage.setItem("keyword", keyWord);
        setArticles(JSON.parse(localStorage.getItem("lastSearch")));
        localStorage.setItem("counter", 3);
        setIsNoSearchResult(false);
        setIsSearchResult(true);
      } else {
        setIsSearchResult(false);
        setIsNoSearchResult(true);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log("Error while searching", err); //eslint-disable
    }
  }

  React.useEffect(() => {
    if (!isLoggedIn) return;
    MainApi.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err); //eslint-disable
      });
  }, [isLoggedIn]);

  async function handleSaveArticle(article) {
    try {
      MainApi.saveArticle(article);
      const articles = await MainApi.getSavedArticles();
      if (articles) {
        setSavedArticles(articles);
      }
    } catch (err) {
      console.log(err); //eslint-disable
    }
  }

  async function handleDeleteArticle(article) {
    try {
      await MainApi.deleteSavedArticle(article);
      const articles = await MainApi.getSavedArticles();
      if (articles) {
        setSavedArticles(articles);
      }
    } catch (err) {
      console.log(err); //eslint-disable
    }
  }

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
                onSearchClick={handleSearchClick}
                searchResults={articles}
                user={currentUser}
                handleSaveArticle={handleSaveArticle}
                onDeleteBtnClick={handleDeleteArticle}
                savedArticles={savedArticles}
                articles={articles}
              />
            }
          ></Route>

          <Route
            path="/saved-news"
            element={
              <ProtectedRoute
                component={SavedNews}
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
                user={currentUser}
                isSearchResult={isSearchResult}
                savedArticles={savedArticles}
                onDeleteBtnClick={handleDeleteArticle}
              />
            }
          />
        </Routes>

        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          altForm={handleLoginPopupAltClick}
          email={email}
          password={password}
          username={username}
          setEmail={handleEmailField}
          setPassword={handlePasswordField}
          setUsername={handleUsernameField}
          handleLogin={handleLogin}
        />
        <SignupPopup
          isOpen={isSignupPopupOpen}
          onClose={closeAllPopups}
          altForm={handleSignupPopupAltClick}
          handleRegistration={handleRegistration}
          email={email}
          password={password}
          username={username}
          setEmail={handleEmailField}
          setPassword={handlePasswordField}
          setUsername={handleUsernameField}
          isRegisterError={isRegisterError}
        />
        <RegistrationSuccessPopup
          isOpen={isRegistrationSuccessPopupOpen}
          onClose={closeAllPopups}
          altForm={handleSignupPopupAltClick}
          isRegistrationSuccess={isRegistrationSuccess}
          isRegisterError={isRegisterError}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
