<template>
    <div class="home">
        <i class="el-icon-location-outline"></i>这是首页

        <div class="gap">
            <el-rate v-model="mark" show-text></el-rate>
        </div>

        <div class="gap">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in carousel" :key="item">
                    <div class="c-li" v-bind:style=" 'background:url('+item+') no-repeat center center;background-size: 100% auto; */'"></div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mark: null,
            carousel:[
                'http://img.zcool.cn/community/0381de85949053ca8012193a3339cc5.jpg',
                'http://i1.hoopchina.com/user/904/339904/1260861415a059bbig.jpg',
                'http://image1.92bizhi.com/art_green-widescreen_01-2560x1600.jpg',
                'http://pic.90sjimg.com/design/00/07/77/64/561220e153181.jpg'
            ]
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            console.log('Index-$query:',this.$route.query);  // $route.params, $route.query
        }
    }
}
</script>

<style>
.gap{
    margin-top:20px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.c-li{
    height:100%;
}
</style>
