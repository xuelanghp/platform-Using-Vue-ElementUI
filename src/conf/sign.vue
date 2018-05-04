<template>
    <div class="sign-bg">
        <div class="sign">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="w100" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
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
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
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
                        location.href="./"
                    }
                });
            }
        }
    }
}
</script>

<style>
html,body{
    width:100%;
    height:100%;
}
.el-form-item__content::after, .el-form-item__content::before,.el-form-item::after, .el-form-item::before {
    display: inline; 
    content: "";
}
.w100{
    width:100%;
}
.sign-bg{
    width:100%;
    height:100%;
    background:#000 url('http://img.zcool.cn/community/0381de85949053ca8012193a3339cc5.jpg') no-repeat center center;
    background-size:100% auto;
    position: relative;
}
.sign-bg .sign{
    width:360px;
    padding:50px 80px 30px 30px;
    box-sizing: border-box;
    background:#fff;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
</style>
