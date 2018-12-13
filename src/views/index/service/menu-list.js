const menuList = [{
  "id": 1,
  "parentId": null,
  "sort": 0,
  "name": "首页",
  "href": "/index",
  "icon": "fa fa-home",
  "children": [],
  "isShow": "1"
}, {
  "id": 2,
  "parentId": null,
  "sort": 1,
  "name": "一级菜单1",
  "href": "/2",
  "icon": "fa fa-bars",
  "children": [{
    "id": 21,
    "parentId": 31,
    "sort": 0,
    "name": "二级菜单1",
    "href": "/21",
    "icon": "fa fa-bell",
    "children": [{
      "id": 22,
      "parentId": 92,
      "sort": 0,
      "name": "三级菜单1",
      "href": "/test/1/1",
      "icon": "fa fa-bug",
      "children": [],
      "isShow": "1"
    }, {
      "id": 23,
      "parentId": 92,
      "sort": 0,
      "name": "三级菜单2",
      "href": "/test/1/2",
      "icon": "fa fa-area-chart",
      "children": [],
      "isShow": "1"
    }],
    "isShow": "1"
  }],
  "isShow": "1"
}, {
  "id": 3,
  "parentId": null,
  "sort": 3,
  "name": "一级菜单2",
  "href": "/3",
  "icon": "fa fa-download",
  "children": [{
    "id": 31,
    "parentId": 102,
    "sort": 0,
    "name": "二级菜单2",
    "href": "/test/2",
    "icon": "fa fa-image",
    "children": [],
    "isShow": "1"
  }],
  "isShow": "1"
}]
export default () => {
  return new Promise((resolve,reject) => {
    resolve(menuList)
  })
}
