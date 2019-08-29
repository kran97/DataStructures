var read = require('readline-sync');
var fs = require('fs');
class linkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function readFile()
{
    var arr = fs.readFileSync('numberFile.txt').toString().split(" ");
    var arr1=[];
    for(var i in arr)
    {
        arr1[i] = parseInt(arr[i]);
    }
    return arr1;
}
function swap(arr, findex, lindex)
{
    var temp = arr[findex];
    arr[findex] = arr[lindex];
    arr[lindex] = temp;
}
function sort(arr)
{
    var len = arr.length, i, j, stop;
    for(i = 0;i<len; i++)
    {
        for(j=0, stop=len-i; j<stop; j++)
        {
            if(arr[j]>arr[j+1])
            {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}
function inputLinked(head, arr)
{
    for(var i in arr)
    {
        if(head.data == null)
        {
            head.data = arr[0];
        }
        else
        {
            var temp = new linkedListNode(arr[i]);
            head.next = temp;
            head = temp;
        }
    }
    return head;
}
function print(current)
{
    while(current!=null)
    {
        console.log(current.data + "       " + typeof(current.data));
        current = current.next;
    }
}
function userInput()
{
    console.log("Enter a number : ");
    var n = parseInt(read.question(""));
    return n;
}
function searchDelAdd(head, n)
{
    var temp1 = head;
    var del = 0;
    if(head.data === n)
    {
        if(head.next === null)
        {
            head = null;
        }
        else
        {
            head = head.next;
        }
    }
    else
    {
        while(temp1.next!= null)
        {
            if(temp1.next.data == n)
            {
                temp1.next = temp1.next.next;
                del = 1;
                break;
            }
            temp1 = temp1.next;
        }
        if(del!=1)          //if n not found in linked list
        {
            console.log("number not found in linked list. It will be added."); //addition of n if not there already
            var temp3 = head;
            var temp4 = new linkedListNode(n);
            while(temp3.next.data < temp4.data)
            {
                temp3 = temp3.next;
            }
            temp4.next = temp3.next;
            temp3.next = temp4;
        }
    }
    return head;
}
function write(head)
{
    var str = '';
    var temp5 = head;
    while(temp5!=null)
    {
        str = str + temp5.data + ' ';
        temp5 = temp5.next;
    }
    fs.writeFileSync('numberFile.txt', str);
}
module.exports = {
    linkedListNode,
    readFile,
    sort,
    inputLinked,
    print,
    userInput,
    searchDelAdd,
    write
}