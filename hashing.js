/******************************************************************************
 * Execution    :   default node            terminal> node hashing.js
 * 
 * Purpose      :   To take input of a word to check if it is palindrome or not using deque
 * 
 * @description
 * 
 * @file        :   hashing.js
 * @overview    :   To take input of a word to check if it is palindrome or not using deque
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
    arr[i] = new hashUtil.linkedListNode();
}

var linkArr = hashUtil.readFile();
var index = [];
for(var i in linkArr)
{
    var index = linkArr[i]%11;
    arr[index].data = linkArr[i];
}
for(var i in arr)
{
    console.log(arr[i]);
}