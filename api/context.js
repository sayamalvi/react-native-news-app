import { createContext, useEffect, useState } from "react";
import { getNewsAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();
const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(1);
  const fetchNews = async () => {
    const { data } = await axios.get(getNewsAPI(category));
    setNews(data);
    setIndex(1);
  };
  useEffect(() => {
    fetchNews();
  }, [category]);
  return (
    <NewsContext.Provider
      value={{ news, index, setIndex, fetchNews, setCategory }}
    >
      {children}
    </NewsContext.Provider>
  );
};
export default NewsContextProvider;
