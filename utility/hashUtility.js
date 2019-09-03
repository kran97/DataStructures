var read = require('readline-sync');
var fs = require('fs');
class linkedListNode
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.size=0;
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
function add(arr, index, data) 
{ 
    // creates a new node 
    var node = new linkedListNode(data);
    // to store current node 
    var current; 
    // if list is Empty add the 
    // element and make it head 
    if (arr[index] == null) { //head
        arr[index] = node;   //head
        return arr[index];
    }
    else {
        current = arr[index];
        // iterate to the end of the 
        // list 
        while (current.next) { 
            current = current.next; 
        }
        // add node 
        current.next = node;
        return arr[index];
    }
    this.size++; 
    //return current;
}
function removeElement(arr, r, element)
{ 
    var current = arr[r];
    var prev = null;
    // iterate over the list 
    while (current != null) {
        // comparing element with current 
        // element if found then remove the 
        // and return true 
        if (current.data == element) { 
            if (prev == null) {
                arr[r].data = null;
                arr[r] = current.next;
            } else {
                current.data = null;
                prev.next = current.next;
            } 
            this.size--; 
            return arr[r];//prev;//current;//.data;
        } 
        prev = current;
        current = current.next; 
    }
    return -1; 
}
function printList(arr, i) 
    { 
    var curr = arr[i]; 
    let str = ""; 
    while (curr) {
        str += curr.data + " ";
        curr = curr.next;
    } 
    console.log(str); 
    return str;
}
module.exports = {
    linkedListNode,
    readFile,
    add,
    printList,
    removeElement
}