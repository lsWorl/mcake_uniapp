<template>
	<view class="content">
		<view class="logo"><image src="../../static/kitty-BasicLogin/logo.png" mode=""></image></view>
		<view class="uni-form-item uni-column">
			<input type="text" v-model="info.username" class="uni-input" name="" placeholder="请输入账号" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" v-model="info.password" class="uni-input" name="" placeholder="请输入密码" />
		</view>
		<button type="primary" @click="handleLogin">登陆</button>
		<view class="links"><view @tap="gotoForgetPassword">忘记密码？</view><view>|</view><view class="link-highlight" @tap="gotoRegistration">注册账号</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{
					username:'张三',
					password:'123'
				}
			}
		},
		onLoad() {
			
		},
		methods: {
			gotoRegistration: function () {
				uni.navigateTo({url: 'registration'});
			},
			gotoForgetPassword: function () {
				uni.navigateTo({url: 'forget-password'});
			},
			handleLogin() {
				this.$store.dispatch('user/userLoginAct',this.info)
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;
	.content{
		padding: 100upx;
	}
	.logo{
	    text-align: center;
		image{
		    height: 200upx;
		    width: 200upx;
		    margin: 0 0 60upx;
		}
	}
	.uni-form-item{
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;
		.uni-input{
			font-size: 30upx;
			padding: 7px 0;
			height: 60upx;
		}
	}
	button[type="primary"]{
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}
	.links{
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;
		view{
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}
		.link-highlight{
			color: $color-primary
		}
	}
</style>
