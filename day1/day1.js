// union types - able to give in i tem more than two types
//though using keyof it gives you option of make sure that the available property can only contain the two property
var update = {
    key: "email",
    value: "moses"
};
function distance(first, second) {
    return Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2));
}
//distance
console.log(distance({ x: 500, y: 5 }, { x: 3, y: 4 }));
console.log("woekd");
//to initialize this you have to implement all the methods in the draggable
// literal type
// this are used to describe the exact type of the value
var measurements = "cm";
var person = "male";
// write a function that receives the number as input and specifies the output of the customer as a date of 
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date };
}
var customer = getCustomer(1);
/// use optional chaining to get the birthday
//this will only give the data when not null
//prints out the date if the input is not null and it also exits
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
//
console.log("datdadafafasfad");
// type NULLISH COAELSCING OPERATOR
var speed = null;
//  
var ride = {
    // if speed is not null the in
    speed: speed !== null ? speed : 30
};
//type accession
//htmlElement
//HTMLInputElement
// TYPE ACCESSION
// -Telling the compiler that i know more about this type than ypu
var enterName = document.getElementById("entername");
if (enterName === null || enterName === void 0 ? void 0 : enterName.value)
    console.log("the neame is nor real");
else
    console.log(enterName === null || enterName === void 0 ? void 0 : enterName.value);
