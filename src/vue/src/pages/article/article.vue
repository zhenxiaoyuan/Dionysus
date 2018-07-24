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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      article: {
          id: '',
          info: {
              title: '',
              content: '',
              readcount: 0,
              classify: ''
          }
      }
    }
  },

  components: {
    appAside,
    articleDetail
  },

  mounted() {
    this.article = this.getArticleById(this.$route.params.id);
  },

  computed: {
    ...mapGetters(["getArticleById"])
  }

}
</script>