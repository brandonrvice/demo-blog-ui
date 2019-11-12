import React from "react";
import { Card, Badge } from "react-bootstrap";

const CommentsList = ({ comments }) => (
  <>
    <h3>Comments</h3>
    {comments.map((comment, key) => (
      <Card key={key}>
        <Card.Body>
          <div className={"lead"}>{comment.text}</div>
          <Badge variant="secondary">{comment.username}</Badge>
        </Card.Body>
      </Card>
    ))}
  </>
);

export default CommentsList;
