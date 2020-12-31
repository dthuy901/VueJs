<template>
  <div id="app">
    <buoi1></buoi1>
    <buoi2></buoi2>
    <buoi4></buoi4>
    <div class="list-article">
      <prop v-for="(article, index) in articles" :key="index" 
          :article="article"
      >

      </prop>
      <button @click="showData">Show</button>
    </div>

    <watch></watch>
    <spaGmail></spaGmail>

    <slotMsg v-for="(msg, index) in msgs" :key="index">
      {{ msg }}
    </slotMsg>
    <transitionn></transitionn>
    
    <!-- fire event thong qua app  -->
    <!-- <navbar @userLoggedOut="showLoggedOutMsg()"/> -->


    <!-- fire event thong qua root  -->
    <navbar />
    <detail />

    <navv />
    <contentt />

  </div>
</template>

<script>
import buoi1 from './components/buoi1.vue'
import buoi2 from './components/buoi2.vue'
import buoi4 from './components/buoi4.vue'
import prop from './components/prop.vue'
import watch from './components/watch.vue'
import spaGmail from './components/spa/spaGmail.vue'
import slotMsg from './components/slotMsg.vue'
import transitionn from './components/transitionn.vue'
import navbar from './components/fireEvent/navbar.vue'
import detail from './components/fireEvent/detail.vue'

import navv from './components/state/navv.vue'
import contentt from './components/state/contentt.vue'

export default {
  name: 'App',
  components: {
    buoi1,
    buoi2,
    buoi4,
    prop,
    watch,
    spaGmail,
    slotMsg,
    transitionn,

    navbar,
    detail,

    navv,
    contentt
  
  },
  data(){
    return{
      articles: [
        { title : 'tieu de 1', content: 'nd 1'},
        { title : 'tieu de 2', content: 'nd 2'},
        { title : 'tieu de 3', content: 'nd 3'},
        { title : 'tieu de 4', content: 'nd 4'}
      ],
      msgs: [
        'rat vui dc gap ban',
        'hello anh em'
      ]
    }
  },
  methods: {
    showData: function(){
      console.log(this.articles);
    }

    //nav fire event len app, app fire event -> children
    //neu dung root thi khong can thong qua app nua
    // showLoggedOutMsg: function(){
    //   this.$emit('userLoggedOut');
    // }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
ul{
  padding-left: 0;
  margin: 0;
}
li{
  list-style: none;
}
</style>
