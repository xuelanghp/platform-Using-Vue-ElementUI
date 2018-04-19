<template>
    <div class="">
        <div class="m-title">活动管理</div>

        <!-- 搜索 -->
        <el-form :inline="true" :model="formSearch" size="small" class="demo-form-inline">
            <el-form-item label="活动名称">
                <el-input v-model="formSearch.name" placeholder="活动名称"></el-input>
            </el-form-item>

            <el-form-item label="活动类型">
                <el-select v-model="formSearch.type" placeholder="活动类型">
                    <el-option label="类型一" value="1"></el-option>
                    <el-option label="类型二" value="2"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="活动时间">
                <el-date-picker v-model="formSearch.startDate" type="date" placeholder="选择日期"> </el-date-picker> 到
                <el-date-picker v-model="formSearch.endDate" type="date" placeholder="选择日期"> </el-date-picker>
            </el-form-item>

            <el-form-item label="活动状态">
                <el-select v-model="formSearch.status" placeholder="活动类型">
                    <el-option label="状态一" value="1"></el-option>
                    <el-option label="状态二" value="2"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="default" @click="onReset">重置</el-button>
            </el-form-item>
        </el-form>

        <div class="gap">
            <el-button type="primary" @click="addActivity">+ 创建活动</el-button>
        </div>

        <!-- 表格 -->
        <div class="gap">
            <el-table :data="list" style="width: 100%" height="400">
                <el-table-column fixed prop="id" label="活动编号" min-width="10%"></el-table-column>
                <el-table-column prop="name" label="活动名称" min-width="25%"> </el-table-column>
                <el-table-column label="类型" min-width="15%"> 
                    <template slot-scope="scope">
                        <span>{{type[scope.row.type]}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="时间" min-width="20%"> 
                    <template slot-scope="scope">
                        <p>提报时间：<span>{{scope.row.startDate}}</span></p>
                        <p>活动时间：<span>{{scope.row.endDate}}</span></p>
                    </template>
                </el-table-column>
                <el-table-column label="状态" min-width="15%"> 
                    <template slot-scope="scope">
                        <span>{{status[scope.row.status]}}</span>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" min-width="15%">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                        <el-button type="text" size="small">商品管理</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 分页 -->
        <div class="block gap">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="prev, pager, next, jumper"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Request from '../utils/request'
import api from '../info/api'

export default {
    data(){
        return {
            mark: null,
            formSearch: {
                name: '',
                type: '',
                startDate:'',
                endDate:'',
                status:''
            },

            type:['意向收集','促销活动','常规活动'],
            status:['提报中','提报结束','未开始','活动进行中','活动已结束'],

            list:[
                {
                    id: '20163',
                    name: '2018年三八女神节美妆专场活动提报-满300减50',
                    type: 0,
                    status: 1,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20168',
                    name: '专场活动提报-满100减20',
                    type: 1,
                    status: 3,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20163',
                    name: '2018年三八女神节美妆专场活动提报-满300减50',
                    type: 1,
                    status: 2,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20168',
                    name: '专场活动提报-满100减20',
                    type: 2,
                    status: 0,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20163',
                    name: '2018年三八女神节美妆专场活动提报-满300减50',
                    type: 1,
                    status: 1,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20168',
                    name: '专场活动提报-满100减20',
                    type: 2,
                    status: 2,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20163',
                    name: '2018年三八女神节美妆专场活动提报-满300减50',
                    type: 2,
                    status: 4,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20168',
                    name: '专场活动提报-满100减20',
                    type: 1,
                    status: 4,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20163',
                    name: '2018年三八女神节美妆专场活动提报-满300减50',
                    type: 0,
                    status: 0,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
                {
                    id: '20168',
                    name: '专场活动提报-满100减20',
                    type: 0,
                    status: 2,
                    startDate: '2016-05-03',
                    endDate:'2016-05-10',
                }, 
            ],

            currentPage: 3,
            pageSize:10,
            total:100
        }
    },
    created(){
        this.getMyData2()
    },
    methods:{
        fetchData(){
            console.log('Index-$query:',this.$route.query);  // $route.params, $route.query
        },
        // 获取数据
        getMyData: async function () {
            let url = api.wxapitest+'/xcx/v1/indexpage/hotGoods',
                params = {
                    _v:'1.0.0',
                    _t:1524109547008,
                    thrid_session:'NEWAUTHNTZkYUowUVgycDZSNDhGWGIrNlNBcU1aTlZqUTlMRERDbSsvTHlIM2FmczJUeXd1em01cGNBZG9VZDlxQXczcVBiVGFZdi80TnFrNE9aWGNZN3dRdmw3ZVFwYkdnS0gvRU5PYWlyWGhGcEFyLzJDMTg4dFloL1QyYjRwZ2pSSWJxVVdSNGdpMQ==',
                    pageSize:20,
                    pageIndex:1
                },
                headers = {
                    'content-type': 'application/json'
                };

            let res = await Request.get(url, params, headers);
            if(res.data && res.data.success) {
                alert('请求成功')
            }
        },
        // 获取数据
        getMyData2: async function () {
            let url = api.wxapitest+'/xcx/v1/indexpage/hotGoods',
                params = {
                    _v:'1.0.0',
                    _t:1524109547008,
                    thrid_session:'NEWAUTHNTZkYUowUVgycDZSNDhGWGIrNlNBcU1aTlZqUTlMRERDbSsvTHlIM2FmczJUeXd1em01cGNBZG9VZDlxQXczcVBiVGFZdi80TnFrNE9aWGNZN3dRdmw3ZVFwYkdnS0gvRU5PYWlyWGhGcEFyLzJDMTg4dFloL1QyYjRwZ2pSSWJxVVdSNGdpMQ==',
                    pageSize:20,
                    pageIndex:1
                },
                headers = {
                    'content-type': 'application/json'
                };

            this.$axios.get('/xcx/v1/indexpage/hotGoods',{
                // baseURL:"https://wxapitest.aomygod.com",
                params,
                headers
            }).then(res => {
                console.log('res-axios:',res)
            }, err => {
                console.log('err-axios:',res)
            })
        },
        onSubmit() {
            console.log('submit!');
        },
        onReset(){

        },
        addActivity(){

        },
        handleClick(row) {
            console.log(row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style>
.gap{
    margin-top:20px;
}
.m-title{
    font-size:18px;
    padding-bottom: 18px;
    margin-bottom:20px;
    border-bottom:solid 1px #eee;
}
</style>
