<template>
    <div v-cloak>
         <!-- buổi 2 -->

        <!-- v-if v-else v-else-if -->
        <div v-if="tabHienTai == 1">Tab 1</div>
        <div v-else-if="tabHienTai == 2">Tab 2</div>
        <div v-else>Tab 3</div>

        <!-- v-bind -->
        <div v-bind:id="idCuaDiv">Bennnn</div>

        <!-- chon trang web tu select box, click nut thi den trang web do -->
        <select name="web" id="web" v-model="web">
            <option value="https://www.google.gg/">Google</option>
            <option value="https://zingmp3.vn/">Zing mp3</option>
            <option value="https://kenh14.vn/">Kenh 14</option>
        </select>
        <a v-bind:href="web" target="_blank">Go to the website</a>

        <!-- mo khoa/ khoa input -->
        <input type="text" :disabled="khoa">
        <button @click=" khoa = !khoa">
            <span v-show="khoa == true">Mở khóa</span>
            <span v-show="khoa == false">Khóa</span>
        </button>

        <!-- khoa: xanh, mo khoa: do  -->
        <br>
        <button @click="lock = !lock" :class="{ do: lock, xanh: !lock}">
            <span v-show="lock == true">Mở khóa</span>
            <span v-show="lock == false">Khóa</span>
        </button>

        <!-- vong lap for in  -->
        <!-- lap qua va hien thi danh sach  -->
        
        <!-- for in cần khóa key để xác định vòng lặp  -->
        <div class="std" v-for="(student, index) in students" :key="'std' + index">
            {{ student }} 
        </div>

        <!-- vong lap for in  nhập tên vào input thi hien thi ten ra ben duoi-->

        <input type="text" v-model="newUser">
        <button @click="users.push(newUser)">Insert below</button>
        <div class="user" v-for="(user, index) in users" :key="'user' + index">
            {{ user }}
        </div>

        <!-- select cac tags  -->
        <br>
        <div class="tags">
            <span class="tag" v-for="(language, index) in languages" 
                :key="'tag' + index" @click="language.selected = !language.selected" 
                :class="{xanh: language.selected}"
            >
                {{ language.name }}
            </span>
        </div>

        <!-- chuyen du lieu 2 cot  -->
        <div class="muilti-select">
            <div class="colLeft" v-for="(expect, index) in expects" 
                :key="'colLeft' + index"
                @click="expect.selected = !expect.selected"
                :class="{xanh: expect.selected}"
            
            >
                {{ expect.name }}
            </div>
            <hr>

            <button @click="move('moveExpects')">Thêm</button>
            <button @click="move('expects')">Bớt</button>

            <hr>
            <div class="colRight" v-for="(moveExpect, index) in moveExpects" 
                :key="'colRight' + index"
                @click="moveExpect.selected = !moveExpect.selected"
                :class="{xanh: moveExpect.selected}"
            >
                {{ moveExpect.name }}
            </div>
      </div>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            

            tabHienTai: 2,
            idCuaDiv: 'ben',
            web: 'https://www.google.gg/',
            khoa: true,
            lock: true,
            students : ['ben', 'bo', 'bom'],

            newUser: '',
            users : ['thuy', 'diem', 'huynh'],
            kich: true,

            languages: [
                        {name: 'C', selected: false},
                        {name: 'C++', selected: false},
                        {name: 'C#', selected: false},
                        {name: 'JS', selected: false},
                        {name: 'Python', selected: false},
                        {name: 'Java', selected: false},
                        ],
            selected: true,

            expects: [
                        {name: 'happy', selected: false},
                        {name: 'joyfull', selected: false},
                        {name: 'success', selected: false},
                        {name: 'lucky', selected: false},
                        {name: 'rick', selected: false},
                        {name: 'fun', selected: false},
                        {name: 'expert', selected: false}
            ],
            moveExpects: []
        }
    },

    methods: {
        di: function(){
            console.log(this);
        },
        

        move: function(target){
            let current;
            if(target == 'moveExpects')
                current = 'expects';
            else  
                current = 'moveExpects';

            this[current].forEach( list => {
                if(list.selected == true){
                    this[target].push(list);
                }
            });
            //mảng gốc chỉ còn những item không đc chọn
            this[current] = this[current].filter( list => {
                return list.selected == false;
            });

            // init
            this[target].forEach( list => {
                if(list.selected == true){
                    list.selected = false;
                }
            });
        }
    }

}
</script>
<style>
.do{
  background-color: red;
}
.xanh{
  background-color: green;
}
.vang{
  background-color: yellow;
}
.tags span{
  display: inline-block;
  border: 1px solid #000;
  margin-right: 10px;
  padding: 3px 10px;
}
</style>
  