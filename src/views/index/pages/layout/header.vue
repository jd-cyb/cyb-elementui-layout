<template>
  <header class="main-header animated" :class="{closeLogo:sidebar.collapsed,mobileLogo:device.isMobile}">
    <a href="#" class="logo">
      <span class="logo-lg">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#cybertron"></use>
        </svg>
        <b>CYB&ElementUI</b>
      </span>
    </a>
    <nav class="navbar">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button" @click.stop.prevent="toggleMenu(!sidebar.collapsed,device.isMobile)">
        <svg aria-hidden="true" class="icon mobile">
          <use xlink:href="#menu"></use>
        </svg>
        <svg aria-hidden="true" class="icon menu-unfold">
          <use xlink:href="#menu-unfold"></use>
        </svg>
        <svg aria-hidden="true" class="icon menu-fold">
          <use xlink:href="#menu-fold"></use>
        </svg>
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <div class="pull-right" style="line-height:50px;padding-right:15px;">
          欢迎你 {{userInfo.name}}
          <a href="#" @click="logout">退出</a>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from "vuex";
  import types from "../../store/mutation-types";
  import auth from "../../common/auth";

  import 'static/svg/layout/menu.svg'
  import 'static/svg/layout/menu-unfold.svg'
  import 'static/svg/layout/menu-fold.svg'

  import 'static/svg/cybertron.svg'

  export default {
    data() {
      return {
        userInfo: {},
        showMessageBox: false,
        showProfileBox: false,
        list: [],
        count: 4,
        show: true
      };
    },
    computed: mapGetters({
      sidebar: "sidebar",
      // userInfo: "userInfo",
      device: "device"
    }),
    methods: {
      toggleMenu(collapsed, isMobile) {
        if (isMobile) {
          this.toggleSidebarShow();
        } else {
          this.toggleSidebar();
        }
      },
      logout() {
        auth.logout();
        this.$router.push({
          path: "/login"
        });
      },
      ...mapMutations({
        toggleSidebar: types.TOGGLE_SIDEBAR,
        toggleSidebarShow: types.TOGGLE_SIDEBAR_SHOW
        // setUserInfo: types.SET_USER_INFO
      }),
      toggleMessage() {
        this.showMessageBox = !this.showMessageBox;
      },
      toggleProfile() {
        this.showProfileBox = !this.showProfileBox;
      },
      autoHide(evt) {
        if (!this.$el.querySelector("li.messages-menu").contains(evt.target)) {
          this.showMessageBox = false;
        }
        if (!this.$el.querySelector("li.user-menu").contains(evt.target)) {
          this.showProfileBox = false;
        }
      }
    },
    created() {
      Object.assign(this.userInfo, JSON.parse(auth.getUserInfo()))
      console.log(this.userInfo)
    },
    mounted() {
      // document.addEventListener('click', this.autoHide, false)
    },
    destroyed() {
      // document.removeEventListener('click', this.autoHide, false)
    }
  };

</script>
<style scoped lang='less'>
  .icon {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1em;
    height: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示 normalize.css 中也包含这行 */
    overflow: hidden;

    &.mobile,
    &.menu-fold,
    &.menu-unfold {
      display: none;
    }
  }

  .animated {
    animation-duration: 0.2s;
  }

  .main-header a {
    text-decoration: none;
    color: #48576a;
  }

  .main-header {
    position: fixed;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
    z-index: 1999;
    animation-name: slideInDown;
    animation-fill-mode: both;
    color: #48576a;
  }

  .main-header .navbar .sidebar-toggle {
    float: left;
    background-color: transparent;
    background-image: none;
    padding: 15px 15px;
    font-family: fontAwesome;
    line-height: 20px;
  }

  .main-header .navbar .sidebar-toggle .menu-unfold {
    display: inline-block;
  }

  .main-header {
    background-color: #ffffff;
  }

  .main-header .logo {
    -webkit-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0 10px;
    font-weight: 300;
    overflow: hidden;
    text-decoration: none;
  }

  .main-header .logo .logo-lg {
    display: block;
    height: 38px;
    line-height: 38px;
    margin-top: 6px;
  }

  .main-header .navbar {
    -webkit-transition: margin-left 0.3s ease-in-out;
    -o-transition: margin-left 0.3s ease-in-out;
    transition: margin-left 0.3s ease-in-out;
    margin-bottom: 0;
    margin-left: 230px;
    border: none;
    min-height: 50px;
    border-radius: 0;
    background-color: #ffffff;
  }

  .layout-top-nav .main-header .navbar {
    margin-left: 0;
  }

  body.hold-transition .main-header .navbar,
  body.hold-transition .main-header .logo {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }

  .main-header .navbar .sidebar-toggle {
    display: block;
  }

  .main-header .navbar .sidebar-toggle:hover {
    background: #f9f9f9;
  }

  .main-header .logo {
    border-bottom: 0 solid transparent;
  }

  @media (max-width: 800px) {
    .main-header .logo {
      display: none;
    }

    .main-header .navbar {
      margin: 0;
    }

    .main-header .logo,
    .main-header .navbar {
      width: 100%;
      float: none;
    }
  }

  .main-header.closeLogo .navbar {
    margin-left: 44px;
  }

  .main-header.closeLogo .logo {
    width: 44px;
    padding: 0 8px;
  }

  .main-header.closeLogo .logo .logo-lg b {
    display: none;
  }

  .main-header.closeLogo .sidebar-toggle {
    background: #f9f9f9;

    .menu-unfold {
      display: none;
    }

    .menu-fold {
      display: inline-block;
    }
  }

  .main-header.mobileLogo .navbar .sidebar-toggle {
    .mobile {
      display: inline-block;

    }

    .menu-unfold {
      display: none;
    }

    .menu-fold {
      display: none;
    }
  }

</style>
