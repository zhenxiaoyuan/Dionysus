<template>
    <div>
        <!-- ArticleCatalog -->
        <ul>
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
          title: "placeat aspernatur pariatur",
          content: "# Est quidem dolorem error est quos commodi. Nostrum quis inventore nemo. Consequuntur ipsam sed impedit. Sed magni eius nulla quo optio error porro."
        },
        {
          id: 2,
          title: "dolor rem mollitia",
          content: "## Neque aliquam ipsam error blanditiis facere. Voluptatibus optio vel aut qui repudiandae neque quaerat tempore ea. Suscipit eius non provident."
        },
        {
          id: 3,
          title: "itaque ea tempora",
          content: "### Magnam incidunt maxime et voluptates deserunt perspiciatis. Illo sapiente cum repudiandae. Et quos sunt eos error quasi recusandae minima enim. In voluptas aut. Quam labore enim qui quisquam nulla. Et quis quis libero dicta illum nobis atque."
        },
        {
          id: 4,
          title: "quis temporibus aut",
          content: "Iure et ducimus voluptas magni. Facere sequi dolorem sunt tempore odio optio provident. Autem itaque et. Est eos et unde ut et sunt nesciunt aut."
        },
        {
          id: 5,
          title: "tempore placeat ut",
          content: "_Quasi modi occaecati nostrum rerum deleniti. Aperiam et qui et._"
        },
      ]
    };
  },
  components: {
    ArticleBrief
  }
};
</script>

