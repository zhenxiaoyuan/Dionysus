<template>
    <div id="article-detail">
        <ArticleTitle :id="this.article.id" :title="this.article.info.title"></ArticleTitle>
        <MarkdownDisplayer :width="{ width: '100%' }" :input="this.article.info.content" ></MarkdownDisplayer>
        <ArticleFooter :id="this.article.id" :time="this.article.info.time" :readcount="this.article.info.readcount" :classify="this.article.info.classify"></ArticleFooter>
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
    this.axios.get("/api/article/" + this.id).then(response => {
      this.article = JSON.parse(response.data);
      console.log(this.article)
      console.log(this.article.id)
    });
  },
  data() {
    return {
        article: {},
    //   id: article.id,
    //   title: article.info.title,
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

