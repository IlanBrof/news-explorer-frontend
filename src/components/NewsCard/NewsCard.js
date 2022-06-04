import { useState } from "react";

function NewsCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    setIsOverlayVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsOverlayVisible(false);
  };

  const handleButtonClick = () => {
    if (!isButtonClicked) {
      setIsButtonClicked(true);
    } else {
      setIsButtonClicked(false);
    }
  };

  return (
    <li className="cards-list__card">
      <div className="cards-list__card-image-container">
        <div className="cards-list__button-container">
          <button
            className={`${
              props.isLoggedIn
                ? "cards-list__save-btn_active"
                : "cards-list__save-btn"
            } ${
              props.isLoggedIn && isButtonClicked
                ? "cards-list__save-btn_marked"
                : "cards-list__save-btn"
            }
              ${
                props.isLoggedIn && props.isOnSavedNews
                  ? "cards-list__delete-btn"
                  : "cards-list__save-btn"
              }
              ${
                props.isLoggedIn && props.isOnSavedNews && isHovered
                  ? "cards-list__delete-btn cards-list__delete-btn_active"
                  : "cards-list__save-btn"
              }
                `}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleButtonClick}
          ></button>
          <div
            className={`${
              props.isLoggedIn && props.isOnSavedNews && isHovered
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
              props.isLoggedIn && props.isOnSavedNews
                ? "cards-list__login-overlay_active cards-list__login-overlay_keyword"
                : "cards-list__login-overlay"
            }`}
          >
            <span className="cards-list__login-overlay-text">
              {props.keyword}
            </span>
          </div>
          <div
            className={
              !props.isLoggedIn &&
              isOverlayVisible
                ? "cards-list__login-overlay cards-list__login-overlay_active"
                : "cards-list__login-overlay"
            }
          >
            <span className="cards-list__login-overlay-text">
              Sign in to save articles
            </span>
          </div>
        </div>
        <img
          src={props.articleImage}
          className="cards-list__card-image"
          alt="art"
        ></img>
      </div>
      <div className="cards-list__card-content">
        <span className="cards-list__card-date">{props.articleDate}</span>
        <h3 className="cards-list__card-title">{props.articleTitle}</h3>
        <p className="cards-list__card-text">{props.articleText}</p>
        <span className="cards-list__card-source">{props.articleSource}</span>
      </div>
    </li>
  );
}

export default NewsCard;
