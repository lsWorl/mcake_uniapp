<template>
	<view>
		<view class="cont">
			<good-item v-for="(item,index) in glist" :gdata="item"></good-item>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				glist:[],
				page:0
			}
		},
		methods: {
			handleDtail (idx) {
				uni.navigateTo({
					url:'../detail/detail?idx='+idx
				})
			}
		},
		onLoad() {
			let url = `/1.1/classes/goods?where={"bcid":1}&limit=8&skip=0`
			this.$get(url).then(res => {
				this.page++
				this.glist = res.results
				console.log(res)
			})
		},
		onReachBottom() {
			let ship = this.page * 8
			let url = `/1.1/classes/goods?where={"bcid":1}&limit=8&skip=${ship}`
			this.$get(url).then(res => {
				let {results} = res
				if(results.length){
					this.page++
					this.glist = [
						...this.glist,
						...res.results
					]
					return
				}
				uni.showToast({
					title:'这回真没了',
					icon:'none'
				})
			})
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
