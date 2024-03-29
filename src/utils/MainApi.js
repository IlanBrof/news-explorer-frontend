class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._token = options.token;
    this._headers = {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.status, response.statusText); //eslint-disable
    }
  }

  async getSavedArticles() {
    const response = await fetch(`${this._url}/articles`, {
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async getUserInfo() {
    const response = await fetch(`${this._url}/users/me`, {
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async deleteSavedArticle(articleId) {
    const response = await fetch(`${this._url}/articles/${articleId}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async saveArticle(article) {
    const response = await fetch(`${this._url}/articles`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        keyword: localStorage.getItem("keyword"),
        title: article.title,
        text: article.text,
        link: article.url,
        source: article.source,
        image: article.image,
        date: article.date,
      }),
    });
    return this._checkResponse(response);
  }
}

const MainApi = new Api({
  baseUrl: "https://api.newsexplorer.brofman.dev",
  // baseUrl: 'http://localhost:3000',
});

export default MainApi;
