import axios from 'axios';
//let baseUrl = "http://egg.weblyff.cn:7001"
let baseUrl = "http://localhost:7001"
//ai类，与百度ai相关的请求
class Ai{
    //获取appid列表
    async list(){
        let result = await axios.get(`${baseUrl}/ai/appid`).then(res=>{
            return res.data
        });
        return result;
    }
    //添加appid
    async add(data){
        let result = await axios.post(`${baseUrl}/ai/appid`,data).then(res=>{
            return res.data
        });
        return result;
    }
}
const ai=new Ai()
export {ai};