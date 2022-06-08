import {API_KEY} from "./constants";

const getSearchResult = async (q) => {
  let date = new Date();
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ];

  const res = await fetch(
    // `https://newsapi.org/v2/everything?q=${q}&from=${year}-${
    //   month + 1
    // }-${day}&to=${year}-${month + 1}-${
    //   day - 7
    // }&pagesize=100&language=en&apiKey=${API_KEY}`,
    `https://nomoreparties.co/news/v2/everything?q=${q}&from=${year}-${
      month + 1
    }-${day}&to=${year}-${month + 1}-${
      day - 7
    }&pagesize=100&language=en&apiKey=${API_KEY}`,
    {
      method: "GET",
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return Promise.reject(res);
  }
};

export { getSearchResult };
