import {request} from "./request";

export function login(userName,passWord) {
  return request({
    url:"/login",
    method:'post',
    params:{
      userName,
      passWord
    }
  })
}