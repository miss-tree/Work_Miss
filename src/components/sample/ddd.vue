<template>
	<div class="page">
		<!--<div class="content">
			<div class="unit-title">使用动态数据示例</div>
			<div class="unit-wrapper">
				<div class="unit-item">
					<div class="unit-item__label">名称：</div>
					<input-autocomplete
						class="unit-item__input"
						:value="testObj.dname"
						v-model="testObj.dname"
						placeholder="请输入报价单名称"
						highlightColor="#FF0000"
						:loadData="loadAutocompleteData"
						v-on:selectItem="selectItemD"
					></input-autocomplete>
				</div>
			</div>
			<div class="unit-title">使用静态数据示例</div>
			<div class="unit-wrapper">
				<div class="unit-item">
					<div class="unit-item__label">名称：</div>
					<input-autocomplete
						class="unit-item__input"
						:value="testObj.sname"
						v-model="testObj.sname"
						placeholder="请输入报价单名称"
						highlightColor="#FF0000"
						:stringList="autocompleteStringList"
						v-on:selectItem="selectItemS"
					></input-autocomplete>
				</div>
			</div>
			<button @tap="printLog">打印结果</button>
		</div>-->
	</div>
</template>

<script>
import inputAutocomplete from './input-autocompleta.vue';
export default {
	components: {
		inputAutocomplete
	},
	data() {
		return {
			testObj: {
				sname: '静态',
				dname: '动态'
			},
			uni:'',
			//使用静态数据
			autocompleteStringList: [
				'汉字行',
				'guang zhou',
				{
					//自定义数据对象必须要有text属性
					text: 'hello',
					//其它字段根据业务需要添加
					key: 'hello key'
				},
				'不 行',
				{
					//自定义数据对象必须要有text属性
					text: '我是静态数据',
					//其它字段根据业务需要添加
					id: 'hz'
				}
			]
		};
	},
	methods: {
		loadAutocompleteData(value) {
			console.log('每次输入经过防抖处理以后都会进到这里。');

			// 正确的做法：在这个方法内写完所有取数据的逻辑
			let url = 'https://www.apiopen.top/journalismApi';
			return  this.uni
				.request({
					url: url
				})
				.then(ret => {
					var [error, res] = ret;
					console.log(res.data);
					let data = ((res.data || {}).data || {}).toutiao || [];
					if (data.length <= 0) {
						return Promise.resolve(['没有数据...']);
					}

					let retData = [];
					for (let it of data) {
						// console.log(it);
						retData.push({
							//自定义数据对象必须要有text属性
							text: it.title,
							//其它字段根据业务需要添加
							digest: it.digest
						});
					}
					//console.log(Promise.resolve(retData));
					return Promise.resolve(retData);
				});

			//return Promise.resolve(['汉字行', 'da tang', '三人行', '大马路', '8哥', '我是动态数据']);
		},
		//响应选择事件，接收选中的数据
		selectItemD(data) {
			//选择事件
			console.log('收到数据了:', data);
		},
		selectItemS(data) {
			//选择事件
			console.log('收到数据了:', data);
		},
		printLog(){
			console.log(this.testObj);
		}
	},

	onLoad: function(option) {
		let that = this;
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 100%;
}

.unit-title {
	font-size: 30upx;
	/* font-style: oblique; */
	color: #fff;
	padding: 16upx 26upx 50upx 26upx;
	padding-bottom: 10upx;
	text-align: left;
}

.unit-wrapper {
	padding: 44upx 0;
	margin: 0 30upx;
	border-radius: 32upx;
	margin-bottom: 20upx;
	background-color: #fff;
	color: #000;
}

.unit-item {
	display: flex;
	justify-content: flex-end;
	padding-right: 30upx;
	padding-left: 30upx;
	margin-bottom: 30upx;
}

.unit-item__header {
	margin-top: 0;
	margin-bottom: 8upx;
	padding: 0upx 8upx;
	display: flex;
	justify-content: space-between;
}

.unit-item__label {
	padding-top: 2px;
	text-align: right;
	font-size: 28upx;
	margin: 8upx 0 4upx 16upx;
	min-width: 188upx;
	width: 240upx;
}

.unit-item__input {
	text-align: left;
	width: 100%;
	font-size: 28upx;
	margin: 4upx 16upx 0 4upx;
	border: 2upx solid #eaeaea;
	border-radius: 12upx;
	min-height: 52.5upx;
	line-height: 52.5upx;
}
</style>
