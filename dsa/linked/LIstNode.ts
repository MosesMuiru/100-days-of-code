class ListNode{
    private data:number;
    private next:ListNode;
    
    constructor(data:number)
    {
        this.data = data
    }

    public setDate(data:number):void
    {
        this.data = data
    }
    public getData():number{
        return this.data;
    }
    //gettting the next
    public setNext(next:ListNode){
        this.next = next;
    }
    //getting the node
    public getNext(){
        return this.next
    }


    


}
export default ListNode;