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
import articleCatalog from "@/components/article/catalog";
import appAsider from "@/components/app/asider";
import { initArticles } from "@/service/getData";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      articles: []
    };
  },

  mounted() {
    // 后退到此页需要刷新页面
    initArticles().then(response => {
      this.articles = JSON.parse(response.data);
      // 增加错误判断
      this.INIT_ARTICLES(this.articles);
    });
  },

  methods: {
    ...mapMutations(["INIT_ARTICLES"])
  },

  components: {
    articleCatalog,
    appAsider
  }
};
</script>

<style>
</style>
