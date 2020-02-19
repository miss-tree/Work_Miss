<template>
	<div>
		<div class="padding-lr">
			<div class="vant_upload_div">
				<div class="van-uploader__wrapper">
					<div class="vant_upload_img_div" style="display: flex;">
						<div class="van-uploader__preview" v-show="fileArr.length!=0"
							 v-for="(item,index) in fileArr" @click="downloadFile(item,index)"><!--@click="testMobileDownload()"-->
					  		<div class="van-image van-uploader__preview-image">
					  			<div class="van-image__error">
					  				<i class="van-icon van-icon-description van-uploader__file-icon" style=""></i>
					  				<div class="van-uploader__file-name van-ellipsis">{{item.name}}</div>
					  			</div>
					  		</div>
					  		<!--<i class="van-icon van-icon-delete van-uploader__preview-delete"></i>-->
					  	<!--<a :href="item.fileUrl"></a>-->
					  	</div>
					</div>
				</div>
			  	<span>非img/png文件,点击下载</span>
				<div class="vant_upload_img_div">
					<div class="van-lookView">
						<div class="van-uploader__wrapper" v-for="(item,index) in images">
							<div class="van-uploader__preview" @click="changeShow(index)">
								<div class="van-image van-uploader__preview-image">
									<img :src="item" style="object-fit: cover;">
								</div>
								<!--<i class="van-icon van-icon-delete van-uploader__preview-delete"></i>-->
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
		props: ["images","fileArr"],
		methods: {
			downloadFile(item,index){
				var myFrame= document.createElement("iframe"); 
				myFrame.src = item.fileUrl; 
				myFrame.style.display = "none"; 
				document.body.appendChild(myFrame);
			},
			testMobileDownload(){
//				方法一:
//				const a = document.createElement('a');
//			    a.href = "http://pic.sc.chinaz.com/Files/pic/pic9/201311/apic1847_s.jpg";
//			    a.download = 'gakki.jpg';
//			    a.click();
//				方法二:
//				location.href="https://pm.myapp.com/invc/xfspeed/qqpcmgr/download/PS_PCDownload1584.exe"
//				方法三:
				fetch('https://www.lilnong.top/static/pdf/%E6%89%AB%E6%8F%8F0015.pdf')
				    .then(v=>v.blob())
				    .then(v=>URL.createObjectURL(v))
				    .then(v=>(console.log(v),v))
				    .then(v=>{
				        let dom = document.createElement('a');
				        dom.href='https://www.lilnong.top/static/pdf/%E6%89%AB%E6%8F%8F0015.pdf';//v
				        dom.download='test'
				        dom.click();
				    })
			},
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