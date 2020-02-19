<template>
	<div>
		<div id=""style="width: 280px;margin: auto;padding: 80px 0;">
			<form action="" method="post">
				<div style="padding: 30px 0;text-align: center;">企业管理登陆</div>
				<div class="row">
					<div>用户名：</div>
					<input type="text" v-model="userName" placeholder="请输入账号"/>
				</div>
				<div class="row">
					<div>密码：</div>
					<input type="password" v-model="psw" placeholder="请输入密码"/>
				</div>
				<!--<div>登陆</div>-->
				<div style="padding-top: 20px;text-align: center;">
					<input type="submit" value="登陆"/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
      	userName:'',
      	psw:'',
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
	.row{
		width: 100%;
		input{
			font-size: 15px;
			width: 100%;
		}
	}
</style>
