<template>
    <div>
        Content
        
        <card />
    </div>
</template>
<script>
import card from './card.vue'
export default {
    //emit from app ($parent)
    // mounted(){
    //     this.$parent.$on('userLoggedOut', function(){
    //         console.log('content');
    //     })
    // }
    components: {
        card
    },
    mounted() {
        this.$root.$on('userLoggedOut', function(){
             console.log('from root');
        });
    }
}
</script>