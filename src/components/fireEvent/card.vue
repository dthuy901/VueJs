<template>
    <div>
        Card template is children of Detail template
    </div>
</template>
<script>
export default {
    mounted(){
        this.$root.$on('userLoggedOut', function(msg){
            console.log(msg);
            console.log('hello from card');
        })
    }
}
</script>