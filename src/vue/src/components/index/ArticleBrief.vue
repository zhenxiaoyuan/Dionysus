<template>
    <div class="article-brief">
        <div class="brief-header">{{title}}</div>
        <div class="brief-main">
            <MarkdownDisplayer v-bind:input="content"></MarkdownDisplayer>
        </div>
        <div class="brief-footer">
            这里是页脚，写点时间啊、分类啊啥的
        </div>
    </div>
</template>

<script>
import MarkdownDisplayer from "../common/MarkdownDisplayer";

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
    MarkdownDisplayer
  }
};
</script>

<style>
.brief-header {
    font-size: 32px;
}
</style>

