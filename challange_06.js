/* Find the factorial of a number the logic of a factorial is: 
    the factorial of 5 = 1*2*3*4*5
    the factorial of 4 = 1*2*3*4
this is the logic to calculate a factorial .     
*/

// Soution is: 
function factorial(num){
    //conditional statement 
    if(num === 0){
        console.log(1);
    }

    let result = 1; 
    // let run a loop 
    for(let i=1; i<=num; i++){
        result*=i;
    }
    console.log(result);
}

factorial(5);