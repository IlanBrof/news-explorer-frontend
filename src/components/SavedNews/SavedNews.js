import { useState, useEffect } from "react";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews(props) {
  const [articlesToRender, setArticlesToRender] = useState(3);
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    setArticlesToRender(localStorage.getItem("counter"));
  }, [props.savedArticles]);

  useEffect(() => {
    const count = {};
    props.savedArticles.forEach((article) => {
      count[article.keyword] = (count[article.keyword] || 0) + 1;

      let articleKeys = Object.keys(count).map((article) => {
        return [article, count[article]];
      });
      articleKeys.sort((a, b) => b[1] - a[1]);
      articleKeys = articleKeys.flat().filter((key) => typeof key === "string");

      if (articleKeys.length <= 3) {
        articleKeys = articleKeys.join(", ");
        setKeywords(articleKeys);
      } else {
        const keyCount = articleKeys.length;
        articleKeys = [
          articleKeys[0].charAt(0).toUpperCase() + articleKeys[0].slice(1),
          articleKeys[1].charAt(0).toUpperCase() + articleKeys[1].slice(1),
        ];
        articleKeys = articleKeys.join(", ");
        const renderedKeys = `${articleKeys}, and ${keyCount - 2} other`;

        setKeywords(renderedKeys);
      }
    });
  }, [props.savedArticles]);

  return (
    <section className="saved-news">
      <SavedNewsHeader
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
        onHomeButtonClick={props.onHomeButtonClick}
        user={props.user}
      />
      <div className="saved-news__content">
        <div className="saved-news__text-content">
          <p className="saved-news__subtitle">Saved articles</p>
          <h2 className="saved-news__title">
            {`${props.user.name}, you have ${props.savedArticles.length} saved
            articles`}
          </h2>
          <p className="saved-news__keywords">
            By Keywords:{" "}
            <span className="saved-news__keywords-bold">{keywords}</span>
          </p>
        </div>
        <ul className="cards-list__container cards-list__container_sn">
          {props.savedArticles.map((article) => {
            return (
              <NewsCard
                key={"articleId_" + Math.round(Math.random() * 555555)}
                article={article}
                isLoggedIn={props.isLoggedIn}
                isOnSavedNews={props.isOnSavedNews}
                onDeleteBtnClick={props.onDeleteBtnClick}
                savedArticles={props.savedArticles}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </section>
  );
}

export default SavedNews;
