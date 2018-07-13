<template>
    <div id="article-detail">
        <ArticleTitle :id="id" :title="this.article.info.title"></ArticleTitle>
        <MarkdownDisplayer :width="{ width: '100%' }" :input="this.article.info.content" ></MarkdownDisplayer>
        <ArticleFooter :id="id" :time="this.article.info.time" :readcount="this.article.info.readcount" :classify="this.article.info.classify"></ArticleFooter>
    </div>
</template>

<script>
import ArticleTitle from "./ArticleTitle";
import ArticleFooter from "./ArticleFooter";
import MarkdownDisplayer from "../common/MarkdownDisplayer";

export default {
  name: "ArticleDetail",
  props: ["id"],
  components: {
    ArticleTitle,
    ArticleFooter,
    MarkdownDisplayer
  },
  mounted() {
    // console.log("article detail is mounted")
    // console.log(this.id)
    this.axios.get("/api/article/" + this.id).then(response => {
      this.article = JSON.parse(response.data);
      // console.log(JSON.stringify(response.data))
      // console.log(this.article.id)
    });
  },
  data() {
    return {
      // title: this.test.info.title
      // id: this.article.id,
      // title: this.article.info.title,
      // content: this.article.info.content,
      // time: this.article.info.time,
      // readcount: this.article.info.readcount,
      // classify: this.article.info.classify
        article: {
          id: "",
          info: {
            title: "",
            content: "",
            time: "",
            readcount: "",
            classify: ""
          }
        },
        // title: ""
    //   id: article.id,
      // title: article.info.title,
    //   content: this.article.info.content,
    //   time: this.article.info.time,
    //   readcount: this.article.info.readcount,
    //   classify: this.article.info.classify
    };
  }
};
</script>

<style>
#article-detail {
  border: 1px solid #cccccc;
  border-radius: 6px;
  background-color: white;
  margin: 0px 30px 20px 30px;
  padding: 20px;
}
</style>

