(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-collect-data-collect-data"],{"04df":function(t,e,n){"use strict";n.r(e);var a=n("f8fc"),c=n("8597");for(var d in c)"default"!==d&&function(t){n.d(e,t,(function(){return c[t]}))}(d);var u,o=n("f0c5"),s=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,"651e7b5f",null,!1,a["a"],u);e["default"]=s.exports},"22f6":function(t,e,n){"use strict";n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{handldCfy:function(){var t=this;uni.request({url:"https://h5.mcake.com/api/5e90690f0e270d04?cityId=641",method:"GET",header:{"access-token":"9e3d04f360d6a46bb3f6983fe66bedd3",version:"v1.0"},success:function(e){var n=e.data.data,a={requests:[]};n.forEach((function(t){a.requests.push({method:"POST",path:"/1.1/classes/classify",body:{item:t}})})),t.$post("/1.1/batch",a)}})},handldGoods:function(){var t=this;uni.request({url:"https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=641&page=2&bid=6",method:"GET",header:{"access-token":"9e3d04f360d6a46bb3f6983fe66bedd3",version:"v1.0"},success:function(e){var n=e.data.data.list,a={requests:[]};n.forEach((function(t){a.requests.push({method:"POST",path:"/1.1/classes/goods",body:{item:t}})})),t.$post("/1.1/batch",a)}})}}};e.default=a},8597:function(t,e,n){"use strict";n.r(e);var a=n("22f6"),c=n.n(a);for(var d in a)"default"!==d&&function(t){n.d(e,t,(function(){return a[t]}))}(d);e["default"]=c.a},f8fc:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return a}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handldCfy.apply(void 0,arguments)}}},[t._v("转录分类")]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handldGoods.apply(void 0,arguments)}}},[t._v("转录商品")])],1)},d=[]}}]);