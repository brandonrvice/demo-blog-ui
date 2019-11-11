import React, { useState, useEffect } from "react";
import ArticlesList from "../components/ArticlesList";
import articleService from "../services/ArticleService";

const ArticlesListPage = () => {
  const [articleList, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await articleService.getArticlesAsync();
      setArticles(data);
    })();
  }, []);

  return (
    <>
      <h1>Articles Page</h1>
      <ArticlesList articles={articleList} />
    </>
  );
};

export default ArticlesListPage;
