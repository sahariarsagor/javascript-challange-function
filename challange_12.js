// repeating a given string a specified number of times.

// Solution is: 

function repeatedString(str, num){
    if(num<=0){
        console.log(null);
    }

    let repeatString = "";
    for(let i = 0; i<num; i++){
        repeatString = repeatString+str;
    }

    console.log(repeatString);
}

repeatedString("s", 4); // print ssss. 
repeatedString("a", 2); // print aa
repeatedString("d", 0); // print null