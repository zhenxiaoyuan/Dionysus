<template>
    <div id="article-detail">
        <ArticleTitle :title="article.title"></ArticleTitle>
        <MarkdownDisplayer :input="article.content"></MarkdownDisplayer>
        <ArticleFooter></ArticleFooter>
    </div>
</template>

<script>
import ArticleTitle from "./ArticleTitle";
import ArticleFooter from "./ArticleFooter";
import MarkdownDisplayer from "../common/MarkdownDisplayer";

export default {
  name: "ArticleDetail",
  components: {
    ArticleTitle,
    ArticleFooter,
    MarkdownDisplayer
  },
  data: function() {
    return {
      article: {
        id: 1,
        title: "片去风渐位笔衣科取责琴德血油深贵压？她。",
        content:
          "臓担章待题京血！李纸报弄利熟刘最？散员普书降表采天背况提皇马它啊里格生？影恶还研戏育套片臓入席！再宫州段到保声汽且斯福托午通明土？寻体达了藏屋赛丝戴。雨皇子喊创例即呼醒阳觉示寻站拉列？自模平报谁？将烟味静值命降章度？京质花碃新而晚即何确医应马旅果肉？坏容许面例耳实智什增雪听。给些戴宣一客雄火果管继洛宣总？排妈血迹按位姐适曾司步如列免胡迹？园技坦招恩问弄娘圣异慢伦稜展。批袋物落脱见除可余！水餐体耳？"
      }
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

