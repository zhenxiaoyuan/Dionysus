<template>
  <div id="terminal-edit">
    <el-input placeholder="请输入标题" v-model="title" clearable></el-input>

    <div id="editor">
      <textarea v-model="content"></textarea>
      <markdown-displayer :width="{ width: '50%' }" v-bind:input="content" />
    </div>

    <el-input placeholder="请输入分类" v-model="classify" clearable></el-input>

    <el-button v-if="this.$route.params.id" type="primary" @click="update">
      <i class="el-icon-document" /> 更新
    </el-button>
    <el-button v-else type="primary" @click="add">
      <i class="el-icon-document" /> 添加
    </el-button>
  </div>
</template>

<script>
import markdownDisplayer from "@/components/common/MarkdownDisplayer";
import { addArticle, updateArticle } from "@/service/getData";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      article: {},
      newArticle: {},
      resultType: "",
      addResult: {},
      resultInfo: {},
      // tmpArticle: {},
      title: "", // 文章标题
      content: "", // 文章正文
      classify: "" // 文章分类
    };
  },

  mounted() {
    if (this.$route.params.id) {
      this.article = this.getArticleById(this.$route.params.id);
      this.newArticle = this.article;
      this.title = this.article.title;
      this.content = this.article.content;
      this.classify = this.article.classify;
    }
  },

  computed: {
    ...mapGetters(["getArticleById"])
  },

  methods: {
    add() {
      addArticle({
        title: this.title,
        content: this.content,
        classify: this.classify
      }).then(response => {
        console.log(response.data);
        console.log(JSON.parse(response.data));
        this.addResult = JSON.parse(response.data);
        if (this.addResult.type !== "error") {
          // 返回没报错
          this.resultInfo = JSON.parse(this.addResult.info);
          this.ADD_ARTICLE({
            id: this.resultInfo.id,
            title: this.title,
            content: this.content,
            time: this.resultInfo.time,
            readcount: this.resultInfo.readcount,
            classify: this.classify
          });

          this.$router.go(-1);
        }
        else {
          // 添加过程中出现问题
          // messagebox 提示出现问题
          // 不应该返回页面
        }
      });
    },

    update() {
      // 在这里加一层校验，如果没有改变就不用和服务器通信了
      updateArticle({
        title: this.title,
        content: this.content,
        classify: this.classify
      }).then(response => {
        console.log(response.data);
        // 返回id后再同步
        // this.newArticle = this.article
        this.newArticle.title = this.title;
        this.newArticle.content = this.content;
        this.newArticle.classify = this.classify;
        this.UPDATE_ARTICLE({
          oldArticle: this.article,
          newArticle: this.newArticle
        });
        this.$router.go(-1);

        // 跳出并刷新
        // store getter
      });
    },

    ...mapMutations(["ADD_ARTICLE", "UPDATE_ARTICLE"])
  },

  components: {
    markdownDisplayer
  }
};
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