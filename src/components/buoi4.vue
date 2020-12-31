<template>
    <div v-cloak class="filter">
        <div v-for="(product, index) in products" :key="index">
            <h3> {{ product.name }} </h3>
            <h3> {{ product.price | formatMoney }}</h3>
            <button @click="product.price -= 1000">Giam</button>
            <hr>
            <div> {{ 'total: ' +  products.reduce((total, item) => total + item.price, 0) | formatMoney }}</div>
        </div>
        <input type="text" id="name" name="" v-model="name" ref="focusMe">
       
    </div>
</template>
<script>
export default {
    data() {
        return{
            products: [
                    {name: 'iphone', price: 1000000},
                    {name: 'iphone x', price: 1100000},
            ],
            name: 'diem thuy huynh'
        }
        
    },
    filters: {
        formatMoney: function(money){
            return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        }
    },
    mounted() {
        //focus 
        //vanila
        // document.getElementById('name').focus();

        //vuejs
        this.$refs.focusMe.focus();
        console.log(this.$refs.focusMe);
    },
    watch: {
        //theo doi data nao thi property cua watch phai trung nhau
        name: function(){
            console.log('name da thay doi');
        }
    }
}
</script>
<style>

</style>