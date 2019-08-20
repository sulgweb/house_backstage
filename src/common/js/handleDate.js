/*处理时间*/
//格式化时间
class HandleDate{
    //格式化为xxxx-xx-xx xx:xx:xx
    fortmatDate (data) {
        var date = new Date(data) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-'
        var M = date.getMonth()+1 <10 ? `0${date.getMonth()+1}-` : `${date.getMonth()+1}-`
        var D = date.getDate() <10 ? `0${date.getDate()} ` : `${date.getDate()} `
        var h = date.getHours() <10 ? `0${date.getHours()}:` : `${date.getHours()}:`
        var m = date.getMinutes() <10 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`
        var s = date.getSeconds() <10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`
        return Y+M+D+h+m+s
    }
    //格式化为xxxx-xx-xx
    fortmatDay (data) {
        var date = new Date(data) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-'
        var M = date.getMonth()+1 <10 ? `0${date.getMonth()+1}-` : `${date.getMonth()+1}-`
        var D = date.getDate() <10 ? `0${date.getDate()} ` : `${date.getDate()}`
        return Y+M+D
    }
    //格式化为xx:xx:xx
    fortmatTime (data) {
        var date = new Date(data) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var h = date.getHours() <10 ? `0${date.getHours()}:` : `${date.getHours()}:`
        var m = date.getMinutes() <10 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`
        var s = date.getSeconds() <10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`
        return h+m+s
    }
}
const handleDate= new HandleDate()
export default handleDate;
