<template>
    <div id="article-title">
        <router-link to="/detail">
            <button class="title-button">
                {{title}}
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "ArticleTitle",
  props: ["title"],
  methods: {
    say: function() {
      alert(this.title);
    }
  }
};
</script>

<style>
.title-button {
  background-color: #00000000; /* Green */
  border: none;
  color: #2a2b2e;
  font-size: 20px;
}
</style>



