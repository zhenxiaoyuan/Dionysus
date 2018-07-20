const axios = require('axios')

// 初始化首页文章
export const homeArticles = () => {
    axios.get("/api/article/all").then(response => {
      context.commit({
        type: 'initArticles',
        articles: JSON.parse(response.data)
      })
      // console.log("I should come at last.")
      // JSON.parse(response.data);
    });
}