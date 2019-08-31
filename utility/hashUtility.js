var read = require('readline-sync');
var fs = require('fs');
class linkedListNode
{
    constructor()
    {
        this.data;
        this.next = null;
    }
}
function readFile()
{
    var arr1 = [];
    var arr = fs.readFileSync('hashNum.txt').toString().split(/[\s,]+/);
    for(var i in arr)
    {
        arr1[i] = parseInt(arr[i]);
    }
    return arr1;
}
module.exports = {
    linkedListNode,
    readFile
}