class bst
{
    constructor()
    {
        //do nothing
    }
    facto(n)
    {
        if(n == 1)
        {
            return 1;
        }
        else
        {
            return n*this.facto(n-1);
        }
    }
}
module.exports = {
    bst
}