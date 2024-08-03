// our function received a string as a parameter and check how many vowel and count this vowel and print this vowel. this is a simple problem 

// Solution: 

function vowelCount(str){
    let vowel = "aeiouAEIOU";
    let count = 0;

    for(let i = 0; i<str.length; i++){
        if(vowel.indexOf(str[i]) !== -1){
            count++;
        }
    }
    console.log(count);
}

vowelCount("sahariar");