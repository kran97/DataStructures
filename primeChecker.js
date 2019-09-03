/******************************************************************************
 * Execution    :   default node            terminal> node primeChecker.js
 * 
 * Purpose      :   Storing the prime numbers from 0-1000 in a way that first row 
 *                  contains prime numbers from 0-100, second row contains prime 
 *                  numbers from 101-200 and so on.
 * 
 * @description
 * 
 * @file        :   primeChecker.js
 * @overview    :   Storing the prime numbers from 0-1000 in a way that first row 
 *                  contains prime numbers from 0-100, second row contains prime 
 *                  numbers from 101-200 and so on.
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   03-09-2019
*******************************************************************************/

var primeUtil = require('./utility/primeUtility');
var primeArr = new primeUtil.primeChecker();

var lower = 0;
var upper = 100;
for(var i=0; i<10; i++)
{
    primeArr.primePrinter(lower,upper,i)
    lower+=100;
    upper+=100;
}
primeArr.printArray();