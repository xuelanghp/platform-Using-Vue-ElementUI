<template>
	<div class="cont">
		Sorry, something error!!!
		<el-button type="primary" @click="goBack">返回</el-button>
	</div>
</template>

<script>
export default {
	methods:{
		goBack () {
            window.history.length > 2 ? this.$router.go(-2) : this.$parent.$router.push('/')
        }
	}
}
</script>

<style>
.cont {
	font-family: Helvetica, sans-serif;
}
</style>
