<template>
  <div id="app">
  <keep-alive :max="3">
  	<!--最多缓存3个组件，之前的会被销毁-->
    <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
    </router-view>
    <!--<router-view/>-->
	</keep-alive>
	
	<router-view v-if="!$route.meta.keepAlive">
	    <!-- 这里是不被缓存的视图组件，比如 page3 -->
	</router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
	@import "../static/css/public.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
