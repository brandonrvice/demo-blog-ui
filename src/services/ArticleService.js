import axios from "axios";

const articleService = {};
const httpServer = "https://629izzy6ig.execute-api.us-west-2.amazonaws.com";
// const httpServer = "http://localhost:80";

articleService.getArticles = async () => {
  let res = await axios.get(`${httpServer}/api/articles`);
  return res.data;
};

articleService.getArticlesFromIds = async (ids) => {
  let res = await axios.post(`${httpServer}/api/articles`, ids);
  return res.data;
};

articleService.upvote = async (id) => {
  let res = await axios.post(`${httpServer}/api/article/${id}/upvote`);
  return res.data;
};

articleService.addComment = async (articleId, comment) => {
  let res = await axios.post(`${httpServer}/api/article/${articleId}/comment`, comment);
  return res.data;
};

articleService.getArticleAsync = async (id) => {
  try {
    let res = await axios.get(`${httpServer}/api/article/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default articleService;
