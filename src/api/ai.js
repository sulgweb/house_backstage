import axios from 'axios';
let baseUrl = "http://egg.weblyff.cn:7001"
//let baseUrl = "http://localhost:7001"
//ai类，与百度ai相关的请求
class Ai{
    //获取appid列表
    async list(data){
        let result = await axios.get(`${baseUrl}/ai/appid`,{
            params:{
                size:data.size,
                page:data.page,
            }
        }).then(res=>{
            return res.data
        });
        return result.data;
    }
    //添加appid
    async addAppid(data){
        let result = await axios.post(`${baseUrl}/ai/appid`,data).then(res=>{
            return res.data
        });
        return result.data;
    }
    //设置appid的状态
    async deleteAppid(data){
        let result = await axios.delete(`${baseUrl}/ai/appid/${data}`).then(res => {
            return res.data
        })
        return result
    }
    //设置appid的状态
    async setStatus(data){
        let result = await axios.put(`${baseUrl}/ai/appid/reset`,data).then(res => {
            return res.data
        })
        return result
    }
    //获取appid请求统计列表
    async getCountList(){
        let result = await axios.get(`${baseUrl}/ai/appid/count`).then(res=>{
            return res.data;
        })
        return result.data
    }
}
const ai=new Ai()
export {ai};