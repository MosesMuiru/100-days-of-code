import ListNode from "./LIstNode";

//getting the length of the node
class Operations{

    //length
    public getLength(headNode:ListNode):number{
       let length:number = 0;
     let  currentNode:ListNode= headNode;
     while(currentNode !== null)
     {
        length++;
        currentNode = currentNode.getNext()

     }
     return length;




    }
    
}