<template>
	<view>
		<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="#ffe32a">
			<swiper-item>
				<view class="swiper-item">
					<image :src="detail.img" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="flex justify-around">
			<view 
				v-for="(item,index) in detail.list" 
				:key="index"
				:class="['text-center padding-sm tab',{'active':tabIdx===index}]"
				@click="tabIdx=index"
				>
				<view class="">{{item.spec}}</view>
				<view>{{item.weight}}</view>
				<view>{{item.edible}}</view>
			</view>
		</view>
		<view class="padding fs-28 u-border-bottom">
			￥{{detail.list[tabIdx].price}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].ahead}}
			<text class="margin-lr">10cm*20cm</text>
			<text class="margin-lr">{{detail.list[tabIdx].edible}}</text>
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].fittings}}
		</view>
		<view class="flex justify-around btn-fixed padding-tb-sm ">
			<button @click="handleAdd({...detail,idx:tabIdx})" type="default" class="btn bg-brown ">加入购物车</button>
			<button type="default" class="btn bg-yellow ">立即购买</button>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				tabIdx:0,
				detail:null
			}
		},
		methods: {
			...mapMutations({
				'handleAdd':'cart/cartAddMut'
			})
		},
		onLoad(options) {
			uni.getStorage({
				key:'detail',
				success:(res)=>{
					console.log(res)
					this.detail = res.data.item
				}
			})
		}
	}
</script>

<style lang="scss">
page{
	background-color: #FFFFFF;
}
.banner {
		height: 600upx;

		swiper-item {
			height: 600upx;
		}

		image {
			width: 100%;
			height: 600upx;
		}
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
.active{
		border-bottom: 1px solid #555555;
}
</style>
