import articleData from "./article-data.json";

const articleService = {};

articleService.getArticles = () => {
  return articleData;
};

articleService.getArticlesFromIds = articleIds => {
  const articles = [];
  for (let articleId of articleIds) {
    let relatedArticle = articleData.find(p => p.id === articleId);
    articles.push(relatedArticle);
  }
  return articles;
};

export default articleService;
