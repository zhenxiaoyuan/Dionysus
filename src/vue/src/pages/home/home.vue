<template>
    <el-row>
        <el-col :span="18">
            <article-catalog :articles="articles"></article-catalog>
        </el-col>
        <el-col :span="6">
            <app-asider></app-asider>
        </el-col>
    </el-row>
</template>

<script>
import articleCatalog from '@/components/article/catalog';
import appAsider from '@/components/app/asider';

export default {
  data() {
    return {
      articles: []
    };
  },

  mounted() {
    // 后期并入service
    this.axios.get("/api/article/all").then(response => {
      this.articles = JSON.parse(response.data);
      this.$store.dispatch({
        type: "initArticlesAsync",
        articles: response.data
      });
    });
  },

  components: {
    articleCatalog,
    appAsider
  }
}

</script>

<style>
</style>
