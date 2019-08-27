const fs = require('fs');
var read = require('readline-sync');
const unorderVar = require('./utility/utility');
class linkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

var inputData = fs.readFileSync('file1.txt', 'utf-8').toString().split(" ");
var head = new linkedListNode(null);
var nHead = head;
for(var i in inputData)
{
    if(nHead.data == null)
    {
        nHead.data = inputData[0];
    }
    else
    {
        var temp = new linkedListNode(inputData[i]);
        nHead.next = temp;
        nHead = temp;
    }
}

var current = head;
while(current!=null)
{
    console.log(current.data);
    current = current.next;
}
var word = read.question("Enter the word : ");
var head2 = head;
while(head2.data === word)
{
    
}