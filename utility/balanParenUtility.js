var read = require('readline-sync');
var fs = require('fs');
class stackNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function readFile()
{
    var arr = fs.readFileSync('arithmeticExp.txt').toString().split("");
    return arr;
}
function push(head, arr, i)
{
    if(head.data == null)
    {
        head.data = arr[i];
        //console.log(head.data);
    }
    else
    {
        var temp = new stackNode(arr[i]);
        head.next = temp;
        head = temp;
        //console.log(head.data);
    }
    return head;
}
function pop(head)
{
    var temp = head;
    console.log(temp.data)
    //console.log("pop"+temp.data)
    //  if(temp.data == null)
    //  {
    //      console.log("No more '(' braces. Parentheses Unbalanced");
    //      return;
    //  }
     if(temp.next == null && temp!=null)
    {
        console.log("if")
        temp = null;
    }
    else if(temp == null)
     {
         console.log("No more '(' braces. Parentheses Unbalanced");
         return;
     }
    else
    {
        while(temp.next.next != null)
        {
            console.log("While")
            temp = temp.next;
        }
        console.log("outwhile")
        temp.next = null;
    }
    return temp ;
}
function print(current)
{
    while(current!=null)
    {
        console.log(current.data);
        current = current.next;
    }
}
module.exports = {
    stackNode,
    readFile,
    push,
    pop,
    print
}