// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。


function jumpFloorII(number)
{
    //f(n)=f(n-1)+f(n-2)+...+f(1)+1
    //    =f(n-1)+f(n-1)=2f(n-1)
    if(number<=1){
         return 1;
    }else{
        return 2*jumpFloorII(number-1);
    }
    
}