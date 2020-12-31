<template>
    <!-- text -->
    <div class="buoi1">
        <input type="text" v-model="name" name="">
            {{ name }}
        <button @click="hienThiTenLop = !hienThiTenLop">Click</button>
        <p v-show="hienThiTenLop">Hien thi ten lop</p>
        <button @click="di()">Click me</button>

        <!-- checkbox vs v-model: bool-->
        <input type="checkbox" v-model="agree" name="" id="license">
        <label for="license">Đồng ý điều khoản</label> 
        
        <!-- radio vs v-model: string-->
        <br>
        <input type="radio" v-model="tp" value="ha noi" id="hn" name="city">
        <label for="hn">Ha noi</label>

        <input type="radio" v-model="tp" value="da nang" id="dn" name="city">
        <label for="dn">Da nang</label>

        <input type="radio" v-model="tp" value="sai gon" id="sg" name="city">
        <label for="sg">Sai gon</label><br>
        {{ tp }}

        <!-- radio vs v-model: bool-->
        <br>
        <input type="radio" v-model="gender" value="true" id="nam" name="gender">
        <label for="nam">Nam</label>

        <input type="radio" v-model="gender" value="false" id="nu" name="gender">
        <label for="nu">Nu</label>

        <!-- select  -->
        <br>
        <select name="language" id="lang" v-model="language">
            <option value="C">C</option>
            <option value="JS">JS</option>
            <option value="PHP">PHP</option>
        </select>

        <!-- select  multiple-->
        <br>
        <select name="city" id="langs" v-model="city" multiple>
            <option value="HN">HN</option>
            <option value="DN">DN</option>
            <option value="SG">SG</option>
        </select>
        <!-- length of arrary -->
        {{ city.length }}
        <button @click="showSelectedOption()">Show city</button>
        
        <!-- change name when click btn -->
        <br>
        {{ user }}
        <button @click="user = 'ben'">Click me</button> <!-- click thi thuc hien lenh ben trong: user doi thanh ben-->

        <!-- preventDefault -->
        <br>
        {{ preventD }}
        <a @click.prevent="preventD = 'ben'" href="https://www.google.gg/">Click me</a>

        <!-- tab -->
        <br>
        <a @click.prevent="currentTab = 1" href="#">Tab 1</a>
        <a @click.prevent="currentTab = 2" href="#">Tab 2</a>
        <a @click.prevent="currentTab = 3" href="#">Tab 3</a>

        <div v-show="currentTab == 1">Noi dung 1</div>
        <div v-show="currentTab == 2">Noi dung 2</div>
        <div v-show="currentTab == 3">Noi dung 3</div>

        <!-- cau hoi thi trac nghiem -->
        <div v-show="cauHoi == 1">Cau hoi 1</div>
        <div v-show="cauHoi == 2">Cau hoi 2</div>
        <div v-show="cauHoi == 3">Cau hoi 3</div>
        <div v-show="cauHoi == 4">Cau hoi 4</div>
        <div v-show="cauHoi == 5">Cau hoi 5</div>
        <button @click="cauHoi--" v-show="cauHoi > 1">&lt;&lt;</button>
        <button @click="cauHoi++" v-show="cauHoi < 5">&gt;&gt;</button>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            name: 'Diem thuy huynh',
            hienThiTenLop: true,
            agree: false,
            tp: 'ha noi',
            gender: true,
            language: 'C',
            city: [],
            user: 'Diem thuy huynh',
            preventD: 'change me',

            currentTab : 1,
            cauHoi: 1,
        }
    },
    methods: {
        showSelectedOption: function(){
            console.log(this.city);
        }
    }
}
</script>