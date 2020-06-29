import {request} from "./request";

export function login(userName,passWord) {
  return request({
    url:"/login",
    params:{
      userName,
      passWord
    }
  })
}