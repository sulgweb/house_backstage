/*处理数据*/


/*
**处理与数组相关的数据
*/
class Arr {
    //冒泡排序
    bubblingSort(arr){
        if(arr.length<=1) return arr;
        let flag=false;
        for(let i=0,len=arr.length;i<len;i++){
            for(let j=i;j<len;j++){
                if(arr[i]>arr[j]){
                    let x=arr[i];
                    arr[i]=arr[j];
                    arr[j]=x;
                    flag=true;
                }
            }
            if(!flag){
                break;
            }
        }
        return arr
    }

    //快速排序
    quickSort(arr){
        if(arr.length<=1) return arr;
        let piovt = arr.splice(Math.floor(arr.length/2),1)[0];
        let left=[],right=[];
        for(let i=0,len=arr.length;i<len;i++){
            if(arr[i]<piovt){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return quickSort(left).concat([pivot],this.quickSort(right))
    }
    
    //二分查找(递归写法)
    binarySearch1(data, search, start, end){
        var end = end === undefined ? data.length - 1 : end,
            start = start || 0,
            m = Math.floor((start + end) / 2);
        if(data[m] == search){
            return {
                searchData:search,
                index:m
            };
        }
        if (end <= start) {
            return  {
                searchData:search,
                index:false
            };
        }
        if(search < data[m]){
            return binarySearch(data, search, 0, m-1);
        }else{
            return binarySearch(data, search, m+1, end);
        }
    }

    //二分查找（非递归写法）
    binarySearch2(data, search){
        var h = data.length - 1,l = 0;
        while(l <= h){
            var m = Math.floor((h + l) / 2);
            if(data[m] == search){
                return {
                    searchData:search,
                    index:m
                };
            }
            if(search > data[m]){
                l = m + 1;
            }else{
                h = m - 1;
            }
        }
        return {
            searchData:search,
            index:false
        };
    }
}

/*
**处理与json对象数组有光的数据
*/
class jsonArr{

}

/*
**处理用户数据
*/
class userData{

}

/*
**处理文件数据
*/
class fileData{
    //判断文件类型
    regFile(data, key){
        let judgeTypes=[];
        let allTypes = [".txt", ".doc", ".hlp", ".wps", ".rtf", ".html", ".pdf", ".jpg", ".png", ".gif", ".jpeg", ".rar", ".zip", ".arj", ".gz", ".z", ".wav", ".aif", "au", "mp3", "ram", ".wma", ".mmf", ".amr", ".aac", ".flac",".avi", ".mpg", ".mov", ".swf", ".mp4"];
        let docTypes = [".txt", ".doc", ".hlp", ".wps", ".rtf", ".html", ".pdf"]
        let imageTypes = [".jpg", ".png", ".gif", ".jpeg"];
        let compressTypes = [".rar", ".zip", ".arj", ".gz", ".z"];
        let voiceTypes = [".wav", ".aif", "au", "mp3", "ram", ".wma", ".mmf", ".amr", ".aac", ".flac"];
        let videoTypes = [".avi", ".mpg", ".mov",".swf", ".mp4"];
        switch(key){
            case 0: judgeTypes = allTypes;break;//所有的类型
            case 1: judgeTypes = docTypes; break;//文档类型
            case 2: judgeTypes = imageTypes;break;//图片类型
            case 3: judgeTypes = compressTypes; break;//压缩文件类型
            case 4: judgeTypes = voiceTypes; break;//音频文件类型
            case 5: judgeTypes = videoTypes; break;//视频文件类型
            default: judgeTypes = allTypes;break;
        }
        let regData = data[1].toLowerCase();
        for (let i = 0, len = judgeTypes.length ; i < len;i++) {
            if (regData == judgeTypes[i]) {
                return true;
            }
        }
        return false;
    }
}


