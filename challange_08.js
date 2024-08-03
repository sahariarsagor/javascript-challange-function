// let make a function that should find is target ending i mean we pass one string and one another ending letter as string and check is the ending of string is that letter or not ? this is our challange.  

// Solution: 

function confirmEnding(str, target){
    let ending = str.substring(str.length - target.length);
    console.log(ending === target);
}

confirmEnding("sahariar", "r"); //print true;
confirmEnding("sahariar", "o"); //print  false; 