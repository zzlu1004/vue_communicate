<template>
    <div class="template">
        <h1>组件C</h1>
        <div class="content">
            <div class="data">
                <!-- <div>对象类型：{{obj}} <span class="split">/</span> 基础数据类型： b:{{b}}</div> -->
                <div><span class="x-title">VueX：</span>{{this.$store.getters.objX}}</div>
            </div>
            <span @click="changeData" class="btn">改变全局数据(VueX方式)</span>  
            <span @click="dataInite" class="btn btn-inite">初始化</span> 
        </div>
    </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object
    },
    b: {
        type:Number
    }
  },
  methods: {
    changeData() {
        // 1、通过 Action 提交 mutation 更改
        // this.$store.dispatch('setObj',1)

        // 2、通过 Mutation 直接更改
        this.$store.commit('SET_OBJ',1)
    },
    dataInite(){
       this.$store.dispatch('setObj',0) 
    }
  }
};
</script>
<style scoped>
.template {
  display: flex;
  align-items: center;
}
.btn-inite{
    margin-left: 20px;
}

</style>
