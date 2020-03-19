<template>
  <div>
    <van-nav-bar
      title="登录页面"
      left-text="返回"
      left-arrow
      bind:click-left="onClickLeft"
      bind:click-right="onClickRight"
    />
    <van-form>
      <!-- 第一种方式：通过 van-icon 的 name和classs-prefix属性  这个地方借助的是iconfont.css文件 -->
      <van-field v-model="userName" left-icon="user-o" name="用户名" label="用户名" placeholder="用户名">
        <van-icon slot="left-icon" name="user" class-prefix="iconfont"></van-icon>
      </van-field>
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码">
        <van-icon slot="left-icon" name="password" class-prefix="iconfont"></van-icon>
      </van-field>
      <!-- 第一种方式：通过 van-icon 嵌套svg 这个地方借助的是iconfont.js和iconfont.svg文件 -->
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码">
        <van-icon slot="left-icon">
          <svg class="icon icon1" aria-hidden="true">
            <use xlink:href="#iconfont-password" />
          </svg>
        </van-icon>
      </van-field>
      <!-- 第三种方式：通过 img 设计图片 -->
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码">
        <img
          slot="left-icon"
          width="15"
          height="15"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584607677636&di=e538499fa82e9b5d539f6b0118054588&imgtype=0&src=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_550783.png"
          alt
        />
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" @click="handleSubmit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      if (this.userName === "") {
        this.$toast("用户名不能为空");
        return false;
      }
      if (this.password === "") {
        this.$toast("密码不能为空");
        return false;
      }
    }
  }
};
</script>
<style lang="css" scoped>
.icon1 {
  fill: blue;
}
</style>