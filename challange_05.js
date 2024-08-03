/* is the  string is palindrome or not ?  
we check one string via function. the cleaned str and the reverse string is eqaul value and data types also than we say that 
this string are palindrom. 
as example: string is: ama; 
cleaned string is = ama; 
and reverse string is: ama;
both are equal then we say its a palindrome. thank you here is the example 
*/

//solution of this problem: 
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
