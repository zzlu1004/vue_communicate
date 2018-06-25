<template>
    <div class="template">
        <h1>组件B</h1>
        <div class="content">
            <div class="data">
                <div>对象类型：{{obj}} <span class="split">/</span> 基础数据类型： b:{{b}}</div>
                <div><span class="x-title">VueX：</span>{{this.$store.getters.objX}}</div>
            </div>
            <span @click="changeData" class="btn">改变父组件数据(不规则方式)</span>  
            <div class="detail">备注：在data中重新定义一个变量，接住props中传进来的值；利用js中对象存储的底层原理，同一个变量指向‘堆区’中的同一个地址；这样改变一个，则会改变另外一个变量。</div>
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
  data() {
    return {
      obj_reset: this.obj,
      b_reset:this.b
    };
  },
  methods: {
    changeData() {
      // 改变对象中的值
      this.obj_reset.a = 2;
      // 改变某个变量
      this.b_reset = 2
    }
  }
};
</script>
<style scoped>
.template {
  display: flex;
  align-items: center;
}

</style>
