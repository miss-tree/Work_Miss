<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title"><!--<img src="../assets/logo.png" class="logo"/>-->图片查看</h1>
		</header>
		<div class="mui-content">
			<ul>
				<li v-for="(item,index) in images" @click="changeShow(index)"><img :src="item"/></li>
			</ul>
			<van-image-preview
			  v-model="show"
			  :images="images"
			  :startPosition="index"
			  @change="onChange"
			>
			</van-image-preview>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				index: 1,
				images: ['../../../static/assets/pic-98465.jpg',
					'../../../static/assets/swiper-2.jpg',
				'https://t11.baidu.com/it/u=2704125058,115212440&fm=76',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565014031759&di=fb17bd3959c0d405aea686a40508489e&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150121%2Fmp702672_1421821982915_3.jpeg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565014072267&di=f7e0a4be7a1da215044de520addd9f97&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa5c27d1ed21b0ef4a1b6b7eaddc451da81cb3e23.jpg',]
			};
		},
		mounted() {},
		methods: {
			changeShow(index){
				this.show=true
				this.index=index
			},
			onChange(index) {
				this.index = index;
			},
		}
	}
</script>

<style>
	.img_col4{
		width: 25%;
		display: inline-block;
	}
	img {
   width: 100%;
   height: auto;
}
</style>