import * as types from './mutation-types'

/**
 * 切换侧边栏
 */
export const toggleSidebar = ({
  commit
}, opened) => commit(types.TOGGLE_SIDEBAR, opened)

/**
 * 切换设备
 */
export const toggleDevice = ({
  commit
}, device) => commit(types.TOGGLE_DEVICE, device)
