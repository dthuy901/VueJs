<template>
    <div class="showHide">
        <button @click="show = !show">An hien</button>
        <transition name="hienTuTu" :duration="2000">
            <div class="toggle" v-show="show">
                <h1>Lớp học fullstack 5, thầy Nguyện siêu cấp pro</h1>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: false
        }
    }
}
</script>

<style>
.showHide .toggle{
    background-color: #cfc350;
    color: white;
}

/* duration  */
.hienTuTu-enter-active{
    transition: all 2s ease;
}
/* start  enter*/
.hienTuTu-enter{
    opacity: 0;
}
/* end enter  */
.hienTuTu-enter-to{
    opacity: 1;
}

/* duration  */
.hienTuTu-leave-active{
    transition: all 1s ease;
}
/* start  leave*/
.hienTuTu-leave{
    opacity: 1;
}
/* end leave  */
.hienTuTu-leave-to{
    opacity: 0;
}
</style>
