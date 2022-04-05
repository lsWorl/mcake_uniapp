<template>
	<view>
		<map class="map" ></map>
		<form @submit="handleSubmit">
			<view class="cu-form-group margin-top">
				<view class="title">
					<text class="cuIcon-friendfill"></text>
				</view>
				<input name="username" class="text-right" placeholder="请输入姓名" ></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-mobilefill"></text>
				</view>
				<input name="phone" class="text-right" placeholder="请输入电话" ></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-locationfill"></text>
				</view>
				<picker name="region" :range="regionArr" @change="handleRegion">
					<view class="picker">
						{{regionIdx===-1?'请选择区域':regionArr[regionIdx]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				
				<view class="title">
					<text class="cuIcon-locationfill"></text>
					
				</view>
				<input name="detail"  class="text-right" placeholder="请输入详细地址"></input>
			</view>
			<view class="padding">
				<button form-type="submit" class="cu-btn bg-brown block">确定</button>
			</view>
		</form>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				regionArr:[
					'钱塘区',
					'上城区',
					'下城区'
				],
				regionIdx:-1
			}
		},
		methods: {
			handleRegion(ev){
				let{value} = ev.detail
				this.regionIdx = value
			},
			handleSubmit(ev){
				
				let {value} = ev.detail
				let {regionArr,regionIdx} = this
				value.city = '杭州市'
				value.region = regionArr[regionIdx]
				value.isdefault = false
				value.userid = this.userInfo.objectId
				this.$store.dispatch('address/addressAddAct',value)
			}
		},
		computed:{
			...mapState({
				userInfo:state => state.user.userInfo
			})
		}
	}
</script>

<style lang="scss">
.map{
	height: 400upx;
	width: 100%;
}
</style>
