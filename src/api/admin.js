import axios from 'axios'
let baseUrl = "http://localhost:7001"

class Admin {
    async adminLogin(data){
        let res = await axios.post(`${baseUrl}/admin/login`,data).then(r=>{
            return r
        })
        return res.data
    }
    async addAdmin(data){
        let res = await axios.post(`${baseUrl}/admin/addAdmin`,data).then(r=>{
            return r
        })
        return res.data
    }
}

let admin = new Admin()
export {admin}
