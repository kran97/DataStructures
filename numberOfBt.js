/******************************************************************************
 * Execution    :   default node            terminal> node numberOfBt.js
 * 
 * Purpose      :   To enter the number of nodes of tree and find out possible combinations of
 *                  binary search tree.
 * 
 * @description
 * 
 * @file        :   numberOfBt.js
 * @overview    :   To enter the number of nodes of tree and find out possible combinations of
 *                  binary search tree.
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   31-08-2019
*******************************************************************************/

var read = require('readline-sync');
var numBstUtil = require('./utility/numBtUtility');
try{
    var n = parseInt(read.question("Enter number of nodes : "));
    if(n<=0) throw 'Nodes cannot be less than or equal to zero.'
    //if(typeof(n)!= 'number') throw 'Input should be a number'
    else
    {
        var numBst = new numBstUtil.bst();
        var num = (numBst.facto(2*n))/(numBst.facto(n+1)*numBst.facto(n));
        console.log("Number of possible BSTs are ",num);
    }
}
catch(err)
{
    console.log(err);
}