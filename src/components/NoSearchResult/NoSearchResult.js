import notFoundIcon from "../../images/not-found.svg";

function NoSearchResult(props) {
  return (
    <section
      className={
        props.isNoSearchResult
          ? "no-search-result no-search-result_active"
          : "no-search-result"
      }
    >
      <img
        className="no-search-result__icon"
        src={notFoundIcon}
        alt="not found"
      ></img>
      <h3 className="no-search-result__title">Nothing Found</h3>
      <span className="no-search-result__text">
        Sorry, but nothing matched your search terms.
      </span>
    </section>
  );
}

export default NoSearchResult;
