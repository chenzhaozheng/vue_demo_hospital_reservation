<template>
  <div>
    <van-cell class="select-area" is-link url="/#/appointment">
      <template slot="icon">
        <img src="https://ihis.gzfezx.com/fyfwh-web/public/image/icon_20.png">
      </template>
      <template slot="title">
        <div class="custom-text">儿童医院院区(人民中路318号)</div>
      </template>
    </van-cell>
    <van-cell class="select-area" is-link>
     <template slot="icon">
        <img src="https://ihis.gzfezx.com/fyfwh-web/public/image/icon_20.png">
      </template>
      <template slot="title">
        <div class="custom-text">儿童医院院区(人民中路318号)</div>
      </template>
    </van-cell>
    <div id="intro">
      <span style="float:none; line-height:25px;">温馨提示：<br>
      1、预约挂号需要绑定个人实名信息、医院诊疗卡；<br>
      2、预约当天需提前15分钟到相应科室护士站报到候诊，<span style="color:red">否则信息系统将自动取消预约，并记爽约一次</span><br>
      3、如需取消预约挂号，请到“门诊”“门诊服务”“挂号记录”，选择对应挂号信息，查看详情内“取消订单”；<br>
      4、预约挂号当天病人取消预约并退费，只能在<span style="color:red">就诊时间段之前</span>到人工窗口进行退费，并当作一次爽约；<br>
            5、病人预约爽约超过三次，三个月内不能预约或者挂号。
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectArea',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped  type="text/css">
.select-area:not(:last-child)::after {
  border-bottom: .5px solid #ddd;
  left: 0px;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.custom-text {
  width: 230px;
  padding-left: 5px;
  font-size: 17px;
}
#intro
{
  height: auto;
  color: #9C9C98;
  text-align: left;
  padding: 20px;
  font-size:15px;
  background: #f1f3f2;
}
</style>
