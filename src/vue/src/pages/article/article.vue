<template>
    <el-row>
        <el-col :span="18">
            <article-detail :article="article"></article-detail>
        </el-col>
        <el-col :span="6">
            <app-aside></app-aside>
        </el-col>
    </el-row>
</template>

<script>
import appAside from "@/components/app/asider";
import articleDetail from "@/components/article/detail";

export default {
  data() {
    return {
      article: this.$store.getters.oneArticle(this.$route.params.id)
    }
  },

  components: {
    appAside,
    articleDetail
  }

}
</script>