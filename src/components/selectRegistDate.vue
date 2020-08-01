<template>
  <div>
    <van-row class="regist-info">
      <van-col span="8">
        <img src="../assets/icon_15.png" width="80" height=""/>
      </van-col>
      <van-col span="16">
        <div class="title">龙宝军</div>
        <div>科室：口腔正畸科（儿）</div>
        <div>职称：副主任医师</div>
      </van-col>
    </van-row>
    <div class="regist-tab">
      <van-tabs type="card">
        <van-tab title="预约挂号">
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="2019-07-23 星期二 (余号：1)" name="1">
              <div class="time-num-select">
                <div>15:30 17:30</div>
                <div>宇浩：1个</div>
              </div>
            </van-collapse-item>
            <van-collapse-item title="2019-07-23 星期二 (余号：1)" name="2">内容</van-collapse-item>
            <van-collapse-item title="2019-07-23 星期二 (余号：1)" name="3">内容</van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab title="医生介绍" class="intro">
          <div class="title">擅长</div>
          <div class="detail">
            皮肤病专业博士，从事医疗临床工作20余年，对小儿过敏性皮肤病、感染性皮肤病及血管瘤、皮肤色素性疾病的诊治具有丰富的临床经验。
            擅长湿疹、荨麻疹、白癜风、斑秃的诊治及各种皮肤病的激光治疗。
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectArea',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeName: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.regist-info {
  background: #fff;
  padding: 18.4px 19.6px;
}
.regist-tab {
  .time-num-select{
    width:100px;
    height:40px;
    color: #fff;
    background: #026dbb;
    text-align: center;
    border-radius: 4px;
  }
}
.intro {
  padding: 8px 20px 7px 20px;
  .title {
    margin: 15px 0px;
    color: #026dbb;
    font-size: 15px;
    font-weight: bold;
  }
  .detail {
    border-left: 8px solid rgba(2,109,187, 0.1);
    padding-left: 15px;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    margin: 0;
    color: #777;
  }
}
</style>

<style>
body
{
  background: #fff;
}
.regist-tab .van-tabs__nav--card {
  height: 40px;
  margin: 0px;
  border: 0px solid;
}
.regist-tab .van-tabs__nav--card .van-tab {
  height: 40px;
  line-height: 40px;
  background: #f1f3f2;
  color: #4a463d;
  border: 0px solid;
}
.regist-tab .van-tabs__nav--card .van-tab--active {
  background-color: #026dbb;
  color: #fff;
}
.regist-tab .van-tabs--card{
  padding-top: 40px;
}
.regist-tab .van-tabs--card>.van-tabs__wrap {
  height: 40px;
}
</style>
