<template>
	<view>
		<view @click="handleAddress" class="padding flex align-center justify-between">
			
			<view class="" v-if="orderAddress">
				{{orderAddress.username}},{{orderAddress.phone}}
				<view class="">
					{{orderAddress.city}}
					{{orderAddress.region}}
					{{orderAddress.detail}}
				</view>
			</view>
			<view v-else>
				请选择地址
			</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="padding">
			配送时间
		</view>
		<view class="padding flex justify-between">
			<view>请选择配送日期</view>
			<view>请选择配送时间</view>
		</view>
		<view class="flex padding">
			<view class="flex align-center">
				<image class="poster margin-right" ></image>
			</view>
			<view class="flex justify-between info">
				<view>
					草莓蛋糕
					<view class="margin-tb-xs">草莓蛋糕</view>
					￥199
				</view>
				<view class="flex flex-direction align-end">
					<view  class="edit margin-bottom-xs ">
						<text class="iconfont icon-bianji"></text>
					</view>
					<!-- {{item.list[item.idx].spec}} × {{item.num}} -->
					X
				</view>
			</view>
		</view>
		
		<view class="flex justify-between btn-fixed padding-tb-sm ">
			<button type="default" class="btn bg-yellow ">立即支付</button>
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleAddress(){
				uni.navigateTo({
					url:'../address/address'
				})
			}
		},
		computed:{
			...mapGetters({
				'orderAddress':'address/orderAddress'
			})
		}
	}
</script>

<style lang="scss">
	.poster {
		width: 180upx;
		height: 180upx;
		background-color: #007AFF;
	}

	.info {
		width: 60%;

		.edit {
			width: 80upx;
			height: 80upx;
			text-align: center;
			line-height: 80upx;
			background-color: #E6E6E6;
			border-radius: 50%;
		}
	}

	.flex.align-end {
		min-width: 210upx;
	}

	.icon-canju {
		color: #E7e7e7;
	}

	.cu-btn.lg {
		width: 50%;
	}
	.btn-fixed{
		position: fixed;
		height: 120upx;
		width: 100%;
		bottom: 0;
		box-shadow: 0 0 10upx 2upx rgba(0, 0, 0, 0.2);
		background-color: #FFFFFF;
		.btn{
			width: 45%;
			line-height: 80upx;
			text-align: center;
		}
	}
</style>
