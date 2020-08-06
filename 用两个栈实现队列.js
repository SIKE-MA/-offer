// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。



let arr = []
function push(node)
{
    return arr.push(node);
}
function pop()
{
    return arr.length==0?null:arr.shift();
}


