function Preloader(props) {
  return (
    <div
      className={props.isLoading ? "preloader preloader_active" : "preloader"}
    >
      <i className="preloader__circle-preloader"></i>
      <span className="preloader__text">Searching for news...</span>
    </div>
  );
}

export default Preloader;
