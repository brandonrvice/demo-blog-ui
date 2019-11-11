import axios from "axios";

const articleService = {};

articleService.getArticlesAsync = async () => {
  let res = await axios.get("http://localhost:8000/api/articles");
  return res.data;
};

articleService.getArticleAsync = async id => {
  try {
    let res = await axios.get(`http://localhost:8000/api/article/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default articleService;
