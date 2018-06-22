<template>
    <div class="article-brief">
        <ArticleTitle title="title"></ArticleTitle>
        <MarkdownDisplayer v-bind:input="content"></MarkdownDisplayer>
        <ArticleFooter></ArticleFooter>
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
      content: this.article.content
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
.article-brief {
  border: 1px solid #cccccc;
  border-radius: 12px;
  margin: 0px 30px 30px 30px;
  padding: 20px;
}
</style>

