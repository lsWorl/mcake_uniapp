<template>
	<view>
		<nav-custom></nav-custom>
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
						{{item.item.bname}}
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
		data() {
			return {
				glist: [],
				page: 0,
				tabArr: [{
						name: '分类',
						bcid: '',
						target: ''
					},
					{
						name: '蛋糕',
						bcid: '1',
						target: '/pages/cake'
					},
					{
						name: '面包',
						bcid: '11',
						target: '/pages/bread'
					},
					{
						name: '小食',
						bcid: '6',
						target: '/pages/food'
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
				listShow: false
			}
		},
		computed: {
			condition() {
				return this.$store.state.condition.cond
			}
		},
		methods: {
			handleDtail(idx) {
				uni.navigateTo({
					url: '../detail/detail?idx=' + idx
				})
			},
			loadData() {
				let ship = this.page * 8
				let wh = JSON.stringify(this.condition)
				let url = `/1.1/classes/goods?where=${wh}&limit=8&skip=${ship}`
				this.$get(url).then(res => {
					setTimeout(function() {
						uni.stopPullDownRefresh()
					}, 1000)
					let {
						results
					} = res
					if (results.length) {
						this.page++
						this.glist = [
							...this.glist,
							...res.results
						]
						return
					}
					uni.showToast({
						title: '这回真没了',
						icon: 'none'
					})
				})
			},
			handleTab(item) {
				let {
					bcid,
					target
				} = item
				if (bcid) {
					this.$store.commit('changeCondition', {
						bcid: parseInt(bcid)
					})
					this.reloadData()
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
				type === 1 ? obj.fid = tid : obj.sid = tid
				this.$store.commit('changeCondition',obj)
				this.reloadData()
			},
			reloadData() {
				this.glist = []
				this.page = 0
				this.loadData()
			}
		},
		onLoad() {
			this.loadData()
			// ajax请求分类数据
			this.$get('/1.1/classes/classify').then(res => {
				this.cfylist = res.results
			})
		},
		onReachBottom() {
			this.loadData()
		},
		onPullDownRefresh() {
			reloadData()
		}
	}
</script>

<style lang="scss">
	page {
		padding: 90upx 0upx 120upx;
	}

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
	}

	.cont {
		display: flex;
		flex-wrap: wrap;
		padding: 15upx;
		justify-content: space-between;
	}

	.fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-shadow: 0 0 10upx 2upx rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}

	.pop-cont {
		width: 350upx;
		margin-top: 200upx;
	}
</style>
