<template>
  <div class="key-container">
    <div class="keyboard" @click.stop="handleKeyPress">
      <div class="key-row">
        <div class="key-cell" data-num="7">7</div>
        <div class="key-cell" data-num="8">8</div>
        <div class="key-cell" data-num="9">9</div>
        <div class="key-cell" data-num=""></div>
      </div>
      <div class="key-row">
        <div class="key-cell" data-num="4">4</div>
        <div class="key-cell" data-num="5">5</div>
        <div class="key-cell" data-num="6">6</div>
        <div class="key-cell" data-num=""></div>
      </div>
      <div class="key-row">
        <div class="key-cell" data-num="1">1</div>
        <div class="key-cell" data-num="2">2</div>
        <div class="key-cell" data-num="3">3</div>
        <div class="key-cell" data-num=""></div>
      </div>
      <div class="key-row">
        <div class="key-cell" data-num=".">.</div>
        <div class="key-cell" data-num="0">0</div>
        <div class="key-cell" data-num="D">删除</div>
        <div class="key-cell" data-num=""></div>
      </div>
      <div class="key-clear" data-num="C">清空</div>
      <div class="key-confirm" data-num="S">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: '',
    };
  },
  props: ['fatherNum'],
  mounted() {
    console.log('父组件传过来的', this.fatherNum);
    this.num = this.fatherNum;  // 父组件通过props传过来的值，这个值是父组件中 点击了的那个 使用了数字键盘的 那个输入框绑定了的值，因为存在输入框输入了值后还要在原来的基础上加或减数字的情况
  },
  methods: {
    
    handleKeyPress(e) {// 处理按键
      const num = e.target.dataset.num; // 点击的那个键盘代表值，即上面data-num嵌入的自定义数据，D：删除，C：清空，S：确认，‘’：无效，0-9：数字
      // 不同按键处理逻辑
      // '' 代表无效按键，直接返回
      if (num === '') return false;
      switch (String(num)) {
        // 删除键
        case 'D':
          this.handleDeleteKey();
          break;
        // 清空键
        case 'C':
          this.handleClearKey();
          break;
        // 确认键
        case 'S':
          this.handleConfirmKey();
          break;
        default:
          this.handleNumberKey(num);
          break;
      }
    },
    handleDeleteKey() {// 处理删除键
      const S = this.num; // 因为上面mounted()函数赋值，这个值已经是父组件点击的那个输入框的值了，当点击了数字键盘上的数字后，它也会发生变化的
      // 如果没有输入（或者长度为0），直接返回
      if (!S.length) return false;
      // 否则删除最后一个
      this.num = S.substring(0, S.length - 1);
      console.log('删除：', this.num);
      this.$emit('deleteEvent', this.num); // 把删除处理后了的值返回给父组件
    },
    handleClearKey() {// 处理清空键
      this.num = ''; // 管它三七二十一，清空就赋值一个‘’，然后返回给父组件
      this.$emit('clearEvent', this.num);
    },
    handleNumberKey(num) {// 处理数字
      const S = this.num; // 拿到父组件点击的那个输入框的值
      this.num = S + num; // 在原有的基础上将点击的那个数字按键的数字加在原有数字字符串末尾，这里应该用模板字符串的，这里写笔记才看到，this.num = `${S}${num}`;  // 这里赋值是为了配合上面删除时使用
      this.$emit('numberEvent', num); // 注意传的是点击的那个数字字符串，不是处理后的整个数字字符串
    },
    handleConfirmKey() {// 确认键
      const S = this.num;
      console.log('点击确认键：', S);
      this.$emit('confirmEvent', S);
    },
  },
};
</script>

<style lang="scss" scoped>
	.key-container {
		position: fixed;
		margin-top: 50px;
		width: 100%;
		display: flex;
		z-index: 999;
		display: -webkit-flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		.keyboard {
			position: fixed;
			bottom: 0;
			left: 0;
			height: 240px;
			width: 100%;
			background-color: #fff;
			.key-row {
				display: flex;
				display: -webkit-flex;
				position: relative;
				height: 60px;
				line-height: 60px;
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					height: 1px;
					border-top: 1px solid #d5d5d6;
					color: #d5d5d6;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
				}
			}
			.key-cell {
				flex: 1;
				-webkit-box-flex: 1;
				text-align: center;
				position: relative;
				&::after {
					content: "";
					position: absolute;
					overflow: hidden;
					top: 0;
					right: 0;
					bottom: 0;
					height: 200%;
					border-right: 1px solid #d5d5d6;
					color: #d5d5d6;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
				}
				&:nth-last-child(1)::after {
					border-right: 0;
				}
			}
			.disabled {
				background: rgba(0, 0, 0, 0.2);
			}
			.key-confirm {
				position: absolute;
				text-align: center;
				height: 118px;
				width: 25%;
				line-height: 118px;
				background: #1989fa;
				z-index: 5;
				right: 0;
				bottom: 1px;
			}
			.key-clear {
				position: absolute;
				text-align: center;
				height: 118px;
				width: 25%;
				line-height: 118px;
				background: #ebedf0;
				z-index: 5;
				right: 0;
				top: 1px;
			}
		}
	}
</style>