/*
    The Task is: Find the largest word within a string. 
    Sample input: Sahariar Sagor ;
    Sample Output: Sahariar;
*/

// Solution is: 
function findBigWord(str){
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];

    for(let a = 1; a<array1.length; a++){
        if(result.length < array1[a].length){
            result = array1[a];
        }
    }
    console.log(result);
}

findBigWord("sahariar sagor is a web developer");