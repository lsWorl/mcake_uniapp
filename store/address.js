import { $post,$get } from "../utils/request.js"
export default {
	namespaced:true,
	state(){
		return {
			checkedIdx:0,
			addressList:[
				{
					username:'张三',
					phone:'13451321',
					city:'浙江',
					region:'杭州',
					detail:'黄媛介',
					isdefault:true
				},
				{
					username:'里斯',
					phone:'13451321',
					city:'浙江',
					region:'杭州',
					detail:'黄媛介',
					isdefault:false
				},
				{
					username:'维斯',
					phone:'13451321',
					city:'浙江',
					region:'杭州',
					detail:'黄媛介',
					isdefault:false
				}
			]
		}
	},
	getters:{
		orderAddress(state){
			let {checkedIdx,addressList} = state
			if(checkedIdx!=-1){
				return addressList[checkedIdx]
			}
			let len = addressList.length
			for(let i = 0 ; i< len ; i++){
				if(addressList[i].isdefault){
					return addressList[i]
				}
			}
		}
	},
	mutations:{
		initCheckIdxMut(state){
			state.addressList.forEach((item,i)=>{
				if(item.isdefault){
					state.checkedIdx = i
				}
			})
		},
		addressDeaultMut(state,idx){
			state.addressList.forEach((item,i)=>{
				if(i===idx){
					item.isdefault = true
				}else{
					item.isdefault = false
				}
			})
		},
		addressCheckMut(state,idx){ //选取新地址
			state.checkedIdx = idx
			uni.navigateBack({
				delta:1
			})
		},
		addressAddMut(state,addressObj){
			state.addressList.push(addressObj)
		},
		addressInitMut(state,addressArr){
			state.addressList = addressArr
		}
	},
	actions:{
		addressAddAct(context,addressObj){
			$post('/1.1/classes/address',addressObj).then(({objectId}) =>{
				// console.log(res)
				context.commit('addressAddMut',{
					...addressObj,
					objectId
				})
				uni.navigateBack({
					delta:1
				})
			})
		},
		addressInitAct(context,userid){
			let url = `/1.1/classes/address?where{"userId":"${userid}"}`
			$get(url).then(({results}) =>{
				console.log(results)
				context.commit('addressInitMut',results)
			})
		}
	}
}