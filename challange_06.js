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