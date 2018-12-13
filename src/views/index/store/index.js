import Cookies from 'js-cookie';
import Vue from "vue";
import Vuex from "vuex";
import types from "./mutation-types";
import ServiceMenuList from "../service/menu-list";
import {
  getCurrentMenu,
  getSessionKey
} from '../common/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,

  getters: {
    loading: state => state.loading,
    menuList: state => state.menuList,
    sidebar: state => state.sidebar,
    device: state => state.device,
    currentMenus: state => state.currentMenus,
  },
  state: {
    loading: false,
    menuList: {},
    sidebar: {
      collapsed: getSessionKey('state.sidebar.collapsed', 'false') === 'true',
      show: getSessionKey('state.sidebar.show', 'true') === 'true',
    },
    device: {
      isMobile: false
    },
    currentMenus: [],
  },
  mutations: {
    //只能同步的函数
    [types.TOGGLE_DEVICE](state, isMobile) {
      state.device.isMobile = isMobile
    },
    [types.TOGGLE_LOADING](state) {
      state.loading = !state.loading
    },
    [types.LOAD_MENU](state, menu) {
      state.menuList = menu;
    },
    [types.LOAD_CURRENT_MENU](state, menu) {
      state.currentMenus = menu;
    },
    [types.TOGGLE_SIDEBAR](state, collapsed) {
      if (collapsed == null) collapsed = !state.sidebar.collapsed;
      state.sidebar.collapsed = collapsed;
      Cookies.set("state.sidebar.collapsed", collapsed)
    },
    [types.TOGGLE_SIDEBAR_SHOW](state, show) {
      if (show == null) state.sidebar.show = !state.sidebar.show;
      else {
        state.sidebar.show = show;
      }
      Cookies.set("state.sidebar.show", state.sidebar.show)
    },
  },
  actions: {
    //异步的函数
    toggleLoading: ({
      commit
    }) => commit(types.TOGGLE_LOADING),
    loadMenuList: ({
      commit
    }) => {
      ServiceMenuList()
        .then((res) => {
          commit(types.LOAD_MENU, res)
        })
    },
    changeCurrentMenu: ({
      state,
      commit
    }, {
      path,
      matched,
      fullPath
    }) => {
      const a = getCurrentMenu(fullPath, state.menuList);
      commit(types.LOAD_CURRENT_MENU, a.reverse());
    }
  }
})

export default store
