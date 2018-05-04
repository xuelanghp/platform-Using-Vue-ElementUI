<template>
    <div class="login">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>

        <!-- <div style="margin: 40px;"></div> -->

        <!-- <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
        </el-form> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                name:'',
                password:'',
            },
            from:'',

            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            console.log('Login-$query:',this.$route.query);  // $route.params, $route.query
        },
        onSubmit () {
            let _self = this,
                _name = this.form.name,
                _password = this.form.password;

            if(_name!='' && _password!=''){
                localStorage._nick = '__' + _name ;
                localStorage._pwd = '__'+ _password;
                this.$message({
                    message:`恭喜${_name} , 登录成功!`,
                    type:'success',//success/warning/info/error
                    duration:1200,
                    showClose:true,
                    onClose(){
                        _self.$parent.$router.push({ name: 'index', query: { plan: 'private' }})
                    }
                });
            }
        }
    },
    watch: {
        '$route': 'fetchData' // 如果路由有变化，会再次执行该方法
    }
}
</script>

<style>
.el-form-item__content::after, .el-form-item__content::before,.el-form-item::after, .el-form-item::before {
    display: inline; 
    content: "";
}
</style>
