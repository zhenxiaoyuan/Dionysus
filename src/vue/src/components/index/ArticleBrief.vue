<template>
    <div id="article-brief">
        <ArticleTitle :id="id" :title="title"></ArticleTitle>
        <MarkdownDisplayer :width="{ width: '100%' }" :input="content" ></MarkdownDisplayer>
        <ArticleFooter :id="id" :time="time" :readcount="readcount" :classify="classify"></ArticleFooter>
    </div>
</template>

<script>
import MarkdownDisplayer from "../common/MarkdownDisplayer";
import ArticleTitle from "./ArticleTitle";
import ArticleFooter from "./ArticleFooter";

export default {
  name: "ArticleBrief",
  props: ["article"],
  data: function() {
    return {
      id: this.article.id,
      title: this.article.info.title,
      content: this.article.info.content,
      time: this.article.info.time,
      readcount: this.article.info.readcount,
      classify: this.article.info.classify
    };
  },
  components: {
    MarkdownDisplayer,
    ArticleTitle,
    ArticleFooter
  }
};
</script>

<style>
#article-brief {
  border: 1px solid #cccccc;
  border-radius: 6px;
  background-color: white;
  margin: 0px 30px 20px 30px;
  padding: 20px;
}
</style>

