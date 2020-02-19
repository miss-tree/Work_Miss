<template>
  <div>
      <div class="padding-lr">
        <div class="vant_upload_div">
          <div class="vant_upload_img_div">
            <van-uploader v-model="fileList" accept="*" :after-read="afterRead" multiple :delete="deletIMG()"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [] //vant =>upload
    };
  },
  mounted() {
  },
  methods: {
  	afterRead(file) {
  		console.log(file);
      // 此时可以自行将文件上传至服务器
//    let content = file.file;
//      let data = new FormData();
//      data.append('img',content);
//      this.axios.post('图片上传地址',data)
//      .then((res) => {
//          let datas = res.data.datas.path;
//          this.msg.hallImg.push(`api地址${datas}`);
//      })
    },
    deletIMG() {//vant删除
//    console.log("hi");
    },
  }
};
</script>

<style>
.text-justify {
  float: left;
  text-align: justify;
  text-justify: inter-word;
  text-justify: inter-ideograph;
  width: 25%;
  height: 20px;
}

.span-justify {
  display: inline-block;
  width: 100%;
}

.detail-img {
  margin: 10px 15px;
  height: 220px;
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.detail-img > img {
  width: 100%;
  height: auto;
}

.z_photo {
  width: 100%;
  height: 120px;
  overflow: scroll;
  white-space: nowrap;
  clear: both;
  padding: 10px 10px;
}

.z_addImg {
  float: left;
  margin-right: 0.2rem;
}

.percent {
  color: green;
}

.error {
  color: red;
}

.uploader-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.file-item {
  width: 48px;
  height: 48px;
  overflow: hidden;
  position: relative;
  margin-left: 15px;
}

.file-item > img {
  width: 100%;
  height: 100%;
}

.percent,
.error {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  width: 100%;
  text-align: center;
  background: rgba(95, 158, 160, 0.5);
}

.vant_upload_div {
  width: 100%;
  border: 1px #ddd solid;
  background: #fff;
  border-radius: 5px;
}
.vant_upload_img_div {
  width: 100%;
  min-height: 120px;
  white-space: nowrap;
  clear: both;
  padding: 10px 10px;
}
</style>