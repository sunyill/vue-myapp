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
          v-model="user.mobile"
          placeholder="请输入手机号"
        >
         <van-icon class-prefix="my-icon" slot="left-icon" name="shouji" color="#58bd6a"  size="16px" />
        </van-field>
        <van-field
          v-model="user.code"
          placeholder="请输入验证码"
          clearable
          left-icon="music-o"
        >
        <van-icon class-prefix="my-icon" slot="left-icon" name="icon_verification" color="#58bd6a"  size="16px" />
        <van-button round type="primary" slot="right-icon" size="mini" hairline>获取验证码</van-button>
        </van-field>
      </van-cell-group>
      <div class="login_btn">
        <van-button round type="primary"  size="normal" @click="handleLogin">登录</van-button>
        <div class="login_issue">
          <label for="">账号密码登录</label>
          <font style="color:#697486" >|</font>
          <label for="">登录遇到问题</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { login } from '@/Api/login'
export default {
  data () {
    return {
      user: {
        mobile: '13811111111',
        code: '246810'
      }

    }
  },
  methods: {
    async handleLogin () {
      try {
        const res = await login({
          mobile: '13811111111',
          code: '246810'
        })
        console.log('res', res)
      } catch (error) {
        console.log(error)
      }
    }
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
    .van-field{
      padding-left: 25px;
    }
  }
}
.login_btn{
  padding: 0 30px;
  .van-button{
    width: 100%;
    margin: 30px auto 20px;
  }
  .login_issue{
    width: 100%;
    display: flex;
    justify-content: center;
    label{
      width: 50%;
      padding: 0 15px;
      color: #697486;
      text-align: center;
      display: inline-block;
    }
  }
}
</style>
