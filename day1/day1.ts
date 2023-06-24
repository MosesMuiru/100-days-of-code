// union types - able to give in i tem more than two types

//narrowing - able to specify type so as you can perfom various tasks that are done in that

//create a function called weight
//if weight is anumber multiply by two

// function myWeight(weight:number | string):number{
//     if( typeof weight ===  number) console.log("this is a nmber")ds
//     else console.log("this is a string");
// }

//using key of 
interface SignUpForm {
    email :string;
    name:string
}

// you want this interface to contain the tyype of sighup
interface ActionPayload{
    key: keyof SignUpForm;
    value:string

}
//though using keyof it gives you option of make sure that the available property can only contain the two property
const update:ActionPayload = {
    key: "email",
    value: "moses"
}

//make a function that contains the only x and y use branded types
type point2d =  {
    x:number;
    y:number;
}

function distance(first:point2d,second:point2d){
    return Math.sqrt(
        Math.pow(first.x - second.x,2) + Math.pow(first.y - second.y,2)
    )
}
//distance
console.log(distance({x:500,y:5},{x:3,y:4}))
console.log("woekd")
// this is another 
// there is use of intersection type 

type draggable={
    enable:true;
}
type screen ={
    x:true
}

// an intersection
type ui = draggable & screen;

//to initialize this you have to implement all the methods in the draggable

// literal type

// this are used to describe the exact type of the value

let measurements:"cm"|"km" = "cm";

type gender = "male" | "female";

let person:gender = "male";

// optional chaining
type Customer = {
    birthday:Date
}

// write a function that receives the number as input and specifies the output of the customer as a date of 
function getCustomer(id:number):Customer | null | undefined{
    return id === 0 ? null : { birthday:new Date}
}

let customer = getCustomer(1)
/// use optional chaining to get the birthday
//this will only give the data when not null
//prints out the date if the input is not null and it also exits

console.log(customer?.birthday.getFullYear())

//
console.log("datdadafafasfad")
    // type NULLISH COAELSCING OPERATOR
let speed:number | null = null;
//  
let ride = {
    // if speed is not null the in
    speed: speed !== null ? speed : 30
}

//type accession
//htmlElement
//HTMLInputElement


// TYPE ACCESSION
// -Telling the compiler that i know more about this type than ypu

let enterName =<HTMLInputElement> document.getElementById("entername") as HTMLInputElement;
if(enterName?.value) console.log("the neame is nor real")
else console.log(enterName?.value)

// instanceof - get if the a type exists in that document

never
