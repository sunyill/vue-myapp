<template>
  <div>
    <van-nav-bar title="标题">
      <template #left>
        <van-icon name="cross" size="18" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="con_phone">手机号快捷登录</div>
      <van-cell-group>
        <van-field
          v-model="value1"
          placeholder="请输入手机号"

          right-icon="warning-o"
        >
         <van-icon class-prefix="my-icon" slot="left-icon" name="shouji" color="#58bd6a"  size="16px" />
        </van-field>
        <van-field
          v-model="value2"
          placeholder="请输入验证码"
          clearable
          left-icon="music-o"
        >
        <van-icon class-prefix="my-icon" slot="left-icon" name="icon_verification" color="#58bd6a"  size="16px" />
        </van-field>
      </van-cell-group>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: ''
    }
  },
  methods: {
    getName () {}
  }
}
</script>

<style lang='scss' scoped>
.van-nav-bar {
  background: #fff;
  border: none;
  outline: none;
}
.content {
  margin-top: 60px;
  height: 700px;
  .con_phone {
    font-size: 20px;
    width: 150px;
    margin: 0 auto;
  }
  .van-cell-group{
    margin-top: 30px;
  }
}
</style>
