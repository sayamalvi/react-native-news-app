import { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();
const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(1);
  const [source, setSource] = useState();
  const fetchNews = async (reset = category) => {
    const { data } = await axios.get(getNewsAPI(reset));
    setNews(data);
    setIndex(0);
  };
  const fetchNewFromSource = async () => {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
      setIndex(0);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [category]);
  useEffect(() => {
    fetchNewFromSource();
  }, [source]);
  return (
    <NewsContext.Provider
      value={{ news, index, setIndex, fetchNews, setCategory, setSource }}
    >
      {children}
    </NewsContext.Provider>
  );
};
export default NewsContextProvider;
