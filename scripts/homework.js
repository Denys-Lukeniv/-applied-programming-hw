/* Exercise 1 */
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result; // you return the result where you call it 
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    console.log(`Power ${n} is not supported,
      use an integer greater than 0`);
} else {
    console.log("Result is:${pow(x, n)}" + pow(x, n));
}


/* Exercise 2 */
function isPrime(n) {

    let n = prompt("Enter n")

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime(n));