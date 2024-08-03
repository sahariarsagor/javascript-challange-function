/*
    The task is: Convert the first letter of each word of a string in uppercase. 
    Sample input: my name is sahariar sagor. 
    Sample Output: My Name Is Sahariar Sagor. 
*/

// Solution is : 

function convertString(str){
    let array1 = str.split(" ");
    let newArray = [];

    for(s=0; s<array1.length; s++){
        newArray.push(array1[s].charAt(0).toUpperCase() + array1[s].slice(1));
    }
    let result = newArray.join(" ");
    console.log(result);
}

convertString("my name is sahariar sagor");