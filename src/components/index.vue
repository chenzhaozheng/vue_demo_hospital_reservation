<template>
  <div>
    <van-row id="nav" gutter="5" type="flex" justify="center" align="center">
      <van-col span="8">
        <van-image
          v-on:click="adult"
          type = 1
          src="https://ihis.gzfezx.com/fyfwh-web/public/image/s_female.png"
        />
        <div>成人</div>
      </van-col>
      <van-col span="8">
        <van-image
          v-on:click="adult"
          type = 2
          src="https://ihis.gzfezx.com/fyfwh-web/public/image/s_child.png"
        />
        <div>成人</div>
      </van-col>
      <van-col span="8">
        <van-image
          v-on:click="adult"
          type = 3
          src="https://ihis.gzfezx.com/fyfwh-web/public/image/s_recommend.png"
        />
        <div>成人</div>
      </van-col>
    </van-row>
    <div id="intro">
      <span style="float:none; line-height:25px;">分诊指引：<br>
        <ol type="number" style="margin-top:0px;">
          <li><span style="color:red; ">预约挂号放号时间：提前七天晚上20:00进行放号</span></li>
          <li>一个院区没号，请查看其他两个院区是否有号，本中心分三个院区，医生在三个院区互相轮转出诊，看诊水平是一致；</li>
          <li>出生28天内挂新生儿科；</li>
          <li>儿童上呼吸道感染（感冒、发热等）挂普通儿内科门诊（门诊内科）；</li>
          <li>包皮过长、小儿疝气（小肠气）挂儿童外科；</li>
          <li>怀孕12周以内挂妇科或早孕门诊，怀孕12周以上挂产科门诊；</li>
          <li>人工流产、引产（要有证明）、上环、取环、输卵管造影等挂计划生育妇科；月经不调、不孕症、更年期健康管理等挂妇科内分泌门诊。</li>
          <li>优生优育咨询、遗传咨询、孕妇唐氏筛查高风险、免费出生缺陷服务挂产前诊断科；</li>
          <li>人工受精、做试管婴儿、不孕不育症挂生殖中心；</li>
          <li>输精管复通、结扎术；男性不育症；性功能障碍；性病，请挂妇婴成人男科门诊。</li>
          <li>根据穗发改规字〔2018〕6号文的通知，我院将于2018年5月1日零时开始执行六岁（含）以下儿童基本医疗服务项目价格调价政策，调价项目详见院内滚动屏，感谢您的理解与配合</li>
          <li>根据穗发改规字〔2018〕15号的通知，我院于2018年12月29日零时起全面取消医用耗材加成，并同步调整医疗服务价格，调价后项目价格详见院内滚动屏，感谢您的理解与配合！</li>
        </ol>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    adult: function (event) {
      this.$router.push({
        path: 'selectArea'
      })
      console.log(event.type)
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
#nav
{
  background: white;
  padding: 20px 10px 10px 10px;
  line-height:1rem;
  text-align: center;
  .van-image
  {
    width: 80px;
    height: 80px;
  }
}
#intro
{
  height: auto;
  color: #9C9C98;
  text-align: left;
  padding: 20px;
  background: #f1f3f2;
  font-size: 15px;
}
</style>

<style>
body
{
  background: #f1f3f2;
}
</style>
