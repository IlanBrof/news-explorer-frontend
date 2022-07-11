import { useState } from "react";

function SearchForm(props) {

  const [keyWord, setKeyWord] = useState('');

  return (
    <div className="search-form-container">
      <form
        className="search-form"
        onSubmit={(evt) => {
          props.onSearchClick(evt, keyWord);
        }}
      >
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter Topic"
          value={keyWord}
          onChange={(evt) =>
            setKeyWord(evt.target.value)}
        />
        <button className="search-form__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
