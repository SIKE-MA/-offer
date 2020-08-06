// 题目描述
// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？


function rectCover(number)
{
    const arr=[0,1,2]
    for(let i=3;i<=number;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[number]
}