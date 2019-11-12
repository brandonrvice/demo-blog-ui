import React, { useState } from "react";
import articleService from "../services/ArticleService";
import { Form, Button, Card } from "react-bootstrap";

export default function AddCommentForm({ id, setComments }) {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("invalid comment");
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }

    e.preventDefault();
    const comment = {
      username: username,
      text: commentText
    };
    const { comments } = await articleService.addComment(id, comment);
    setComments(comments);
    setValidated(false);
    setUsername("");
    setCommentText("");
  };

  return (
    <Card>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Control
              required
              size="sm"
              type="text"
              placeholder="enter your name"
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="commentText">
            <Form.Control
              required
              size="sm"
              type="text"
              placeholder="enter your comment"
              value={commentText}
              onChange={e => {
                setCommentText(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">Please enter a comment.</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" size="sm">
            Add Comment
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
