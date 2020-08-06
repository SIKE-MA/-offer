// 题目描述
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n<=39


function Fibonacci(n)
{
    if(n<2) return n
    let arr=[0,1]
    for(let i=2;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[n]
}