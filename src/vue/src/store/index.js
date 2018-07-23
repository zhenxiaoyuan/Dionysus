import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
    allArticles: state => {
      return state.articles;
    }, 
    oneArticle: state => id => {
      // console.log("get one")
      return state.articles.find(article => article.id === id);
      // return state.articles.length;
    }
  },
  mutations: {
    initArticles(state, payload) {
      // state.articles.push(...payload.articles);
        state.articles = payload.articles;
      // console.log(JSON.stringify(payload.articles));
      // console.log("1" + this.getters.allArticles);
      // console.log("2" + JSON.stringify(this.getters.allArticles));

      // console.log(JSON.stringify(this.getters.oneArticle("test3")));

    },
    // 这个做成分页加载
    // loadArticles(state, payload) {
    //   state.articles.push(...payload.articles);
    //   //   state.articles = state.articles.concat(payload.articles);
    //   console.log(JSON.stringify(state.articles));
    // },
    addArticle(state, payload) {
      state.articles.push(payload.article);
      console.log(JSON.stringify(this.getters.allArticles));
    },

    deleteArticle(state, payload) {
      state.articles.splice(state.articles.indexOf(payload.article), 1);
      // console.log(this.getters.allArticles)
      // for (var i = 0; i < state.articles.indexOf(payload.articleId))
      // console.log(JSON.stringify(payload.article))
        // console.log(state.articles.indexOf(payload.article))
    }
  },
  actions: {
    initArticlesAsync(context, payload) {
      // 记得添加错误处理
      // axios.get("/api/article/all").then(response => {
        context.commit({
          type: 'initArticles',
          articles: payload.articles
        })
        // console.log("I should come at last.")
        // JSON.parse(response.data);
      // });
    },
    // loadArticlesAsync(context) {
    //   // 记得添加错误处理
    //   axios.get("/api/article/all").then(response => {
    //     context.commit({
    //       type: 'loadArticles',
    //       articles: JSON.parse(response.data)
    //     })
    //     // console.log("I should come at last.")
    //     // JSON.parse(response.data);
    //   });
    // },
    // addArticleAsync(context, payload) {
    //   axios.get("/api/test").then(response => {
    //     console.log(response.data);
    //     context.commit({
    //       type: 'addArticle',
    //       article: payload
    //     })
    //   });

    // }
  }
});
