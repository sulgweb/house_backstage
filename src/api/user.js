import axios from "axios"
const baseUrl = "http://vinceliang.cn/tp5/public/index.php"

class User {
    //获取用户列表
    async getUserList(data){
        let res = await axios.get(`${baseUrl}/user/User/showUser`,{
            params:{
                num:1000
            }
        }).then(res=>{
            return res.data;
        })
        return res
    }
}

const user = new User()
export {user}