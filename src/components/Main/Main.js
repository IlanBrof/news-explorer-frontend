import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoSearchResult from "../NoSearchResult/NoSearchResult";

function Main(props) {
  return (
    <div
      className={`${props.isLoginPopupOpen ? "main main_fixed" : "main"}
      ${props.isSignupPopupOpen ? "main main_fixed" : "main"}
      `}
    >
      <div className="main__container">
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
          headerLogoutButtonInactiveClass={
            props.headerLogoutButtonInactiveClass
          }
          headerLogoutButtonActiveClass={props.headerLogoutButtonActiveClass}
          onSavedArticlesButtonClick={props.onSavedArticlesButtonClick}
          onHomeButtonClick={props.onHomeButtonClick}
          user={props.user}
        />
        <div
          className={
            props.isHamburgerMenuOpen
              ? "main__mobile-overlay_active"
              : "main__mobile-overlay"
          }
        ></div>
        <div className="main__content">
          <h1 className="main__title">What's going on in the world?</h1>
          <p className="main__text">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <SearchForm onSearchClick={props.onSearchClick} />
      </div>
      <Preloader isLoading={props.isLoading} />
      <NoSearchResult isNoSearchResult={props.isNoSearchResult} />
      <NewsCardList
        isLoggedIn={props.isLoggedIn}
        isSearchResult={props.isSearchResult}
        searchResults={props.searchResults}
        handleSaveArticle={props.handleSaveArticle}
        onDeleteBtnClick={props.onDeleteBtnClick}
        articles={props.articles}
        savedArticles={props.savedArticles}
      />

      <About />
      <Footer />
    </div>
  );
}
export default Main;
