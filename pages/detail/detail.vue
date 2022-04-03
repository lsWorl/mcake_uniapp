<template>
	<view>
		商品详情
		<button type="primary" @click="handleBack">返回上一页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleBack () {
				uni.navigateBack({
					delta:1
				})
			}
		},
		onLoad(options){
			
		}
	}
</script>

<style>

</style>
