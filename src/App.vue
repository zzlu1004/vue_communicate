<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <!-- 父组件 -->
    <div class="parent">
      <h1>父组件</h1>
      <div class="content">
          <div class="data">
            <div>对象类型：{{obj}} <span class="split">/</span> 基础数据类型： b:{{b}}</div>
            <div><span class="x-title">VueX：</span>{{this.$store.getters.objX}}</div>
          </div>
          <span @click="changeData" class="btn">改变子组件数据</span>
      </div>
      
    </div>
    <!-- 组件A -->
    <A class="children" @changeParentData="changeParentData" :obj="obj" :b="b"/>
    <!-- 组件B -->
    <B class="children" :obj="obj" :b="b"/>
    <!-- 组件C -->
    <C class="children" :obj="obj" :b="b"/>

    <!--许言午测试代码-->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.aa"></el-input>
      </el-form-item>
      <el-form-item label="活动内容">
        <el-input v-model="form.bb"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-input v-model="form.cc"></el-input>
      </el-form-item>
      
      <el-checkbox  @change="doChange">选择</el-checkbox>

      <el-form-item label="活动名称">
        <el-input v-model="form.dd" :disabled="isTure"></el-input>
      </el-form-item>
      <el-form-item label="活动内容">
        <el-input v-model="form.ee" :disabled="isTure"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-input v-model="form.ff" :disabled="isTure"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      // 为对象时
      obj: {
        a: 0
      },
      // 为变量时 
      b: 0,
      form: {
        aa:'',
        bb:'',
        cc:'',
        dd:'',
        ee:'',
        ff:''
      },
      isTure: false
    };
  },
  methods: {
    // 改变子组件中值
    changeData() {
      // 改变对象中的值
      this.obj.a = 0;
      // 改变某个变量
      this.b = 0 
    },
    // 子组件A派发出的 事件
    changeParentData() {
      // 改变对象中的值
      this.obj.a = 1;
      // 改变某个变量
      this.b = 1
    },
    doChange(value){
      if(value){
        this.isTure = true
        this.form.dd = this.form.aa
        this.form.ee = this.form.bb
        this.form.ff = this.form.cc
      }else{
        this.isTure = false
        this.form.dd = ''
        this.form.ee = ''
        this.form.ff =''
      }
    }
  },
  components: {
    A: () => import("./components/A.vue"),
    B: () => import("./components/B.vue"),
    C: () => import("./components/C.vue")
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 50px;
}
.parent,
.children {
  padding: 20px;
  border-bottom: 1px dotted #e1e1e1;
}
.content {
  text-align: left;
  flex: 1;
}
.data{
  display: flex;
  justify-content: space-between;
}
.parent {
  display: flex;
  border-bottom: 1px solid #dd7c7c;
  border-top: 1px solid #dd7c7c;
}
h1 {
  width: 300px;
}
.btn {
  display: inline-block;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background: #2c3e50;
  color: #fff;
  margin-top: 20px;
}
.detail{
    margin-top: 20px;
    color: #999;
    font-size: 12px;
}
.split{
  color: #dd7c7c;
  padding: 0 10px;
}
.x-title{
  color: #09991c;
}
</style>
