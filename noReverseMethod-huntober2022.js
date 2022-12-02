//Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseString(str){
    let reverseStr = ''
    
    //loop through each char on str argument
    for(let char of str){
        reverseStr = char + reverseStr
    }
    return reverseStr
}

console.log((reverseString('bob')), 'bob')
console.log((reverseString('john')), 'nhoj')
console.log((reverseString('sarah')), 'haras')