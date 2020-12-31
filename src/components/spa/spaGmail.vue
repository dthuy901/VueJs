<template>
    <div v-cloak class="spa">
        <ul>
            <li><router-link :to="{name:'inbox'}">Inbox</router-link></li>
            <li><router-link :to="{name:'important'}">Important</router-link></li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.spa{
    border: 1px solid #000;
    padding: 20px 0;
}
</style>