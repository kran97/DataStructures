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
function push(temp1, head, arr, i)
{
    if(head.data == null)
    {
        head.data = arr[i];
        return head;
    }
    else
    {
        var temp = new stackNode(arr[i]);
        temp1.next = temp;
        temp1 = temp;
        return temp1;
    }
}
function pop(head)
{
    var temp = head;
    if(head.data == null)
    {
        console.log("No more '(' braces in stack. Extra ')' are there. Parentheses Unbalanced.");
        return head;
    }
    if(head.next == null && head!=null)
    {
        head.data = null;
        return head;
    }
    else
    {
        while(temp.next.next != null)
        {
            temp = temp.next;
        }
        temp.next = null;
        return temp;
    }
}
function print(current)
{
    console.log("Stack : ");
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