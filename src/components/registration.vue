<template>
  <div>
    <div class="regist">
      <ul class="regist-nav">
        <li v-for="(registDate, index) in registDates" :key="index"
          v-bind:class="{

           hidden: index > 4 ? moreListHidden : false
           , add: index == 4 ? true : false
           }">
          <div v-if="index == 4">
            <div v-on:click="addMore">更多</div>
            <div>
              <van-icon name="arrow-down" />
            </div>
          </div>
          <div v-else @click="selectDate(index)" v-bind:class="{
            active: (currentIndex === -1) ? registDate.isActive : currentIndex === index
          } " class="cricle">
            <div>{{ registDate.time }}</div>
            <div>{{ registDate.week }}</div>
          </div>
        </li>
        <li></li>
      </ul>
    </div>
    <div>
      <van-row class="doctor-list">
        <van-col span="8">
          <img src="../assets/icon_15.png" width="80" height=""/>
        </van-col>
        <van-col span="16">
          <div class="title">毛巾</div>
          <div class="sub-title">口腔颌面外科主治</div>
          <div class="sub-title">主治医师 中山大学光华口腔医学院研究生毕业，获得医学硕士学位。专业特长：擅长口腔颌面外科...</div>
        </van-col>
        <van-col span="24" class="doctor-list-status color-gray">
          <div>2019-06-29 星期六 上午班 (已挂满)</div>
        </van-col>
      </van-row>
      <van-row class="doctor-list">
        <van-col span="8">
          <img src="../assets/icon_15.png" width="80" height=""/>
        </van-col>
        <van-col span="16">
          <div class="title">毛巾</div>
          <div class="sub-title">口腔颌面外科主治</div>
          <div class="sub-title">主治医师 中山大学光华口腔医学院研究生毕业，获得医学硕士学位。专业特长：擅长口腔颌面外科...</div>
        </van-col>
        <van-col span="24" class="doctor-list-status"  @click="selectRegistDate()">
          <router-link to="selectRegistDate">2019-06-29 星期六 上午班 余号：10</router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registration',
  data () {
    return {
      isActive: false,
      moreListHidden: true,
      currentIndex: -1,
      registDates: [
        {
          time: '06/12',
          week: '周六'
        },
        {
          time: '06/12',
          week: '周六',
          isActive: 1
        },
        {
          time: '06/12',
          week: '周六'
        },
        {
          time: '06/12',
          week: '周六'
        },
        {
          time: '06/12',
          week: '周六'
        },
        {
          time: '06/12',
          week: '周六'
        },
        {
          time: '06/12',
          week: '周六'
        },
        {
          time: '06/12',
          week: '周六'
        },
        {
          time: '06/12',
          week: '周六'
        }
      ]
    }
  },
  methods: {
    addMore () {
      if (!this.moreListHidden) {
        this.moreListHidden = true
      } else {
        this.moreListHidden = false
      }
    },
    selectDate (index) {
      this.currentIndex = index
      console.log(this.currentIndex)
    },
    selectRegistDate () {
      this.$router.push({ path: '/#/selectRegistDate' })
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.regist {
  border-bottom: #cccccc solid 1px;
  .regist-nav {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 6px 5px;
    font-size: 14px;
    background: #f1f3f2;
    li {
      width: 20%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      align-content: center;
      text-align: center;
      margin: 0 auto;
      .cricle {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        align-content: center;
        text-align: center;
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
      }
    }
    .active {
      color: #fff;
      background: #026dbb;
    }
    .add {
      text-align: center;
      font-size: 12px;
      color: #9e9e9e;
      cursor: pointer;
    }
    li[class=hidden] {
      display: none;
    }
    li[class=show] {
      display: flex;
    }
  }
}
.doctor-list {
  padding: 18.8px 12.5px;
  border-bottom: 1px solid #ddd;
  font-size: 15px;
  background: #fff;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .sub-title {
    color: #666666;
  }
  img {
    padding: 0px 16px 0px 8px;
  }
  .doctor-list-status {
    border-top: 1px dashed #ddd;
    border-bottom: 1px solid #ddd;
    padding: 10px 15px;
    margin: 10px 0px;
  }
  .color-gray {
    color: #9c9c9c;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
