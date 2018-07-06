<template>
    <div id="article-brief">
        <ArticleTitle :title="title"></ArticleTitle>
        <MarkdownDisplayer :width="{ width: '100%' }" :input="content" ></MarkdownDisplayer>
        <ArticleFooter :time="time" :readCount="readCount" :classify="classify"></ArticleFooter>
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
      title: this.article.title,
      content: this.article.content,
      time: this.article.time,
      readCount: this.article.readCount,
      classify: this.article.classify
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

