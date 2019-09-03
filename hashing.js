/******************************************************************************
 * Execution    :   default node            terminal> node hashing.js
 * 
 * Purpose      :   Implementing hashing separate chaining using linked list in every index of
 *                  array of size 11.
 * 
 * @description
 * 
 * @file        :   hashing.js
 * @overview    :   Implementing hashing separate chaining using linked list in every index of
 *                  array of size 11.
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   31-08-2019
*******************************************************************************/
const fs = require('fs');
var read = require('readline-sync');
var hashUtil = require('./utility/hashUtility');
var arr = [];
for(var i =0; i<11; i++)
{
    // var head = new hashUtil.linkedListNode(null);
    arr[i] = new hashUtil.linkedListNode(null);
}

var linkArr = hashUtil.readFile();
var index;
for(var i in linkArr){
    if(!isNaN(linkArr[i])){
        index=linkArr[i]%11;
        arr[index] = hashUtil.add(arr, index, linkArr[i]);
    }
}

var s=read.questionInt("Enter a number to search:");
var r=s%11;
arr[r] = hashUtil.removeElement(arr, r, s);
var str='';
for(i=0;i<11;i++){
    str=str+(hashUtil.printList(arr, i))+"\n";
}
fs.writeFileSync('hashingOutFile.txt',str); 