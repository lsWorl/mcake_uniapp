<template>
	<view>
		<view class="flex padding" v-for="(item,index) in cartList" :key="item.id+ '-'+item.idx">
			<view class="flex align-center">
				<text class="iconfont icon-canju margin-right" :class="item.ischeck?'color-yellow' : ''"
					@click="handleCheck(index)"></text>
				<image class="poster margin-right" :src="item.img"></image>
			</view>
			<view class="flex justify-between info">
				<view>
					{{item.name}}
					<view class="margin-tb-xs">{{item.french}}</view>
					￥{{item.list[item.idx].price}}
				</view>
				<view class="flex flex-direction align-end">
					<view @click="handleEdit(index)" class="edit margin-bottom-xs ">
						<text class="iconfont icon-bianji"></text>
					</view>
					{{item.list[item.idx].spec}} × {{item.num}}
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<u-overlay :show="show" @click="show = false">
			<view class="bg-fff margin cover-cont" @click.stop>
				<view class="padding">
					<view class="flex justify-between info">
						<image class="poster margin-right"
							src="https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg"></image>
						<view>
							{{cartList[cartIdx].name}}
							<view class="margin-tb-xs">{{cartList[cartIdx].french}}</view>
							￥{{checkedCartInfo.price}}
						</view>
					</view>
					<view class="flex justify-between padding-tb u-border-bottom">
						<view>规格选择</view>
						<view class="drop">
							<view @click="dropShow = !dropShow">
								{{checkedCartInfo.spec}}
								<text class="iconfont icon-xiala"></text>
							</view>
							<view class="drop-list bg-fff" v-if="dropShow">
								<view class=" padding-sm" v-for="(item,index) in cartList[cartIdx].list" :key="index"
									@click="handleDropList(index)">
									{{item.spec}}
								</view>
							</view>
						</view>
					</view>
					<view class="flex align-center justify-between padding-tb-sm u-border-bottom">
						<view>数量选择</view>
						<u-icon <u-number-box button-size="26" @change="handleNum">
							</u-number-box>
					</view>
				</view>
				<view class="flex margin-top">
					<button type="default" @click="show=false" class="cu-btn lg bg-brown">取消</button>
					<button type="default" class="cu-btn lg bg-yellow" @click="handleOk">确认</button>
				</view>
			</view>
		</u-overlay>
		<view class="flex justify-around btn-fixed padding-tb-sm ">
			<view class="flex flex-sub padding">
				<text class="iconfont icon-canju margin-right-xs" :class="allInfo.allCheck?'color-yellow' : ''"
					@click="handleAllCheck(allInfo.allCheck)"></text>
				全选
				<view class="margin-left">
					共计：{{allInfo.allPrice}}
				</view>
			</view>
			<view @click="handleOrder" class="bg-yellow btn padding text-center color-fff ">
				立即结算
			</view>
			
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				show: false,
				dropShow: false,
				cartIdx: 0,
				dropIdx: 0,
				num: 1 //当前弹窗商品数量
			}
		},
		methods: {
			...mapMutations({
				handleCheck: 'cart/cartCheckMut',
				handleAllCheck: 'cart/cartAllCheckMut'
			}),
			handleEdit(idx) {
				this.cartIdx = idx
				this.dropIdx = this.cartList[idx].idx
				this.show = true
			},
			handleDropList(dropIdx) {
				this.dropShow = false
				this.dropIdx = dropIdx
			},
			handleOk() {
				this.show = false
				let {
					cartIdx,
					dropIdx,
					num
				} = this
				this.$store.commit('cart/cartListCheckMut', {
					cartIdx,
					dropIdx,
					num
				})
			},
			handleNum({
				value
			}) {
				this.num = value
			},
			handleOrder() {
				uni.navigateTo({
					url:'../order/order'
				})
			}
		},
		computed: {
			...mapState({
				cartList: state => state.cart.cartList,
				userInfo:state=>state.user.userInfo
			}),
			...mapGetters({
				allInfo: 'cart/allInfo'
			}),
			checkedCartInfo() {
				let {
					cartIdx,
					cartList,
					dropIdx
				} = this
				return cartList[cartIdx].list[dropIdx]
			}
		},
		onLoad() {
			if(this.userInfo){
				return
			}
			uni.showModal({
				title:'温馨提示',
				content:'您需要先登录才能继续您的操作',
				cancelText:'稍后再说',
				confirmText:'立即登录',
				success({cancel}) {
					if(cancel){
						uni.navigateBack({
							delta:1
						})
						return
					}
					uni.navigateTo({
						url: '/pages/user/login'
					})
				}
			})
		}
	}
</script>

<style lang="scss">
	page {
		// padding-bottom: 100upx;
	}

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

	.cover-cont {
		position: absolute;
		top: 50%;
		left: 0;
		width: 690upx;
		transform: translateY(-50%);
	}

	.drop {
		position: relative;

		.drop-list {
			width: 300upx;
			position: absolute;
			top: 60upx;
			right: 0;
			box-shadow: 0 0 10upx 2upx rgba(0, 0, 0, 0.2);
			z-index: 10;

			view:hover {
				background-color: #e6e6e6;
			}
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
			line-height: 30upx;
			text-align: center;
		}
	}
</style>
