import React, { useEffect, useState } from "react";
import articleService from "../services/ArticleService";
import { Button } from "react-bootstrap";

const UpvotesSection = ({ id, upvotesp }) => {
  const [upvotesd, setUpvotes] = useState(upvotesp);

  const upvoteArticle = async () => {
    const { upvotes } = await articleService.upvote(id);
    setUpvotes(upvotes);
  };

  useEffect(() => {
    setUpvotes(upvotesp);
  }, [upvotesp]);

  return (
    <div id="upvotes-section">
      <Button variant="secondary" onClick={() => upvoteArticle()}>
        Add Upvote
      </Button>
      <p className={"text-info"}>This article has been upvoted {upvotesd} times</p>
    </div>
  );
};

export default UpvotesSection;
