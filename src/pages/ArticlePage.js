import React from "react";
import articles from "./article-content";

const ArticlePage = ({ match }) => {
  const { name } = match.params;
  const article = articles.find(p => p.name === name);

  if (!article) return <h1>Article does not exist!</h1>;

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <div key={key}>
          <p>{paragraph}</p>
          <br />
        </div>
      ))}
    </>
  );
};

export default ArticlePage;
