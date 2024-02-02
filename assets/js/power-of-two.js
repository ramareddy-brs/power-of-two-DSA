function isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    
    return (n & (n - 1)) === 0;
}


const input = 2;
const result = isPowerOfTwo(input);
console.log(result);  