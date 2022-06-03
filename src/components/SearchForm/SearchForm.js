function SearchForm(props) {
  return (
    <div className="search-form-container">
      <form className="search-form">
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter Topic"
        />
        <button className="search-form__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
