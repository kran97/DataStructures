/******************************************************************************
 * Execution    :   default node            terminal> node balancedParentheses.js
 * 
 * Purpose      :   To take input of a word to check if it is palindrome or not using deque
 * 
 * @description
 * 
 * @file        :   balancedParentheses.js
 * @overview    :   To take input of a word to check if it is palindrome or not using deque
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   31-08-2019
*******************************************************************************/

var read = require('readline-sync');
var palinUtil = require('./utility/palinUtility');

var word = palinUtil.userInput();
var arr = word.split("");
var head = new palinUtil.deque(null);
var temp1 = head;
for(var i in arr)
{
    temp1 = palinUtil.push(temp1, head, arr, i);
}
var flag = palinUtil.compare(head, temp1);
if(flag==1)
{
    console.log(word," is a palindrome.");
}
else
{
    console.log("Not a palindrome");
}