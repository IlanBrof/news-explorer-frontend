import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
  const [articlesToRender, setArticlesToRender] = useState(3);

  const handleMoreNewsClick = () => {
    if (articlesToRender < props.searchResults.length) {
      localStorage.setItem("counter", parseInt(articlesToRender) + 3);
      setArticlesToRender(localStorage.getItem("counter"));
    }
  };

  return (
    <section
      className={
        props.isSearchResult ? "cards-list cards-list_active" : "cards-list"
      }
    >
      <h2 className="cards-list__title">Search results</h2>
      <ul className="cards-list__container">
        {props.searchResults
          .slice(0, articlesToRender)
          .map((article, index) => (
            <NewsCard
              // key={"articleId_" + Math.round(Math.random() * 555555)}
              // key={article.id}
              key={index}
              article={{
                image: article.urlToImage,
                date: article.publishedAt,
                title: article.title,
                text: article.content,
                url: article.url,
                source: article.source.name,
              }}
              isLoggedIn={props.isLoggedIn}
              handleSaveArticle={props.handleSaveArticle}
              onDeleteBtnClick={props.onDeleteBtnClick}
              savedArticles={props.savedArticles}
              articles={props.articles}
              setLoginPopupOpen={props.setLoginPopupOpen}
            />
          ))}
      </ul>
      <button className="cards-list__btn" onClick={handleMoreNewsClick}>
        Show More
      </button>
    </section>
  );
}

export default NewsCardList;
