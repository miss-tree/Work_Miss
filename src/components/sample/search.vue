<template>
                <div class="m-hmsrch">
                    <form class="m-input f-bd f-bd-btm" method="get" action="#">
                        <div class="inputcover">
                            <i class="u-svg u-svg-srch"></i>
                            <input type="search" name="search" class="input" 
                            placeholder="搜索歌曲、歌手、专辑" 
                            v-model="putValue" 
                            @keyup.enter="sure()"
                            >
                            <figure class="close">
                                <i class="u-svg u-svg-empty" :class="{zshow:putValue.length}" @click="clear()"></i>
                            </figure>
                        </div>
                    </form>
                    <div class="m-default" >
                        <section class="m-hotlist" :class="{playNone:putValue.length}">
                            <h3 class="title">热门搜索</h3>
                            <ul class="list">
                                <li class="item f-bd f-bd-full"
                                 v-for="(item,index) in hotSearch" :key="index"
                                  @click="jump(index,id)">
                                    <a class="link">{{item.first}}</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <section :class="{playNone:!putValue}" class="mrecom">
                        <h3 class="title f-bd f-bd-btm f-thide">搜索“{{putValue}}”</h3>
                        <ul v-for=" item in ssList" :key="item.index">
                            <li class="recomitem">
                                <i class="u-svg u-svg-search"></i>
                                <span class="f-bd f-bd-btm f-thide">{{item.name}}</span>
                            </li>
                        </ul>
                    </section> 
                    <section class="m-history" :class="{playNone:hisList}">
                        <ul class="list" >
                            <li class="item" v-for="item in hisList">
                                <i class="u-svg u-svg-histy"></i>
                                <div class="histyr f-bd f-bd-btm" @click="search-song">
                                    <span class="link f-thide">{{item}}</span>
                                    <figure class="close"><i class="u-svg u-svg-close"></i></figure>
                                </div>
                            </li>
                        </ul>
                    </section>  
                </div>
</template>

<script>
export default {
  data() {
    return {
		ssList:"",
      hotSearch:['北京','北海','东北','上海','武汉','东京','广州','广元市','上饶','上水市'],
      putValue: "",
      hisList:[]
    };
  },
  methods: {
    clear() {
        this.putValue=""
    },
    filterPutValue(){
        axios.get(api.ssList+this.putValue)
            .then(res=>{
                this.ssList = res.data.result.songs;
                this.artists = res.data.result.artists;
                this.playlists = res.data.result.playlists;
                   console.log(this.ssList)
            })    
            .catch(e=>{
                    console.log(e)
            })         
    },
    sure(){
        hisList:[];
        hisList.unShift(this.putValue)
        localStorage.setItem("hisList",JSON.stringify(this.hisList))
    }          
  }
};
</script>

<style>
.playNone{
    display: none
}
</style>