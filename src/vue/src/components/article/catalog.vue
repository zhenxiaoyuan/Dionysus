<template>
    <ul class="article-catalog-ul">
        <li v-for="article in articles" v-bind:key="article.id" style="list-style: none" class="article-catalog-li">
            <article-title :id="article.id" :title="article.info.title"></article-title>
            <markdown-displayer :width="{ width: '100%' }" :input="article.info.content"></markdown-displayer>
            <article-footer :id="article.id" :time="article.info.time" :readcount="article.info.readcount" :classify="article.info.classify"></article-footer>
        </li>
    </ul>
</template>

<script>
import markdownDisplayer from '@/components/common/MarkdownDisplayer'
import articleTitle from './title'
import articleFooter from './footer'

export default {
  props: ['articles'],

  components: {
    markdownDisplayer,
    articleTitle,
    articleFooter
  }

}
</script>

<style>
.article-catalog-ul {
  padding: 0px;
  margin: 0px;
}
.article-catalog-li {
  border: 1px solid #cccccc;
  border-radius: 6px;
  background-color: white;
  margin: 0px 30px 20px 30px;
  padding: 20px;
}
</style>


