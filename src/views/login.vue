<template>
  <section class="login">
    <div class="content common-card">
      <ul class="form">
        <li class="item">
          <div class="title">用户名/邮箱:</div>
          <div class="input">
            <input type="text" v-model="formData.user">
          </div>
        </li>
        <li class="item">
          <div class="title">密码:</div>
          <div class="input">
            <input type="password" v-model="formData.password">
          </div>
        </li>
        <li class="item last-item">
          <button class="btn">注册</button>
          <button class="btn" :class="{loading: loading}" @click="submit">登录</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  // 表单数据
  interface IformData {
    user: string;      // 用户名或者邮箱
    password: string;    // 密码
  }

  @Component({})
  export default class Login extends Vue {
    // loading 状态
    public loading: boolean = true;
    // 表单数据
    public formData: IformData = {
      user: '',
      password: '',
    };

    // 登录
    public submit(): void {
      if (!this.formCheckNoEmpty(this.formData.user)) {
        return;
      }
      if (!this.formCheckNoEmpty(this.formData.password)) {
        return;
      }
      this.$http.login({
        id: this.formData.user,
        password: this.formData.password,
      }).then((value: void): void => {
        console.log(value);
      });
    }

    // 校验方法 不能为空
    private formCheckNoEmpty(val: string): boolean {
      if (val === '') {
        return false;
      }
      return true;
    }

  }
</script>

<style scoped>
  .login{
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
  }
  .content{
    width: 500px;
    padding: 50px;
    box-sizing: border-box;
  }
  .form{
    width: 100%;
  }
  .item{
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item+.item{
    margin-top: 10px;
  }
  .item.last-item{
    margin-top: 40px;
  }
  .title{
    flex-shrink: 0;
    min-width: 100px;
    text-align: right;
    font-size: 16px;
  }
  .input{
    flex-grow: 1;
    width: 100%;
    margin-left: 20px;
  }
  .input input{
    width: 100%;
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #CCC;
    font-size: 16px;
  }
  .item.last-item{
    justify-content: space-between;
  }
  .btn{
    color: #888;
    font-size: 16px;
    transition: color 0.4s;
    margin-left: 50px;
    margin-right: 50px;
  }
  .btn:hover{
    color: #555;
  }
</style>