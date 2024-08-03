// we have a function that received a number as a parameter and check is the number prime or not? 

// Solution:

function isPrime(n){
    if(n == 1){
        console.log("this number is not prime");
    }

    if(n == 2){
        console.log("The number is prime");
    }

    for(let i = 2; i<n; i++){
        if(n%i === 0){
            return console.log("This number is not prime");
        } else{
            return console.log("This is prime");
        }
    }


}

isPrime(20);