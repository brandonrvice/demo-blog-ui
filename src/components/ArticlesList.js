import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Card key={key}>
        <Card.Body>
          <Link className="article-list-item" key={key} to={`/article/${article.id}`}>
            <h4>{article.title}</h4>
          </Link>
          <div className={"lead"}>{article.content[0].substring(0, 150)}...</div>
          <div>
            <Badge variant="info">{article.upvotes}</Badge>
            <Badge variant="secondary">{article.username}</Badge>
          </div>
        </Card.Body>
      </Card>
    ))}
  </>
);

export default ArticlesList;
