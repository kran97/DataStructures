/******************************************************************************
 * Execution    :   default node            terminal> node unorderedList.js
 * 
 * Purpose      :   To read input from file and put the words in linked list and take innput
 *                  from user to see if the word is there. if yes then delete, else add it to
 *                  list and write it to file.
 * 
 * @description
 * 
 * @file        :   unorderedList.js
 * @overview    :   To read input from file and put the words in linked list and take innput
 *                  from user to see if the word is there. if yes then delete, else add it to
 *                  list and write it to file.
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   28-08-2019
*******************************************************************************/

const fs = require('fs');
var read = require('readline-sync');
//const unorderVar = require('./utility/utility');
class linkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

var inputData = fs.readFileSync('file1.txt').toString().split(" "); //reading file in array
console.log(inputData);
var head = new linkedListNode(null);
var nHead = head;
for(var i in inputData)     //taking file input in linked list
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

var current = head;     //print file elements in linked list
while(current!=null)
{
    console.log(current.data);
    current = current.next;
}
var word = read.question("Enter the word : ");
var temp1 = head;           //for searching and deletion of word
var del = 0;
if(head.data === word)
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
        if(temp1.next.data == word)
        {
            temp1.next = temp1.next.next;
            del = 1;
            break;
        }
        temp1 = temp1.next;
    }
    if(del!=1)          //if word not found in linked list
    {
        console.log("word not found in linked list. It will be added."); //addition of word if not there already
        var temp3 = head;
        var temp4 = new linkedListNode(word);
        while(temp3.next != null)
        {
            temp3 = temp3.next;
        }
        temp3.next = temp4;
    }
}

console.log("Changed linked list : ");
var current1 = head;     //print file elements in linked list
while(current1!=null)
{
    console.log(current1.data);
    current1 = current1.next;
}

var str = '';
var temp5 = head;
while(temp5!=null)
{
    str = str + temp5.data + ' ';
    temp5 = temp5.next;
}
fs.writeFileSync('file1.txt', str);