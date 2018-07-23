<template>
    <div id="article-title">
        <router-link :to="'/detail/' + this.id">
            <button class="title-button">
                {{title}}
            </button>
        </router-link>
        <hr />
    </div>
</template>

<script>
export default {
  props: ['title', 'id']

}
</script>

<style>
.title-button {
  background-color: #00000000; /* Green */
  border: none;
  color: #2a2b2e;
  font-size: 28px;
  padding: 5px 20px;
}
</style>



