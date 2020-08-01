<template>
    <div>
        <van-dropdown-menu class="menu" active-color="">
            <van-dropdown-item v-model="value" :options="option" title-class="menu-li" open="test" v-bind:class="{ active: isActive }"/>
        </van-dropdown-menu>
        <van-search
            class="search"
            placeholder="医生姓名"
            show-action
            shape="round"
            @search="onSearch"
            background="#ebebeb"
        >
            <div slot="action" @click="onSearch" class="search-btn">搜索</div>
        </van-search>
        <div>
            <van-cell class="select-appoint" v-on:click="adult">
                <template slot="icon">
                    <img width="20" height="20" src="http://www.benewit.cn/picProject/dept/20007.png">
                </template>
                <template slot="title">
                    <div class="custom-text">口腔科(珠)</div>
                </template>
            </van-cell>
            <van-cell class="select-appoint" is-link>
                <template slot="icon">
                    <img width="20" height="20" src="https://ihis.gzfezx.com/fyfwh-web/public/image/registration/icon_17.png">
                </template>
                <template slot="title">
                    <div class="custom-text">口腔内科(珠)</div>
                </template>
            </van-cell>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      switch1: false,
      switch2: true,
      option: [
        { text: '儿童医院院区(人民中路318号)', value: 0 },
        { text: '珠江新城院区(金穗路9号)', value: 1 },
        { text: '妇婴医院院区(人民中路428号)', value: 2 }
      ],
      data: {
        isActive: true,
        hasError: false
      }
    }
  },

  methods: {
    onConfirm () {
      this.$refs.item.toggle()
    },
    onSearch () {
    //   this.$toast('提示文案')
    },
    adult: function (event) {
      this.$router.push({
        path: 'registration'
      })
      console.log(event.type)
    }
  }
}
</script>

<style>
.menu
{
    background: #026dbb;
    color: #fff;
}
.menu .van-dropdown-menu__title
{
    position: absolute;
    left: 3%;
    width: 95%;
}
.menu .van-dropdown-menu__title::after
{
    width: 40px;
    height: 40px;
    background-image: url(https://ihis.gzfezx.com/fyfwh-web/public/image/new/icon_4.png);
    top: -0.5rem;
    right: -0.5%;
    border:0;
    opacity:1;
    transform: rotate(0deg);
}
.menu .van-dropdown-menu__title--down::after
{
    transform: rotate(180deg);
}
.menu .van-dropdown-menu__title--down
{
  color: #fff;
}
.search {
  padding: 5px 10px;
}
.search .search-btn
{
  background:#026dbb;
  color:#fff;
  padding:0px 15px;
  border-radius: 5px;
}
.search .van-search__content
{
  border-radius: 5px;
}
.search .van-search__action
{
  padding: 0 0px 0px 10px;
}
.search .van-cell
{
  border: 0px;
}
.select-appoint
{
  border-bottom: 1px solid #ddd;
  height: 45px;
  padding: 10px;
}
.select-appoint img
{
  padding: 3px 3px;
}
</style>
