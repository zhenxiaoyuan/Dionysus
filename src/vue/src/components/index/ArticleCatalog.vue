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
    this.axios.get("/api/article/all").then(response => {
      this.articles = JSON.parse(response.data);
    });
  },
  data() {
    return {
      articles: []
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


