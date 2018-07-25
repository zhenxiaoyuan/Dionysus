const axios = require('axios')

// 初始化首页文章
export const initArticles = () => axios.get("/api/article/all")

// 初始化termminal页文章数据
export const terminalArticles = () => axios.get("/api/article/all")

// 增加文章
export const addArticle = (article) => axios.post("/api/article/add", article)

// 删除文章
export const deleteArticle = (articleId) => axios.post("/api/article/delete", articleId)

// 修改文章
export const updateArticle = (articleInfo) => axios.post("/api/article/update", articleInfo)

// update() {
//     //   在这里加一层校验，如果没有改变就不用和服务器通信了
//     // this.axios
//     //   .post("/api/article/update", {
//     //     title: this.article.info.title,
//     //     content: this.article.info.content,
//     //     classify: this.article.info.classify
//     //   })
//     //   .then(response => {
//     //     console.log(response.data);
//     //   });
//     console.log("update");
//   },
//   add() {
//     // this.axios
//     //   .post("/api/article/add", {
//     //     title: this.article.info.title,
//     //     content: this.article.info.content,
//     //     classify: this.article.info.classify
//     //   })
//     //   .then(response => {
//     //     console.log(response.data);
//     //   });
//     console.log("add");
//   }