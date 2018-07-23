<template>
    <div id="terminal-index">
        <router-link to="/edit">
            <el-button>
                <i class="el-icon-plus" /> 新建
            </el-button>
        </router-link>

        <article-table :articles="articles"></article-table>
    </div>

</template>
<script>
import articleTable from '@/components/terminal/articleTable'
import { initArticles } from '@/service/getData'

export default {
  data() {
    return {
      articles: []
    }
  },

  mounted() {
    // 后期并入service
    initArticles().then(response => {
      this.articles = JSON.parse(response.data)
      this.$store.dispatch({
        type: "initArticlesAsync",
        articles: this.articles
      });
    })
  },

  components: {
    articleTable
  }
}
</script>

<style scoped>
</style>