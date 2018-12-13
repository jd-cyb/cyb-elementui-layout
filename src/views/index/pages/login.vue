<template>
  <el-row>
    <el-col :xs="24" :sm="{span:16,offset:4}" :md="{span:12,offset:6}" :lg="{span:6,offset:9}">
      <div class="login">
        <el-row slot="body" :gutter="0">
          <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24">
            <div class="login-form">
              <h1>CYB-Element-template</h1>
              <div class="form-item">
                <el-input placeholder="请输入用户名" v-model="form.username">
                  <template slot="prepend"><i class="fa fa-user"></i></template>
                </el-input>
              </div>

              <div class="form-item">
                <el-input type="password" placeholder="请输入密码" v-model="form.password" @keyup.enter="login">
                  <template slot="prepend"><i class="fa fa-lock"></i></template>
                </el-input>
              </div>

              <div class="form-item">
                <el-button type="primary" class="btn btn-primary" @click="login">登录</el-button>
              </div>
            </div>
          </el-col>

        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import types from "../store/mutation-types";
  import auth from "../common/auth";
  import * as ServiceLogin from "../service/login";
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from "vuex";

  export default {
    name: "login",
    data() {
      return {
        form: {
          username: "",
          password: ""
        }
      };
    },
    methods: {
      ...mapActions({
        loadMenuList: "loadMenuList" // 映射 this.load() 为 this.$store.dispatch('loadMenuList')
      }),
      login() {
        let redirectUrl = "/index";
        if (
          this.$route.query &&
          this.$route.query != null &&
          this.$route.query.redirect &&
          this.$route.query.redirect != null
        ) {
          redirectUrl = this.$route.query.redirect;
        }
        /**
         * 验证登录
         */
        ServiceLogin.login(this.form)
          .then(res => {
            redirectUrl && this.$router.push({
              path: redirectUrl
            });
            this.loadMenuList();
          });
      }
    }
  };

</script>

<style lang="less">
  .login {
    margin: 50px 15px;

    h1 {
      text-align: center;
    }
  }

  .form-item {
    margin: 15px 0;

    .btn {
      width: 100%;
    }
  }

</style>
