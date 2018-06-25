<template>
    <div class="template">
        <h1>组件A</h1>
        <div class="content">
            <div class="data">
                <div>对象类型：{{obj}} <span class="split">/</span> 基础数据类型： b:{{b}}</div>
                <div><span class="x-title">VueX：</span>{{this.$store.getters.objX}}</div>
            </div>
            <span @click="changeData" class="btn">改变父组件数据(官方推荐方式)</span>  
            <div class="detail">备注：通过$emit向父组件派发事件</div>
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        obj: {
            type:Object
        },
        b: {
            type:Number
        }
    },
    methods: {
        changeData(){
            this.$emit('changeParentData')
        }
    },
}
</script>
<style>
.template {
  display: flex;
  align-items: center;
}

</style>
