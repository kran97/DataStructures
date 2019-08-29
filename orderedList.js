/******************************************************************************
 * Execution    :   default node            terminal> node orderedList.js
 * 
 * Purpose      :   To read input from file and put the number in linked list in ascending order and take innput
 *                  from user to see if the number is there. if yes then delete, else add it to
 *                  list at appropriate position and write it to file.
 * 
 * @description
 * 
 * @file        :   orderedList.js
 * @overview    :   To read input from file and put the words in linked list and take innput
 *                  from user to see if the word is there. if yes then delete, else add it to
 *                  list and write it to file.
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   29-08-2019
*******************************************************************************/

const fs = require('fs');
const read = require('readline-sync');
const orderUtil = require('./utility/orderListUtility');

var arr = orderUtil.readFile();     //unsorted array
var sortArr = orderUtil.sort(arr);  //sorted array
var head = new orderUtil.linkedListNode(null);      //new node
var temp1 = head;                                   //duplicate node pointing to head
temp1 = orderUtil.inputLinked(temp1, sortArr);      //insertion in linked list

var current = head;
orderUtil.print(current);           //printing linked list

var n = orderUtil.userInput();      //taking user number
console.log("changed Linked List : ");
var temp2 = head;
temp2 = orderUtil.searchDelAdd(temp2, n);       //searching and deletion or addition in linked list
orderUtil.print(temp2);
var temp3 = temp2;
orderUtil.write(temp3);