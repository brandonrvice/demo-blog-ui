import axios from "axios";

const articleService = {};
const httpServer = "35.166.8.20";
// const httpServer = "localhost:8000";

articleService.getArticlesAsync = async () => {
  let res = await axios.get(`http://${httpServer}/api/articles`);
  return res.data;
};

articleService.getArticlesFromIdsAsync = async ids => {
  let res = await axios.post(`http://${httpServer}/api/articles`, ids);
  return res.data;
};

articleService.upvote = async id => {
  let res = await axios.post(`http://${httpServer}/api/article/${id}/upvote`);
  return res.data;
};

articleService.addComment = async (articleId, comment) => {
  let res = await axios.post(`http://${httpServer}/api/article/${articleId}/comment`, comment);
  return res.data;
};

articleService.getArticleAsync = async id => {
  try {
    let res = await axios.get(`http://${httpServer}/api/article/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default articleService;
