<template>
	<view>
		<view class="cake-item" @click="handleDetail">
			<view>
				<image class="poster" :src="gdata.item.img"></image>
			</view>
			<view class="info-cont">
				<view class="info flex align-center justify-between">
					<view class="">
						<view class="fs-28">
							{{gdata.item.name}}
						</view>
						<view class="fs-20">
							{{gdata.item.french}}
						</view>
					</view>
					<view @click.stop="handleCartAdd" class="cart-btn margin-right-sm">
						<text class="iconfont icon-gouwuchekong"></text>
					</view>
				</view>
				<view class="fs-18">
					<text class="fs-14">￥</text>
					{{gdata.item.price}}
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "good-item",
		data() {
			return {

			};
		},
		props:['gdata'],
		methods:{
			handleDetail() {
				uni.setStorage({
					key:'detail',
					data:this.gdata,
					success: () => {
						uni.navigateTo({
							url:'/pages/detail/detail'
						})
					}
				})
			},
			handleCartAdd(){
				this.$store.commit('cart/cartAddMut',{
					...this.gdata.item,
					idx:0
				})
			}
		}
	}
</script>

<style lang="scss">
	.cake-item {
		width: 350upx;

		.poster {
			height: 350upx;
			background-color: #f5f5f5;
		}

		.fs-28 {
			margin-top: 24upx;
		}

		.fs-20 {
			margin-top: 16upx;
		}

		.cart-btn {
			width: 60upx;
			height: 60upx;
			border-radius: 50%;
			background-color: #ffe32a;
			text-align: center;
			line-height: 60upx;
		}
	}
</style>
