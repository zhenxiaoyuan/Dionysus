<template>
    <div id="terminal-edit">
        <el-input placeholder="请输入标题" v-model="article.info.title" clearable></el-input>

        <div id="editor">
            <textarea v-model="article.info.content"></textarea>
            <markdown-displayer :width="{ width: '50%' }" v-bind:input="article.info.content" />
        </div>

        <el-input placeholder="请输入分类" v-model="article.info.classify" clearable></el-input>

        <el-button v-if="this.$route.params.id" type="primary" @click="update">
            <i class="el-icon-document" /> 更新
        </el-button>
        <el-button v-else type="primary" @click="add">
            <i class="el-icon-document" /> 添加
        </el-button>
    </div>
</template>

<script>
import markdownDisplayer from '@/components/common/MarkdownDisplayer'
// import markdownEditor from '@/components/common/MarkdownEditor'

export default {
  data() {
    return {
      article: this.$route.params.id
        ? this.$store.getters.oneArticle(this.$route.params.id)
        : {
            info: {
              title: "",
              content: "",
              classify: ""
            }
          }
    };
  },

  components: {
    markdownDisplayer
  },

  methods: {
    update() {
      //   在这里加一层校验，如果没有改变就不用和服务器通信了
      // this.axios
      //   .post("/api/article/update", {
      //     title: this.article.info.title,
      //     content: this.article.info.content,
      //     classify: this.article.info.classify
      //   })
      //   .then(response => {
      //     console.log(response.data);
      //   });
      console.log("update");
    },
    add() {
      // this.axios
      //   .post("/api/article/add", {
      //     title: this.article.info.title,
      //     content: this.article.info.content,
      //     classify: this.article.info.classify
      //   })
      //   .then(response => {
      //     console.log(response.data);
      //   });
      console.log("add");
    }
  }
}
</script>

<style scoped>
#editor {
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
}
</style>