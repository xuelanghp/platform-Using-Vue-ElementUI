<template>
    <div class="home">
        <i class="el-icon-location-outline"></i>系统管理

        <div class="gap">
            <el-rate v-model="mark" show-text></el-rate>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mark: null,
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
</style>
