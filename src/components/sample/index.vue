<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">picker（选择器）</h1>
		</header>
	 <div class="mui-content-padded" style="margin-top: 50px;">
				<ul class="mui-pagination">
					<li class="mui-previous mui-disabled">
						<a href="#">
							&laquo;
						</a>
					</li>
					<li class="mui-active">
						<a href="#">
							1
						</a>
					</li>
					<li>
						<a href="#">
							2
						</a>
					</li>
					<li>
						<a href="#">
							3
						</a>
					</li>
					<li>
						<a href="#">
							4
						</a>
					</li>
					<li>
						<a href="#">
							5
						</a>
					</li>
					<li class="mui-next">
						<a href="#">
							&raquo;
						</a>
					</li>
				</ul>
			</div>
	</div>
</template>

<script>
	export default {
data() {
    return {
    	tableData:[{isCheck:'false',id:458876,title:"你好",type:"hello"},
    	{isCheck:'false',id:8446645,title:"很好",type:"good"},
    	{isCheck:'true',id:7854532,title:"今天天气怎样",type:"weather"}]
    };
},
    mounted(){
       		mui.init();
			(function($) {
				$('.mui-pagination').on('tap', 'a', function() {
					console.log('hi')
					var li = this.parentNode;
					var classList = li.classList;
					if (!classList.contains('mui-active') && !classList.contains('mui-disabled')) {
						var active = li.parentNode.querySelector('.mui-active');
						if (classList.contains('mui-previous')) {//previous
							if (active) {
								var previous = active.previousElementSibling;
								console.log('previous', previous);
								if (previous && !previous.classList.contains('mui-previous')) {
									$.trigger(previous.querySelector('a'), 'tap');
								} else {
									classList.add('mui-disabled');
								}
							}
						} else if (classList.contains('mui-next')) {//next
							if (active) {
								var next = active.nextElementSibling;
								if (next && !next.classList.contains('mui-next')) {
									$.trigger(next.querySelector('a'), 'tap');
								} else {
									classList.add('mui-disabled');
								}
							}
						} else {//page
							active.classList.remove('mui-active');
							classList.add('mui-active');
							var page = parseInt(this.innerText);
							var previousPageElement = li.parentNode.querySelector('.mui-previous');
							var nextPageElement = li.parentNode.querySelector('.mui-next');
							previousPageElement.classList.remove('mui-disabled');
							nextPageElement.classList.remove('mui-disabled');
							if (page <= 1) {
								previousPageElement.classList.add('mui-disabled');
							} else if (page >= 5) {
								nextPageElement.classList.add('mui-disabled');
							}
						}
					}
				});
			})(mui); 
       },
}
</script>