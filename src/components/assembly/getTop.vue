<template>
	<div>
		<div class="toTop" v-show="scrollTop>=150" @click="getToTop">
    		<span class="iconfont icon-huidaodingbu"></span>
    	</div>
	</div>
</template>

<!--回到顶部组件，外部不需要传值-->
<script>
	export default{
		data(){
			return{
				scrollTop:0,//滚动条的高度
			}
		},
		mounted(){
			window.addEventListener('scroll', this.getScrollTop)
		},
		methods:{
		    getToTop(){//回到顶部
		    	const that = this
		      let timer = setInterval(() => {
		        let ispeed = Math.floor(-that.scrollTop / 5)
		        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
		        if (that.scrollTop === 0) {
		          clearInterval(timer)
		        }
		      }, 50)
		    },
		    getScrollTop(){//获取滚动高度
		      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		    }
		}
	}
</script>
