/* The Challange is: Return a passed string with letter in alphabetical order.
    Sample input: Sahariar;
    Sample output: aaahirs;
*/

// Solution is: 

function alphabeticalOrder(str){
    let result = str.split("").sort().join("");
    console.log(result);
}

alphabeticalOrder("sahariar");