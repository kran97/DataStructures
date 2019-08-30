/******************************************************************************
 * Execution    :   default node            terminal> node balancedParentheses.js
 * 
 * Purpose      :   To read input from file and check whether the parentheses are
 *                  balanced or not using stack.
 * 
 * @description
 * 
 * @file        :   balancedParentheses.js
 * @overview    :   To read input from file and check whether the parentheses are
 *                  balanced or not using stack.
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   29-08-2019
*******************************************************************************/

const fs = require('fs');
const read = require('readline-sync');
const balperUtil = require('./utility/balanParenUtility');

var exp = balperUtil.readFile();        //reading expression in exp


var head = new balperUtil.stackNode(null);
var temp1 = head;
for(var i in exp)
{
    if(exp[i] == '(')
    {
        temp1 = balperUtil.push(temp1, head, exp, i);    //pushing '(' in stack
    }
    else if(exp[i] == ')')
    {
        temp1 = balperUtil.pop(head);               //popping '(' from stack when ')' comes
    }
}
var current = head;
balperUtil.print(current);
if(head.data == null)
{
    console.log("Parentheses are balanced AF.");
}
else
{
    console.log("Parentheses are not balanced.");
}