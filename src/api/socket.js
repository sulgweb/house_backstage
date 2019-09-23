import axios from 'axios';
import Qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true; //配置为true
let baseUrl = "https://egg.weblyff.cn:7001"
const socket = require('socket.io-client')(baseUrl);

class sock {
    //发送公聊
    sendPublicChat(data){
        socket.emit("public chat",data)
    }
}
export {sock,socket}