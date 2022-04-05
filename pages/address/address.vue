<template>
	<view>
		<view class="margin-sm u-border padding"
		 v-for="(item,index) in addressList"
		:key="index"
		:class="{'default':item.isdefault}"
		>
			<view class="default-cont">
				默
			</view>
			<view class=" flex justify-between">
				<view class="flex align-center">
					<text 
					class="iconfont icon-canju margin-right"
					:class="checkedIdx==index||item.isdefault?'color-yellow':''"
					@click="handleCheckAddress(index)"
					></text>
					<view class="">
						{{item.username}},{{item.phone}}
						<view class="">
							{{item.city}}
							{{item.region}}
							{{item.detail}}
						</view>
					</view>
				</view>
				<view @click="handleEdit(index)" class="edit margin-bottom-xs ">
					<text class="iconfont icon-bianji"></text>
				</view>
			</view>
			<view class="flex justify-around margin-top">
				<view v-if="item.isdefault">默认地址</view>
				<view v-else @click="handleDefault(index)">设为默认</view>
				<u-line length="20" direction="col"></u-line>
				<view>删除地址</view>
			</view>
		</view>
		<view class="text-center">
			<button type="default" class="cu-btn bg-brown" @click="handleAddAddress">新增地址</button>
		</view>
		
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations({
				// 'handleDefault':'address/addressDeaultMut',
				'handleCheckAddress':'address/addressCheckMut'
			}),
			handleAddAddress(){
				uni.navigateTo({
					url:'./address-detail'
				})
			},
			handleDefault(idx){
				let obj = {"requests":[]}
				this.addressList.forEach((item,i)=>{
					let bool = i === idx
					obj.requests.push({
						"method": "PUT",
						"path": `/1.1/classes/address?${item.objectId}`,
						"body": {
						    "iddefault": bool,
						}
					})
				})
				this.$post('/1.1/batch',obj).then(res=>{
					this.$store.commit('address/addressDeaultMut',idx)
				})
				
			}
			
		},
		computed: {
			...mapState({
				addressList:state=>state.address.addressList,
				checkedIdx:state=>state.address.checkedIdx,
				userInfo:state=>state.user.userInfo
			})
		}
	}
</script>

<style lang="scss">
		.edit {
			width: 80upx;
			height: 80upx;
			text-align: center;
			line-height: 80upx;
			background-color: #E6E6E6;
			border-radius: 50%;
		}
		.default-cont{
			display: none;
		}
		.default{
			position: relative;
			overflow: hidden;
			.default-cont{
				position: absolute;
				padding: 40upx 10upx 10upx;
				width: 100upx;
				background-color: #fae456;
				font-size: 12upx;
				text-align: center;
				top: -30upx;
				right: -40upx;
				transform: rotate(45deg);
				display: block;
			}
		}
</style>
