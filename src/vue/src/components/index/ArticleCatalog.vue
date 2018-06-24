<template>
    <div>
        <!-- ArticleCatalog -->
        <ul class="article-catalog-ul">
            <li v-for="article in articles" 
                v-bind:key="article.id"
                style="list-style: none"
            >
                <ArticleBrief v-bind:article="article"></ArticleBrief>
            </li>
        </ul>
    </div>
</template>

<script>
import ArticleBrief from "./ArticleBrief";

export default {
  name: "ArticleCatalog",
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "高行度会皇计元过更度界烈耳卫星？降们简。",
          content: "# 题级曾神业考立宝教清传朝验！须米保杂再？"
        },
        {
          id: 2,
          title: "dolor rem mollitia",
          content: "## 劳调处安呢习权案紶票察四毛论第。伊悲吗。"
        },
        {
          id: 3,
          title: "无乡諣恐骨速束！跟绝速晚仅派解费野眼架。",
          content: "### 书绝办取死办难官喜醒首音密清靠！送车古。"
        },
        {
          id: 4,
          title: "q新雪应女理优封妇之但华味座丝。消尼待作。",
          content: "最电首贝修哥大怀守得免也孤三野免假容。何哭靠节直腿国彩夫窗候察怎探亚四故练！批卖功按铁较低。种跳点法午森止夫冲托哪介事林。响嘴加精官密且具万原首雄。细代张象守点杂见牙预负节团足故远男授光！史还跟赶守票！器馆秘财分纪红血坐千层懂胜烟社各收况。突八反及伤休水发？灵通醒洋行管忆线济呀神化？标于彩喊富灵李一降很见教应野技并每！街短喊革园约问木熟该见千情化窗鱼具余沙。号换助举死师藏破长连图翻最缺苦！布素候！"
        },
        {
          id: 5,
          title: "药列諣使穿破？乡汽部把易门经工面无板。？",
          content: "_默具夫月妙联们房止九？愿用席育兰价正伯往药似创惊吗观模！低对严专言激追纸票易毛脑新停？转球比分信乎时？喊又想班更务置时点摇景将士料泪希！行守百副统母便块。即鱼曲也弟气！妈莫制仍来常型副激奖刻哭州根街四识百种！鸟营盛諣于消候吃充例共亲山领由六林状？军士都型熟然露让定？觉马歌部纪睛品想研都态！睛官交灵六入亮急列学标品底似吸想术何术！推白趣贝总失说幸春良实之状？群断作洗冷哪住！导右价午立于候把局泪欢百？_"
        },
      ]
    };
  },
  components: {
    ArticleBrief
  }
};
</script>

<style>
.article-catalog-ul {
    padding: 0px;
    margin: 0px;
}
</style>


