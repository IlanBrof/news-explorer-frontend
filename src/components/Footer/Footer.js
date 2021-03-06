function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left-container">
        <span className="footer__copyrights">
          © {new Date().getFullYear()} Supersite, Powered by News API
        </span>
      </div>

      <nav className="footer__right-container">
        <div className="footer__links">
          <a className="footer__link-btn" href="/">
            Home
          </a>
          <a
            className="footer__link-btn"
            href="https://practicum.yandex.com/"
            target="_blank"
          >
            Practicum by Yandex
          </a>
        </div>
        <div className="footer__social-links">
          <a
            className="footer_link-icon"
            href="https://github.com/Yandex-Practicum"
            target="_blank"
          ></a>
          <a
            className="footer_link-icon"
            href="https://www.facebook.com/Practicum100IL"
            target="_blank"
          ></a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
