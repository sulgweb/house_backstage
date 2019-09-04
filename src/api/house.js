import axios from 'axios';
/* axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true; //配置为true */
const baseUrl = "http://vinceliang.cn/tp5/public/index.php"
//house类，与房子信息相关的请求
class House{
    async list(data={page:1,num:10,key:""}){
        let url = `${baseUrl}/index/Index/showHosue?page=${data.page}&num=${data.num}`
        url = data.key?`${url}&key=${data.key}`:url
        let result = await axios.get(url).then(res=>{
            return res.data
        });
        return result;
    }
}
const house=new House()
export {house};