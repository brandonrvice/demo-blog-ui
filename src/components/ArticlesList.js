import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Card>
        <Card.Body>
          <Link className="article-list-item" key={key} to={`/article/${article.id}`}>
            <h4>{article.title}</h4>
          </Link>
          <p className={"lead"}>{article.content[0].substring(0, 150)}...</p>
        </Card.Body>
      </Card>
    ))}
  </>
);

export default ArticlesList;
