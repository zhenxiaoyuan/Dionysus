<template>
    <div>
        <MarkdownDisplayer v-bind:input="ssss"></MarkdownDisplayer>
        <ul>
            <li 
                v-for="article in articles"
                v-bind:key="article.id"
                v-bind:input="article.input"
                style="list-style: none"
            >
        <MarkdownDisplayer v-bind:input="article.input"></MarkdownDisplayer>
            </li>
        </ul>
    </div>
</template>

<script>
import MarkdownDisplayer from "../common/MarkdownDisplayer"

export default {
    name: "ArticleBrief", 
    data(){
        return{
            ssss:'## kk\n_jjjj_',
            articles: [
                {
                    id: 1,
                    input: "# hello"
                },
                {
                    id: 4,
                    input: "_bye_"
                }
            ]
        }
    },
    components: {
        MarkdownDisplayer
    }
};
</script>
