import React from "react";
import articleService from "../data/ArticleService";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({ match }) => {
  const { id } = match.params;
  const articles = articleService.getArticles();
  const article = articles.find(p => p.id === id);
  if (!article) return <NotFoundPage />;

  const relatedArticles = articleService.getArticlesFromIds(article.related);

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <div key={key}>
          <p>{paragraph}</p>
          <br />
        </div>
      ))}
      <h3>Related Articles:</h3>
      <ArticlesList articles={relatedArticles} />
    </>
  );
};

export default ArticlePage;
