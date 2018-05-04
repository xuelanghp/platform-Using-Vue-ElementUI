<template>
    <el-container>
        <!-- 1 header -->
        <el-header>
            <div class="logo" @click="goHome">奥买家营销中心</div>
            <div class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">提报系统</el-menu-item>
                    <el-menu-item index="2">系统管理</el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                        <el-submenu index="3-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="3-4-1">选项1</el-menu-item>
                            <el-menu-item index="3-4-2">选项2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="info">
                <span class="menu el-icon-menu" @click="changeMenu" title="右导航显示/隐藏"></span>欢迎，{{name}} <el-button type="text" @click="logOut">退出</el-button>
            </div>
        </el-header>

        <el-container>
            <!-- 2 aside左侧导航 -->
            <div class="main-aside" :class="{'hide':hide}">
                <div class="inner">
                    <router-link v-for="route in routes" :to="route.path" tag="li">{{route.label}}</router-link>
                </div>
            </div>
            
            <div class="main-box">
                <!-- 3 main内容主体 -->
                <div class="main-cont">
                    <router-view></router-view>
                </div>

                <!-- 4 footer -->
                <div class="main-footer">
                    <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备15091122号-1</a> 
                    | Copyright@ 奥买家 2016-2017，All Rights Reserved | 广东奥园奥买家电子商务有限公司版权所有
                </div>
            </div>
        </el-container>
    </el-container>
</template>

<script>
import Nav from '../info/nav'
export default {
    data(){
        return {
            name:'小明',
            routes:[],//this.$parent.$router.options.routes,
            activeIndex: '1',
            hide:false
        }
    },
    created(){
        this.routes = Nav[this.activeIndex-1];
        this.fetchData();
    },
    methods:{
        fetchData(){
            // console.log('Home-$query:',this.$route.query);  // $route.params, $route.query
            let _name = localStorage._nick?localStorage._nick:'???';
            this.name = _name;
        },
        getRoutes(arr,target){
            let k = arr[0]-1,
                len = arr.length;

            if(len>1){
                arr.shift();
                return this.getRoutes(arr,target[k])
            }else{
                return target[k]
            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            var _arr = key.split('-');
            this.routes = this.getRoutes(_arr,Nav);
            this.$root.$router.push(this.routes[0]);// this.$parent.$router.push(this.routes[0]);
        },
        changeMenu(){
            this.hide = !this.hide
        },
        goHome(){
            this.$root.$router.push({ name:'index'});
        },
        logOut(){
            localStorage.clear();
            this.name = '???';
            this.$message({
                message:'你已退出登录',
                type:'warning',//success/warning/info/error
                duration:1200,
                showClose:true,
                onClose(){
                    // next({ name:'login', params: { go : to.name }});
                    location.href="./sign.html"
                }
            });
        }
    },
    watch: {
        '$route': 'fetchData' // 如果路由有变化，会再次执行该方法
    }
}
</script>

<style>
html,body{
    width:100%;
    height:100%;
}
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
    color:#333;
}
body .el-container.is-vertical{
    height:100%;
    margin-bottom:0;
    position: relative;
}
body > .el-container {
    margin-bottom: 40px;
}
.el-header{
    color: #fff;
    text-align: center;
    line-height: 60px;
    background-color: rgb(84, 92, 100);
    position: relative;
}
.el-header .logo{
    width:210px;    
    font-size:22px;
    font-weight:700;
    cursor:pointer;
    position: absolute;
    left:0;
}
.el-header .nav{
    margin-left: 180px;
}
.el-header .info{
    width:210px;
    font-size:14px;
    padding-right:10px;    
    position: absolute;
    right:0;
    top:0;
    text-align: right;
}
.el-header .info .menu{
    margin-right:15px;
    cursor:pointer;
}

.main-aside {
    width:200px;
    color: #333;
    text-align: center;
    background-color: #f0f0f0;
    border-right:solid 1px #eee;
    box-sizing: border-box;
    overflow:hidden;
    transition: width .2s;
}
.main-aside.hide{
    width:0;
}
.main-aside .inner{
    padding:20px;
}
.main-aside .inner>li{
    line-height: 40px;
    text-align: left;
    cursor:pointer;
    border-bottom: solid 1px #ddd;
}
.router-link-exact-active{
    color:#e6465a;
}
.main-box{
    width:100%;
    position:relative;
}
.main-cont {
    height:100%;
    padding:20px;
    color: #333;
    box-sizing:border-box;
    overflow:auto;
}
.main-footer{
    width:100%;
    height:24px;
    line-height:24px;
    font-size:12px;
    text-align: center;
    color:#999;
    border-top:solid 1px #eee;
    background: #fff;
    position: absolute;
    bottom:0;
    z-index:200;
}
</style>
