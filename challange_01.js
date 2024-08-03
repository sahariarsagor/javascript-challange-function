/* The task is : Reverse a number using function
    Sample input: 56242 . 
    Sample output: 24265; 
*/

// Solution of this problem is: 
function reverseValue(n){
    n = n+"";
    let result = n.split("").reverse().join("");
    console.log(result);
}
reverseValue(234);