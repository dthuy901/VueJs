<template>
    <!-- theo doi khi kich trang se load lai data  -->
    <div v-cloak>
        <ul>
            <li><a href="#" @click.prevent="page = 1">1</a></li>
            <li><a href="#"  @click.prevent="page = 2">2</a></li>
            <li><a href="#"  @click.prevent="page = 3">3</a></li>
            <li><a href="#"  @click.prevent="page = 4">4</a></li>
        </ul>

        <!-- watch old value and new value  -->
        <input type="text" v-model="name" name="">

    </div>
</template>
<script>
export default {
    data(){
        return{
            page: 1,
            articles : [],

            name: 'hello kitty'
        }
       
    },
    methods: {
        loadData: function(){
            console.log('load data');
        }
    },
    watch: {
        page: function(){
            this.loadData();
        },
        name: function(oldValue, newValue){
            console.log(oldValue, newValue);
        }
    }
}
</script>