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
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      articles: []
    }
  },

  mounted() {
    initArticles().then(response => {
      this.articles = JSON.parse(response.data);
      // 增加错误判断s
      this.INIT_ARTICLES(this.articles);
    })
  },

  components: {
    articleTable
  },

  methods: {
    ...mapMutations(['INIT_ARTICLES'])
  }
}
</script>

<style scoped>
</style>