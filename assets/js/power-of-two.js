function checkPowerOfTwo() {
    var inputNumber = parseInt(document.getElementById('number').value);

    if (inputNumber <= 0) {
        document.getElementById('result').innerText = 'Please enter a positive integer.';
        return;
    }

    // Check if the number is a power of two
    if ((inputNumber & (inputNumber - 1)) === 0) {
        document.getElementById('result').innerText = inputNumber + ' is a power of two.';
    } else {
        document.getElementById('result').innerText = inputNumber + ' is not a power of two.';
    }
}