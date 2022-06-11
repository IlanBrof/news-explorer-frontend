import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainApi from "../../utils/MainApi";

function NewsCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isDelButtonClicked, setIsDelButtonClicked] = useState(false);
  const [isArticleSaved, setIsArticleSaved] = useState(false);
  const [upperCaseKeyword, setUpperCaseKeyword] = useState("");
  const location = useLocation();
  const isOnSavedNews = location.pathname === "/saved-news";
  const isOnMain = location.pathname === "/";

  useEffect(() => {
    if (isOnMain) {
      props.savedArticles.forEach((item) => {
        if (
          item.title === props.article.title &&
          item.link === props.article.url &&
          item.date === props.article.date
        ) {
          setIsArticleSaved(true);
          setIsButtonClicked(true);
        }
      });
    }
    if (isOnSavedNews) {
      MainApi.getSavedArticles();
      setIsArticleSaved(true);
    }
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(props.article.date);
  const convertedDate =
    months[date.getMonth()] +
    " " +
    [date.getDate()] +
    ", " +
    [date.getFullYear()];

  useEffect(() => {
    if (isOnSavedNews) {
      const keywordUpperCase =
        props.article.keyword.charAt(0).toUpperCase() +
        props.article.keyword.slice(1);
      setUpperCaseKeyword(keywordUpperCase);
    }
  }, [props.savedArticles]);

  const handleMouseOver = () => {
    setIsHovered(true);
    setIsOverlayVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsOverlayVisible(false);
  };

  async function handleSaveClick() {
    try {
      if (props.isLoggedIn && !isButtonClicked) {
        await props.handleSaveArticle(props.article);
        setIsButtonClicked(true);
        setIsArticleSaved(true);
      } else {
        props.setLoginPopupOpen(true);
      }
    } catch (err) {
      setIsButtonClicked(false);
      console.log(err); //eslint-disable
    }
  }

  async function handleDeleteClick() {
    props.savedArticles.forEach((article) => {
      if (isOnMain) {
        if (article.title === props.article.title) {
          props.onDeleteBtnClick(article._id);
          setIsArticleSaved(false);
          setIsButtonClicked(false);
        }
      }
      if (isOnSavedNews) {
        if (
          article._id === props.article._id
        ) {
          props.onDeleteBtnClick(article._id);
          // setIsDelButtonClicked(true);
        }
      }
    });
  }

  return (
    <li
      className={
        isDelButtonClicked
          ? "cards-list__card cards-list__card_del"
          : "cards-list__card"
      }
    >
      <div className="cards-list__card-image-container">
        <div className="cards-list__button-container">
          <button
            className={` ${
              isButtonClicked && props.isLoggedIn
                ? "cards-list__save-btn_marked"
                : "cards-list__save-btn"
            }
              ${
                props.isLoggedIn && isOnSavedNews
                  ? "cards-list__delete-btn"
                  : "cards-list__save-btn"
              }
              ${
                props.isLoggedIn && isOnSavedNews && isHovered
                  ? "cards-list__delete-btn cards-list__delete-btn_active"
                  : "cards-list__save-btn"
              }
              ${
                props.isLoggedIn
                  ? "cards-list__save-btn_active"
                  : "cards-list__save-btn"
              }
                `}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={isArticleSaved ? handleDeleteClick : handleSaveClick}
          ></button>

          <div
            className={`${
              props.isLoggedIn && isOnSavedNews && isHovered
                ? "cards-list__login-overlay_active cards-list__login-overlay_loggedin"
                : "cards-list__login-overlay"
            }`}
          >
            <span className="cards-list__login-overlay-text">
              Remove from saved
            </span>
          </div>
          <div
            className={`${
              props.isLoggedIn && isOnSavedNews
                ? "cards-list__login-overlay_active cards-list__login-overlay_keyword"
                : "cards-list__login-overlay"
            }`}
          >
            <span className="cards-list__login-overlay-text">
              {upperCaseKeyword}
            </span>
          </div>
          <div
            className={
              !props.isLoggedIn && isOverlayVisible
                ? "cards-list__login-overlay cards-list__login-overlay_active"
                : "cards-list__login-overlay"
            }
          >
            <span className="cards-list__login-overlay-text">
              Sign in to save articles
            </span>
          </div>
        </div>
        <a
          className="cards-list__article-link"
          href={isOnSavedNews ? props.article.link : props.article.url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={props.article.image}
            className="cards-list__card-image"
            alt="art"
          ></img>
        </a>
      </div>
      <div className="cards-list__card-content">
        <span className="cards-list__card-date">{convertedDate}</span>
        <h3 className="cards-list__card-title">{props.article.title}</h3>
        <p className="cards-list__card-text">{props.article.text}</p>
        <span className="cards-list__card-source">{props.article.source}</span>
      </div>
    </li>
  );
}

export default NewsCard;
