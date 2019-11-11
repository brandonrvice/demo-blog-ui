import React, { useState, useEffect } from "react";
import articleService from "../services/ArticleService";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const { id } = match.params;

  useEffect(() => {
    (async () => {
      const articleData = await articleService.getArticleAsync(id);
      if (articleData !== undefined) {
        setArticle(articleData);
        const related = await articleService.getArticlesFromIdsAsync(articleData.related);
        setRelatedArticles(related);
      } else {
        setNotFound(true);
      }
    })();
  }, [id]);

  if (notFound) {
    return <NotFoundPage />;
  }

  if (article) {
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
  } else {
    return <div>Loading...</div>;
  }
};

export default ArticlePage;
