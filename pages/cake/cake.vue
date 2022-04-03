<template>
	<view>
		<view class="cont">
			<view class="cake-item" v-for="(item,index) in 8" @click="handleDtail(index)">
				<view class="poster">
					
				</view>
				<view class="info-cont">
					<view class="info">
						<view class="fs-28">
							草莓蛋糕
						</view>
						<view class="fs-20">
							Caomei dangao
						</view>
						<view class="fs-18">
							<text class="fs-14">￥</text>
							218.00
						</view>
					</view>
					<view class="cart-btn">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleDtail (idx) {
				uni.navigateTo({
					url:'../detail/detail?idx='+idx
				})
			}
		}
	}
</script>

<style lang="scss">
.cake-item{
	width: 350upx;
	.poster{
		height: 350upx;
		background-color: #f5f5f5;
	}
	.fs-28{
		margin-top: 24upx;
	}
	.fs-20{
		margin-top: 16upx;
	}
}
.cont{
	display: flex;
	flex-wrap: wrap;
	padding: 15upx;
	justify-content: space-between;
}
</style>
