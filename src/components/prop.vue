<template>
    <div class="article">
        <h3>{{ article.title }}</h3>
        <p>{{ article.content }}</p>
        <button @click="setNewTitle()">Change me</button>
        
    </div>
</template>
<script>
export default {
    props: ['article'],
    data(){
        return{
            // title: 'tieu de 1',  //duplicate title, => delete this line
            // content: 'noi dung 1'
                
        }
    },
    methods: {
        setNewTitle: function(){
            this.article.title = 'abc';
        }
    }
}
</script>
<style scoped>
.article{
    border-bottom: 1px dashed #000;
}
</style>
