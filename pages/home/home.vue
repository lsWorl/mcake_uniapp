<template>
	<scroll-view scroll-with-animation="true" :scroll-into-view="topItem" class="scroll-cont" scroll-y="true"
		@scroll="handleScroll">
		<view>
			<view id="top"></view>
			<nav-custom></nav-custom>
			<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="#ffe32a">
				<swiper-item v-for="(item,index) in banner" :key="item.objectId" @click="handleBanner(item.link)">
					<view class="swiper-item">
						<image :src="item.img"></image>
					</view>
				</swiper-item>
			</swiper>
			<home-title title="本季推荐" en-title="Seasonal Recommend" en-tit="Seasonal"></home-title>
			<scroll-view scroll-x="true">
				<view class="scroll-inner">
					<image src="../../static/images/classify.png" mode="heightFix"></image>
					<image src="../../static/images/classify_fill.png" mode="heightFix"></image>
					<image src="../../static/images/index_fill.png" mode="heightFix"></image>
				</view>
			</scroll-view>
			<home-title title="法式经典" en-title="French Classics" en-tit="French"></home-title>
			<image class="classify" src="../../static/images/classify_fill.png" mode=""></image>
			<view class="flex flex-wrap padding-sm justify-between">
				<good-item v-for="(item,index) in 4"></good-item>
			</view>
			<view class="back-top" v-if="isShow" @click="handleBackTop">
				<text class="iconfont icon-fanhuidingbu"></text>
			</view>
		</view>
		<tab-custom></tab-custom>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				topItem: '', //返回顶部标记点
				banner: []
			}
		},
		methods: {
			handleScroll(ev) {
				let {
					scrollTop
				} = ev.detail
				if (scrollTop > 500) {
					this.isShow = true
					this.topItem = ''
				} else {
					this.isShow = false
				}
			},
			handleBackTop() {
				this.topItem = 'top'
			},
			handleBanner (link) {
				uni.navigateTo({
					url:`./banner-ad?link=${link}`
				})
			}
		},
		onLoad() {
			this.$get('/1.1/classes/banner').then(res => {
				
				this.banner = res.results
			})
		}
	}
</script>

<style lang="scss">
	.banner {
		height: 1000upx;

		swiper-item {
			height: 1000upx;
		}

		image {
			width: 100%;
			height: 1000upx;
		}
	}

	.scroll-inner {
		white-space: nowrap;

		image {
			height: 290upx;
		}
	}

	.classify {
		height: 380upx;
		width: 100%;
	}

	.back-top {
		height: 100upx;
		width: 100upx;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 0 0 30upx 4upx rgba(0, 0, 0, 0.4);
		position: fixed;
		bottom: 40upx;
		right: 20upx;
		text-align: center;
		line-height: 100upx;
	}

	.scroll-cont {
		height: 100vh;
	}
</style>
