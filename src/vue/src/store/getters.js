export default {
  getAllArticles: state => {
    return state.articles
  },

  getArticleById: state => id => {
    return state.articles.find(article => article.id === id)
  }

}
