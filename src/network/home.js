import {request} from "./request";

export function getUpdateRecords(){
    return request({
        url:"/home/getUpdateRecords"
    })
}