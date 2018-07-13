<template>
    <div id="detail-page">
        <el-row>
            <el-col :span="18">
                <ArticleDetail :id="this.id"></ArticleDetail>
            </el-col>
            <el-col :span="6">
                <AppAside></AppAside>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import AppAside from "@/components/common/AppAside";
import ArticleDetail from "@/components/index/ArticleDetail";

export default {
  name: "Detail",
  
  mounted() {
    //   console.log("detail is mounted")
    // this.axios.get("/api/article/" + this.$route.params.id).then(response => {
    //   this.article = JSON.parse(response.data);
    // // console.log(this.$route.params.id + JSON.stringify(response.data));
    // console.log(this.article.id + " " + this.article.info.title)

    // });
    
  },
  data() {
    return {
      id: this.$route.params.id,
        // article: {}
    }
  },
  components: {
    AppAside,
    ArticleDetail
  },
  
};
</script>