var read = require('readline-sync');
class deque
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
function userInput()
{
    console.log("Enter the word : ");
    var word = read.question("");
    return word;
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
        var temp = new deque(arr[i]);
        temp1.next = temp;
        temp.prev = temp1;
        temp1 = temp;
        return temp1;
    }
}
function compare(head, temp1)
{
    var flag = 0;
    while(head != temp1)
    {
        if(head.data == temp1.data)
        {
            console.log(head.data, " is same as ", temp1.data);
            head = head.next;
            temp1 = temp1.prev;
            flag = 1;
        }
        else
        {
            flag=0;
            break;
        }
    }
    return flag;
}
function print(current)
{
    console.log("deque : ");
    while(current!=null)
    {
        console.log(current.data);
        current = current.next;
    }
}
module.exports = {
    deque,
    userInput,
    push,
    print,
    compare
}