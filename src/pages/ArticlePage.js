import React, { useState, useEffect } from "react";
import articleService from "../services/ArticleService";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentsForm from "../components/AddCommentForm";

const ArticlePage = ({ match }) => {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const { id } = match.params;

  useEffect(() => {
    (async () => {
      const articleData = await articleService.getArticleAsync(id);
      if (articleData !== undefined) {
        setArticle(articleData);
        setComments(articleData.comments);
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
        <UpvotesSection id={article.id} upvotesp={article.upvotes} />
        {article.content.map((paragraph, key) => (
          <div key={key}>
            <p className={"lead"}>{paragraph}</p>
            <br />
          </div>
        ))}
        <CommentsList comments={comments} />
        <AddCommentsForm id={article.id} setComments={setComments} />
        <br />
        <h3>Related Articles</h3>
        <ArticlesList articles={relatedArticles} />
        <br />
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ArticlePage;
