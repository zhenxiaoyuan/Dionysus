<template>
  <div>
    <!-- ArticleCatalog -->
    <ul class="article-catalog-ul">
      <li v-for="article in articles" v-bind:key="article.id" style="list-style: none" class="article-catalog-li">
        <!-- <ArticleBrief v-bind:article="article"></ArticleBrief> -->
        <ArticleTitle :id="article.id" :title="article.info.title"></ArticleTitle>
        <MarkdownDisplayer :width="{ width: '100%' }" :input="article.info.content" ></MarkdownDisplayer>
        <ArticleFooter :id="article.id" :time="article.info.time" :readcount="article.info.readcount" :classify="article.info.classify"></ArticleFooter>
      </li>
    </ul>
  </div>
</template>

<script>
import ArticleBrief from './ArticleBrief';
import MarkdownDisplayer from "../common/MarkdownDisplayer";
import ArticleTitle from "./ArticleTitle";
import ArticleFooter from "./ArticleFooter";

export default {
  props: ['articles'],
  mounted() {
    // console.log(JSON.stringify(this.$store.getters.allArticles));
    // this.$store.commit({
    //     type: 'addArticle',
    //     article: this.testArticle
    // });
    // console.log(this.isInit)
    // if (this.isInit) {
    // this.$store.dispatch({
    //   type: "initArticlesAsync"
    //   // article: this.testArticle
    // });
    // console.log("catalog");
    // this.isInit = false;
    // }

    // console.log(JSON.stringify(this.$store.getters.allArticles));
    // this.axios.get("/api/article/all").then(response => {
    //   this.articles = JSON.parse(response.data);
    // });
  },
  data() {
    return {
      // articles: this.test
      // articles: this.$store.getters.allArticles
      // isInit: true
      // testArticle: {
      //   id: "4",
      //   info: {
      //     title: "info-title-4",
      //     content: "info-content-4"
      //   }
      // }
    };
  },
  components: {
    ArticleBrief,
    MarkdownDisplayer,
    ArticleTitle,
    ArticleFooter
  }
};
</script>

<style>
.article-catalog-ul {
  padding: 0px;
  margin: 0px;
}
.article-catalog-li {
  border: 1px solid #cccccc;
  border-radius: 6px;
  background-color: white;
  margin: 0px 30px 20px 30px;
  padding: 20px;
}
</style>


