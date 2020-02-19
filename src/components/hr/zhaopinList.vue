<template>
  <div class="about">
    <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>		    
		   <h1 class="mui-title">招聘记录</h1>
		</header>
		<div class="mui-content">
			<div class="margin-bot">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell mui-media">
						筛选
					</li>
				</ul>
			</div>
			<div>
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell mui-media">
						<router-link class="mui-navigate-right" to='/mianshiList'>
							<div class="mui-media-body font15px">
								地区：广州
							</div>
							<div class="mui-media-body font15px">
								部门：电商部
							</div>
							<div class="mui-media-body font15px">
								职位：服务专员
							</div>
						</router-link>
					</li>
					<li class="mui-table-view-cell mui-media">
						<a class='mui-navigate-right' href="javascript:;">
							<div class="mui-media-body">
								远眺
								<p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
							</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media">
						<a class="mui-navigate-right">
							<div class="mui-media-body">
								幸福
								<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
  </div>
</template>
