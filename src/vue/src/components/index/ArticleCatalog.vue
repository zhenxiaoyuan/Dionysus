<template>
    <div>
        <!-- ArticleCatalog -->
        <ul class="article-catalog-ul">
            <li v-for="article in articles" v-bind:key="article.id" style="list-style: none">
                <ArticleBrief v-bind:article="article"></ArticleBrief>
            </li>
        </ul>
    </div>
</template>

<script>
import ArticleBrief from "./ArticleBrief";

export default {
  name: "ArticleCatalog",
  mounted() {
    console.log(JSON.stringify(this.$store.getters.allArticles));
    // this.$store.commit({
    //     type: 'addArticle',
    //     article: this.testArticle
    // });
    
    this.$store.dispatch({
        type: 'addArticleAsync',
        article: this.testArticle
    })
    // console.log(JSON.stringify(this.$store.getters.allArticles));
    this.axios.get("/api/article/all").then(response => {
      this.articles = JSON.parse(response.data);
    });
  },
  data() {
    return {
      articles: [],
      testArticle: {
        id: "4",
        info: {
          title: "info-title-4",
          content: "info-content-4"
        }
      }
    };
  },
  components: {
    ArticleBrief
  }
};
</script>

<style>
.article-catalog-ul {
  padding: 0px;
  margin: 0px;
}
</style>


