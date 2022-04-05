<template>
	<view>
		<view class="cont">
			<good-item v-for="(item,index) in glist" :gdata="item"></good-item>
			<view class="fixed flex bg-fff justify-center padding-sm">
				<view v-for="(item,index) in tabArr" :key="index" @click="handleTab(item)"
					class="flex align-center justify-center">
					<view class="">{{item.name}}</view>
					<u-line v-if="index<tabArr.length-1" direction="col" length="15" margin="30upx"></u-line>
				</view>
			</view>
			<u-popup :show="show" mode="left" @close="handleClose" @open="open">
				<view class="pop-cont">
					<view v-for="(item,index) in cfylist" class="padding-sm u-border-bottom">
						<view @click="handleList(item,0)">
							{{item.item.bname}}
						</view>
						<view v-if="index==0">
							<view @click="listShow = !listShow"
								class="padding-tb-sm margin-top u-border-top u-border-bottom">
								口味筛选
							</view>
							<u-cell-group v-if="listShow">
								<u-cell 
								v-for="(itm,index) in item.item.list" 
								icon="" 
								:title="itm.tname" 
								isLink
								@click="handList(itm,1)"
								></u-cell>
							</u-cell-group>
							<view @click="sceneShow = !sceneShow" class="padding-tb-sm">
								场景筛选
							</view>
							<u-cell-group v-if="sceneShow">
								<u-cell 
								v-for="(itm,index) in item.item.scene"
								 icon="" 
								 :title="itm.tname" 
								 isLink
								 @click="handList(itm,2)"
								 >
								</u-cell>
							</u-cell-group>
						</view>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab-custom",
		data() {
			return {
				glist: [],
				tabArr: [{
						name: '分类',
						bcid: '',
						target: ''
					},
					{
						name: '蛋糕',
						bcid: '1',
						target: '/pages/cake/cake'
					},
					{
						name: '面包',
						bcid: '11',
						target: '/pages/cake/cake'
					},
					{
						name: '小食',
						bcid: '6',
						target: '/pages/cake/cake'
					},
					{
						name: '购物车',
						bcid: '',
						target: '/pages/cart/cart'
					},
				],
				show: false,
				cfylist: [],
				sceneShow: false,
			};
		},
		created() {
			this.$get('/1.1/classes/classify').then(res => {
				this.cfylist = res.results
			})
		},
		methods:{
			handleTab(item) {
				let {
					bcid,
					target
				} = item
				if (bcid) {
					this.$store.commit('changeCondition', {
						bcid: parseInt(bcid)
					})
					uni.navigateTo({
						url:target
					})
				}
				if (!bcid && !target) {
					this.show = true
				}
				if(!bcid && target) {
					uni.navigateTo({
						url:target
					})
				}
			},
			handleClose() {
				this.show = false
			},
			handList({bid,tid},type) {
				console.log(bid,tid)
				let obj = {bcid:bid}
				if(type===1){obj.fid = tid}
				if(type===2){obj.sid = tid}
				this.$store.commit('changeCondition',obj)
				this.show = false
				uni.navigateTo({
					url:`/pages/cake/cake`
				})
			}
		}
	}
</script>

<style lang="scss">
.pop-cont {
		width: 350upx;
		margin-top: 200upx;
	}
</style>
