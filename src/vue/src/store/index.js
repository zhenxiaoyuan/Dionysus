import Vue from 'vue';
import Vuex from 'vuex';
// import "@/assets/js/axios"; // 引入 axios

Vue.use(Vuex);

const axios = require('axios');

export default new Vuex.Store({
  state: {
    articles: [{
        id: "1",
        info: {
          title: "info-title-1",
          content: "info-content-1"
        }
      },
      {
        id: "2",
        info: {
          title: "info-title-2",
          content: "info-content-2"
        }
      }
    ]
  },
  getters: {
    allArticles: state => {
      return state.articles;
    }
  },
  mutations: {
    addArticle(state, payload) {
      state.articles.push(payload.article);
      console.log(JSON.stringify(this.getters.allArticles));
    }
  },
  actions: {
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
