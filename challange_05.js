/* is the  string is palindrome or not ?  */


function isPalindrome(str){
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverseStr = cleanedStr.split('').reverse().join('');

    //conditional statement: 
    if(cleanedStr === reverseStr){
        console.log("This string is a palindrome.");
    } else {
        console.log("This string is not a palindrome.");
    }
}

isPalindrome("A man, a plan, a canal, Panama");