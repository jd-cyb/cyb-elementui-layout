<template>
  <div class="error-page">
    <div class="errorWarp">
      <h2 class="title">404</h2>
      <h3 class="desc">{{routerPath}} 页面未找到</h3>
      <h4>请在views/router/routes.js文件中配置路由组件</h4>
      <router-link to="/" class="backBtn" tag="span">返回首页</router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        routerPath: ''
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.routerPath = to.path
      })
    },
    watch: {
      '$route': function (to, from) {
        this.routerPath = to.path
      }
    }
  }

</script>
<style type="text/css">
  .error-page {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .error-page .errorWarp {
    margin: 10% auto auto auto;
  }

  .error-page .errorWarp .image {}

  .error-page .errorWarp .title {
    color: #666;
    font-size: 36px;
    padding: 15px 30px;
    margin-bottom: 10px;
    margin-top: 20px;
    font-weight: bold;
  }

  .error-page .errorWarp .desc {
    font-size: 24px;
    color: #474747;
    font-weight: bold;
    line-height: 30px;
  }

  .error-page .errorWarp .backBtn {
    display: inline-block;
    margin-bottom: 20px;
    margin-top: 50px;
    padding: 15px 30px;
    border: 1px solid #999;
    border-radius: 5px;
    cursor: pointer;
  }

</style>
