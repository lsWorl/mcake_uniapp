<template>
	<view>
		<button type="default" @click="handldCfy">转录分类</button>
		<button type="default" @click="handldGoods">转录商品</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handldCfy() {
				uni.request({
					url: 'https://h5.mcake.com/api/5e90690f0e270d04?cityId=641',
					method: 'GET',
					header: {
						'access-token': '9e3d04f360d6a46bb3f6983fe66bedd3',
						'version': "v1.0"
					},
					success: (res) => {
						let {
							data
						} = res.data
						let batchObj = {
							"requests": []
						}
						data.forEach(item => {
							batchObj.requests.push({
								"method": "POST",
								"path": "/1.1/classes/classify",
								"body": {
									item
								}
							})
						})
						this.$post('/1.1/batch', batchObj)
					}
				})
			},
			handldGoods () {
				uni.request({
					url: 'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=641&page=2&bid=6',
					method: 'GET',
					header: {
						'access-token': '9e3d04f360d6a46bb3f6983fe66bedd3',
						'version': "v1.0"
					},
					success: (res) => {
						let {
							list
						} = res.data.data
						let batchObj = {
							"requests": []
						}
						list.forEach(item => {
							batchObj.requests.push({
								"method": "POST",
								"path": "/1.1/classes/goods",
								"body": {
									item
								}
							})
						})
						this.$post('/1.1/batch', batchObj)
					}
				})
			}
		}
	}
</script>

<style>

</style>
