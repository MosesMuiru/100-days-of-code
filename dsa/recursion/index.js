// simple recursion for finding the factorial of a number
function fact(num) {
    if (num == 0)
        return 1;
    return num * fact(num - 1);
}
console.log(fact(3));
//
/**v
 * Problem-1
Discuss Towers of Hanoi puzzle.
The Towers of Hanoi is a mathematical puzzle. It consists of three rods (or pegs or
towers) and a number of disks of different sizes which can slide onto any rod. The puzzle starts
with the disks on one rod in ascending order of size, the smallest at the top, thus making a conical
shape. The objective of the puzzle is to move the entire stack to another rod, satisfying the
following rules:
•Only one disk may be moved at a time.
Each move consists of taking the upper disk from one of the rods and sliding it onto
another rod, on top of the other disks that may already be present on that rod.
No disk may be placed on top of a smaller disk.
•
•
Algorithm
•
number of rods = 3
number of disks = 4


•

 */
function towers(n, fromPeg, topeg, auxPeg) {
    if (n == 1) {
        console.log("moved disk 1 from  " + fromPeg + " to " + topeg);
        return;
    }
    // this is move top n-1 disks fromA to B using C auxiliary
    towers(n - 1, fromPeg, auxPeg, topeg);
    // move if th another
    towers(n - 1, auxPeg, topeg, fromPeg);
}
console.log(towers(3, "a", "b", "c"));
// check weather an array is sorted in recursive
var myArra = [1, 3, 6, 4];
function check(arr, index) {
    if (index == arr.length - 1)
        return 1;
    return (arr[index] < arr[index + 1] ? 1 : check(arr, index + 1));
}
console.log(check(myArra, 0));
