import Vue from 'vue';
import Vuex from 'vuex';
// import "@/assets/js/axios"; // 引入 axios

Vue.use(Vuex);

const axios = require('axios');

export default new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
    allArticles: state => {
      return state.articles;
    }, 
    oneArticle: state => id => {
      return state.articles.find(article => article.id === id);
    }
  },
  mutations: {
    initArticles(state, payload) {
      state.articles = payload.articles;
      //   state.articles = state.articles.concat(payload.articles);
      console.log(JSON.stringify(state.articles));
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
    }
  },
  actions: {
    initArticlesAsync(context) {
      // 记得添加错误处理
      axios.get("/api/article/all").then(response => {
        context.commit({
          type: 'initArticles',
          articles: JSON.parse(response.data)
        })
        // console.log("I should come at last.")
        // JSON.parse(response.data);
      });
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
    addArticleAsync(context, payload) {
      axios.get("/api/test").then(response => {
        console.log(response.data);
        context.commit({
          type: 'addArticle',
          article: payload
        })
      });

    }
  }
});
