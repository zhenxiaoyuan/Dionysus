<template>
    <div id="index-page">
        <el-row>
            <el-col :span="18">
                <ArticleCatalog :articles="articles"></ArticleCatalog>
            </el-col>
            <el-col :span="6">
                <AppAside></AppAside>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ArticleCatalog from "@/components/index/ArticleCatalog";
import AppAside from "@/components/common/AppAside";

export default {
  name: "Index",
  components: {
    ArticleCatalog,
    AppAside
  },
  mounted() {
    this.axios.get("/api/article/all").then(response => {
      this.articles = JSON.parse(response.data);

      context.commit({
        type: "initArticles",
        articles: JSON.parse(response.data)
      });
      // console.log("I should come at last.")
      // JSON.parse(response.data);
    });
    // this.$store.dispatch({
    //   type: "initArticlesAsync"
    //   // article: this.testArticle
    // });
    console.log("index");
  },
  data() {
    return {
      articles: []
    };
  }
};
</script>

<style>
</style>
