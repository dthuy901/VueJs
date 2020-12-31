<template>
    <div>
        Noi dung
        <div class="login" v-if="$root.user == null">
            <input type="text" name="" v-model="username"><br/>
            <button @click="login()">Login</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username: ''
        }
    },
    methods: {
        login: function(){
            this.$root.user = { username: this.username}
        }
    }
}
</script>