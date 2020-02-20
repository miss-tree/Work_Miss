<template>
	<div>
		<div class="padding-lr">
			<div class="vant_upload_div">
				<div class="vant_upload_img_div">
					<div class="van-lookView">
						<div class="van-uploader__wrapper" v-for="(item,index) in images">
							<div class="van-uploader__preview" @click="changeShow(index)">
								<div class="van-image van-uploader__preview-image">
									<img :src="item" style="object-fit: cover;">
								</div>
							</div>
						</div>
						<van-image-preview 
							v-model="show" 
							:images="images" 
							:startPosition="index"
							 @change="onChange">
						</van-image-preview>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				index: 1,
				fileList: [] //vant =>upload
			};
		},
		props: ["images"],
		methods: {
			changeShow(index) {
				this.show = true
				this.index = index
			},
			onChange(index) {
				this.index = index;
			},
		}
	};
</script>

<style>
	.van-lookView {
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	.van-image img {
		width: 100%;
		height: 100%;
	}
	img {
	   width: 100%;
	   height: auto;
	}
</style>