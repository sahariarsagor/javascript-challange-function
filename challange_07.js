// find the largest number from an array and print this array . let try it and give me a feedback . thank you . 


//the solution is: 
function largestOfFour(arr){
    let largestArray = [];
    for(let i =0; i< arr.length; i++){
        let largest = Math.max(...arr[i]);
        largestArray.push(largest);
    }

    console.log(largestArray);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);