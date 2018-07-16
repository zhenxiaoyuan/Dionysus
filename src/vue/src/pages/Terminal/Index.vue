<template>
    <div id="terminal-index">
        <router-link to="/terminal/edit">
            <el-button>
                <i class="el-icon-plus" /> 新建
            </el-button>
        </router-link>

        <ArticleTable :articles="articles"></ArticleTable>
        <!-- <el-input placeholder="请输入标题" v-model="title" clearable></el-input>

        <div id="editor">
            <textarea v-model="content"></textarea>
            <MarkdownDisplayer :width="{ width: '50%' }" v-bind:input="content" />
        </div>
        <el-input placeholder="请输入分类" v-model="classify" clearable></el-input>
        <el-button type="primary" @click="save">
            <i class="el-icon-document" />
        </el-button> -->
    </div>

</template>
<script>
// import MarkdownDisplayer from "@/components/common/MarkdownDisplayer";
// import MarkdownEditor from "@/components/common/MarkdownEditor";
import ArticleTable from "@/components/terminal/ArticleTable";

export default {
  name: "Terminal",
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    this.axios.get("/api/article/all").then(response => {
      this.articles = JSON.parse(response.data);
    });
  },
  components: {
    // MarkdownDisplayer
    ArticleTable
  },
  methods: {
    // save() {
    //   this.axios
    //     .post("/api/article/add", {
    //       //   article: {
    //       //   id: this.title,
    //       //   info: {
    //       title: this.title,
    //       content: this.content,
    //       classify: this.classify
    //       //   }
    //       //   }
    //     })
    //     .then(response => {
    //       console.log(response.data);
    //     });
    // }
  }
};
</script>

<style scoped>
/* #editor {
  height: 600px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  text-align: left;
}
#editor textarea {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}
#editor textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
} */
</style>