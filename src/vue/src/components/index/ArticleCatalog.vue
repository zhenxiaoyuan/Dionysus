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
          title: "This is title No.1",
          content: "# Hello, No.1"
        },
        {
          id: 2,
          title: "This is title No.2",
          content: "## Hello, No.2"
        },
        {
          id: 3,
          title: "This is title No.3",
          content: "### Hello, No.3"
        },
        {
          id: 4,
          title: "This is title No.4",
          content: "Hello, No.4"
        },
        {
          id: 5,
          title: "This is title No.5",
          content: "_Hello, No.5_"
        },
      ]
    };
  },
  components: {
    ArticleBrief
  }
};
</script>

