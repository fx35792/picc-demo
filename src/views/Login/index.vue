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
      <van-field v-model="userName" left-icon="user-o" name="用户名" label="用户名" placeholder="用户名" />
      <!-- :rules="[{ required: true, message: '请填写用户名' }]" -->
      <van-field
        v-model="password"
        left-icon="eye-o"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <!-- :rules="[{ required: true, message: '请填写密码' }]" -->
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