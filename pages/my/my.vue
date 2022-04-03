<template>
	<view>
		<view class="cont"></view>
		<view class="margin bg-fff">
			<view class="text-center">
				<image class="avatar" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="fs-28 text-center">
				张三丰
			</view>
			<view class="flex grid ">
				<view v-for="(item,index) in gridArr" class="flex margin flex-direction align-center">
					<text :class="['iconfont margin-bottom-xs',item.icon]"></text>
					{{item.name}}
				</view>
				<view v-for="(item,index) in gridArr" class="flex margin flex-direction align-center">
					<text :class="['iconfont margin-bottom-xs',item.icon]"></text>
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridArr:[
					{
						icon:'icon-danju',
						name:'我的订单'
					},
					{
						icon:'icon-caiwu',
						name:'待收货'
					},
					{
						icon:'icon-yinhangqia',
						name:'待付款'
					},
					{
						icon:'icon-vip-fill',
						name:'会员等级'
					}
				]
			};
		}
	}
</script>

<style lang="scss">
.cont{
	background-color: #F6f6f6;
	height: 400upx;
}
.grid .iconfont{
	font-size: 60upx;
	color: #888;
}
.avatar{
	width: 150upx;
	height: 150upx;
	border-radius: 50%;
	margin-top: -75upx;
}
.margin.bg-fff{
	margin-top: -200upx;
}
</style>
