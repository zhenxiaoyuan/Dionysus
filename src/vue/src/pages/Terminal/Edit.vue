<template>
  <div id="terminal-edit">
    <el-input placeholder="请输入标题" v-model="article.info.title" clearable></el-input>

    <div id="editor">
      <textarea v-model="article.info.content"></textarea>
      <MarkdownDisplayer :width="{ width: '50%' }" v-bind:input="article.info.content" />
    </div>
    <el-input placeholder="请输入分类" v-model="article.info.classify" clearable></el-input>
    <el-button type="primary" @click="save">
      <i class="el-icon-document" />
    </el-button>
  </div>
</template>
<script>
import MarkdownDisplayer from "@/components/common/MarkdownDisplayer";
import MarkdownEditor from "@/components/common/MarkdownEditor";

export default {
  name: "Edit",
  data() {
    return {
      article: {
        id: " ",
        info: {
          title: " ",
          content: " ",
          time: " ",
          readcount: " ",
          classify: " "
        }
      }
      
      // title: "",
      // content: "",
      // classify: ""
    };
  },
  components: {
    MarkdownDisplayer
  },
  mounted() {
    if (this.$route.params.id != null) {
      console.log(this.$route.params.id);
      this.axios.get("/api/article/" + this.$route.params.id).then(response => {
        this.article = JSON.parse(response.data);
        // console.log(JSON.stringify(response.data))
        // console.log(this.article.id)
      });
    } else {
      console.log("just add an article");
    }
  },
  methods: {
    save() {
      this.axios
        .post("/api/article/add", {
          //   article: {
          //   id: this.title,
          //   info: {
          title: this.title,
          content: this.content,
          classify: this.classify
          //   }
          //   }
        })
        .then(response => {
          console.log(response.data);
        });
    }
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