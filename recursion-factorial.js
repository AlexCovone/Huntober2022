// You have to create the function factorial that receives n and returns n!. You have to use recursion.
// The value of 0! is 1.

function factorial(n){
    if(n < 2){
        return 1
    }
    return n * factorial(n - 1)
}

// 5 * facotorial(5 - 1)
//  4 * factorial(4 - 1)
//   3 * factorial(3 - 1)
//    2 * factorial(2 - 1) => 2 * 1

// 5 * 4 * 3 * 2 * 1 = 120