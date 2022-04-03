<template>
	<view>
		<web-view :src="webSrc"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webSrc:''
			}
		},
		methods: {
			
		},
		onLoad({link,key2,type}) {
			// console.log(options)
			this.webSrc = `${link}&key2=${key2}&type=${type}`
		}
	}
</script>

<style>

</style>
