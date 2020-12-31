<template>
    <div>
        <h3>Inbox mail</h3>
        <ul>
            <li><router-link :to="{name: 'mail1'}">Mail 1</router-link></li>
            <li><router-link :to="{name: 'mail2'}">Mail 2</router-link></li>
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
