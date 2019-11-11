import React, { useState, useEffect } from "react";
import articleService from "../services/ArticleService";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    (async () => {
      const articleData = await articleService.getArticleAsync(id);
      setArticle(articleData);
      const relatedArticles = [];
      for (let articleId of articleData.related) {
        const relatedArticleData = await articleService.getArticleAsync(articleId);
        relatedArticles.push(relatedArticleData);
      }
      setRelatedArticles(relatedArticles);
    })();
  }, [id]);

  if (!article) return <NotFoundPage />;

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
