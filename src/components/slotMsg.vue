<template>
    <div class="msg">
        <h4>Thong bao</h4>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}

</script>
<style lang="scss" scoped>
.msg{
    border: 1px solif #000;
    h4{
        color: red;
    }
}
</style>