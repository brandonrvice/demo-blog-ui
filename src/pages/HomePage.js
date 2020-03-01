import React, { useState, useEffect } from "react";
import ArticlesList from "../components/ArticlesList";
import articleService from "../services/ArticleService";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

const HomePage = () => {
  const [articleList, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await articleService.getArticles();
      setArticles(data);
    })();
  }, []);

  return (
    <>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <p>
          <Link to="/about">
            <Button renderAs="button" variant="primary">
              <span>Learn more</span>
            </Button>
          </Link>
        </p>
      </Jumbotron>
      <ArticlesList articles={articleList} />
    </>
  );
};

export default HomePage;
