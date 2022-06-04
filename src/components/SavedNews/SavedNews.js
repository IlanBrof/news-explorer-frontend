import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

//////images//////
import corgiPic from "../../images/corgi.png";
import moosePic from "../../images/moose.png";
import lakePic from "../../images/lake.png";
import starsPic from "../../images/stars.png";
import parkPic from "../../images/park.png";
//////images//////

function SavedNews(props) {
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
      />
      <div className="saved-news__content">
        <div className="saved-news__text-content">
          <p className="saved-news__subtitle">Saved articles</p>
          <h2 className="saved-news__title">
            Elise, you have 5 saved articles
          </h2>
          <p className="saved-news__keywords">
            By Keywords:{" "}
            <span className="saved-news__keywords-bold">
              Nature, Yellowstone, and 2 other.
            </span>
          </p>
        </div>
        <ul className="cards-list__container cards-list__container_sn">
          <NewsCard
            articleImage={corgiPic}
            articleDate={"November 4, 2020"}
            articleTitle={`Everyone Needs a Special 'Sit Spot' in Nature`}
            articleText={`Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...`}
            articleSource={"treehugger"}
            isLoggedIn={props.isLoggedIn}
            isOnSavedNews={props.isOnSavedNews}
            keyword={"Nature"}
          />
          <NewsCard
            articleImage={lakePic}
            articleDate={"February 19, 2019"}
            articleTitle={`Nature makes you better`}
            articleText={`We all know how good nature can make us feel. We have known it for
          millennia: the sound of the ocean, the scents of a forest, the way
          dappled sunlight dances through leaves.`}
            articleSource={"national geographic"}
            isLoggedIn={props.isLoggedIn}
            isOnSavedNews={props.isOnSavedNews}
            keyword={"Nature"}
          />
          <NewsCard
            articleImage={parkPic}
            articleDate={"October 19, 2020"}
            articleTitle={`Nostalgic Photos of Tourists in U.S. National Parks`}
            articleText={`Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...`}
            articleSource={"national geographic"}
            isLoggedIn={props.isLoggedIn}
            isOnSavedNews={props.isOnSavedNews}
            keyword={"Yellowstone"}
          />
          <NewsCard
            articleImage={moosePic}
            articleDate={"November 4, 2020"}
            articleTitle={`Grand Teton Renews Historic Crest Trail`}
            articleText={`“The linking together of the Cascade and Death Canyon trails, at
          their heads, took place on October 1, 1933, and marked the first
          step in the realization of a plan whereby the hiker will be...`}
            articleSource={"national parks traveler"}
            isLoggedIn={props.isLoggedIn}
            isOnSavedNews={props.isOnSavedNews}
            keyword={"Parks"}
          />
          <NewsCard
            articleImage={starsPic}
            articleDate={"March 16, 2020"}
            articleTitle={`Scientists Don't Know Why Polaris Is So Weird `}
            articleText={`“Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. `}
            articleSource={"treehugger"}
            isLoggedIn={props.isLoggedIn}
            isOnSavedNews={props.isOnSavedNews}
            keyword={"Photography"}
          />
        </ul>
      </div>
      <Footer />
    </section>
  );
}

export default SavedNews;
