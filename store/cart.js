import Vue from "vue"
export default {
	namespaced: true,
	state() {
		return {
			cartList: [{
					id: '10092',
					twoId: 10089,
					name: '拿破仑',
					french: 'aux',
					price: 218.00,
					ischeck: true,
					img: 'https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg',
					list: [{
							spec: '1榜',
							price: 100
						},
						{
							spec: '2榜',
							price: 200
						},
						{
							spec: '3榜',
							price: 300
						},
						{
							spec: '5榜',
							price: 500
						}
					],
					num: 1, //商品数量
					idx: 0 //标志选中子商品信息
				},
				{
					id: '10090',
					twoId: 10089,
					name: '拿破仑蛋糕',
					french: 'auxxzc',
					price: 220.00,
					ischeck: false,
					num: 1, //商品数量
					idx: 0, //标志选中子商品信息
					img: 'https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg',
					list: [{
							spec: '1榜',
							price: 100
						},
						{
							spec: '2榜',
							price: 200
						},
						{
							spec: '3榜',
							price: 300
						}
					]
				}
			]
		}
	},
	getters: {
		allInfo(state) { //统计信息
			let allCheck = true
			let allPrice = 0 //总价
			state.cartList.forEach(item => {
				if (!item.ischeck) {
					allCheck = false
				}
				if (item.ischeck) {
					allPrice += item.list[item.idx].price * item.num
				}
			})
			return {
				allCheck,
				allPrice
			}
		}
	},
	mutations: {
		cartCheckMut(state, idx) {
			state.cartList[idx].ischeck = !state.cartList[idx].ischeck
		},
		cartAllCheckMut(state, bool) {
			state.cartList.forEach(item => {
				item.ischeck = !bool
			})
		},
		cartListCheckMut(state, {
			cartIdx,
			dropIdx,
			num
		}) {
			state.cartList[cartIdx].idx = dropIdx
			state.cartList[cartIdx].num = num
		},
		cartAddMut(state, goodObj) { //新增商品
			let {
				cartList
			} = state
			let len = cartList.length
			for (let i = 0; i < len; i++) {
				let {
					id,
					idx
				} = goodObj
				if (cartList[i].id === id && cartList[i].idx === idx) {
					state.cartList[i].num++
					return
				}
			}
			// goodObj.ischeck = false
			// goodObj.num = 1
			// goodObj.idx = 0
			Vue.set(goodObj, 'ischeck', true)
			Vue.set(goodObj, 'num', 1)
			// Vue.set(goodObj,'idx',0)
			state.cartList.push(goodObj)
		}
	}
}
