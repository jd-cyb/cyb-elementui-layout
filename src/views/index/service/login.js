import auth from '../common/auth'

export function login(params) {
  return new Promise((resolve, reject) => {
    const loginInfo = {
      "userInfo": {
        "id": "355",
        "name": "furic-zhao",
        "nickName": "赵Sir",
        "phone": "13811869208",
        "age": 74,
        "isMale": false,
        "email": "furic@qq.com",
        "createTime": "2018-11-21 15:37:12"
      },
      "sid": "355235239534235"
    }
    auth.login(loginInfo)
    resolve(loginInfo)
  })
}
