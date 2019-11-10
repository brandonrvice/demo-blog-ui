import React from "react";
import ArticlesList from "../components/ArticlesList";
import articles from "../pages/article-content";

const ArticlesListPage = () => (
  <>
    <h1>Articles Page</h1>
    <ArticlesList articles={articles} />
  </>
);

export default ArticlesListPage;
