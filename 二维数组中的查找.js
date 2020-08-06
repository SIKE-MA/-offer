// 题目描述
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 方法一：暴力查找法
function Find(target, array)
{
    if(array==null){return false}
    let rows = array.length;
    for(let i =0;i<rows;++i){
        for(let j=0,len = array[i].length;j<len;++j){
            if(array[i][j]==target){
                return true
            }
        }
    }
}


// 方法二：每一行二分查找
function find_2(target,arr){
    let start = 0,
        end = arr.length - 1,
        mid = Math.floor((end + start) / 2);
    while(start <= end) {
        if(target < arr[mid]) {
            end = mid - 1;
        } else if(target > arr[mid]) {
            start = mid + 1;
        } else {
            return true;
        }
        mid = Math.floor((end + start) / 2);
    }
    return false
}
function Find(target,array){
    if(array==null){return false}
    let rows = array.length;
    for(let i =0;i<rows;i++){
        if(find_2(target,array[i])){
            return true;
        }
    }
    return false
}


