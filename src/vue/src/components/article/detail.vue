<template>
    <div id="article-detail">
        <article-title :id="article.id" :title="article.title"></article-title>
        <markdown-displayer :width="{ width: '100%' }" :input="article.content"></markdown-displayer>
        <article-footer 
            :id="article.id" 
            :time="article.time" 
            :readcount="article.readcount" 
            :classify="article.classify">
        </article-footer>
    </div>
</template>

<script>
import articleTitle from './title'
import articleFooter from './footer'
import markdownDisplayer from '@/components/common/MarkdownDisplayer'

export default {
  props: ['article'],

  components: {
    articleTitle,
    articleFooter,
    markdownDisplayer
  }
}
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

