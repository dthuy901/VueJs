<template>
    <div class="state">
        <ul>
            <li><a href="#" @click="logout()">Thoat</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        logout: function(){
            this.$root.$emit('userLoggedOut', 'heyyyyyy this is argument');
        }
    }
}
</script>
<style scoped>
.state{
    margin-top: 100px;
}
</style>