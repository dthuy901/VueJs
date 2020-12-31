<template>
    <div class="state">
        <ul>
            <li v-if="$root.user !== null">
                <a href="#" @click="logout()">
                    {{$root.user.username }} Thoat
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        logout: function(){
            this.$root.user = null;
        }
    }
}
</script>
<style scoped>
.state{
    padding: 30px 0;
    background-color: #000;
    min-height: 50px;
    
}
.state a{
    color: #fff;

}
</style>