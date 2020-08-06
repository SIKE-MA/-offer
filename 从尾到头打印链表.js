// 题目描述
// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    var arr = [];
    while(head!==null){
        arr.push(head.val);
        head = head.next;
    }
    return arr.reverse();
}



