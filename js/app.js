function start() {
    let input = +prompt("Nhập vào số cần tìm. Vui lòng không nhập ký tự");
    let result = isFibonacci(input);
    if (result) {
        return alert("Đây là số trong dãy Fibonacci")
    }
    return alert("Đây không phải là số trong dãy Fibonacci")
}


function isFibonacci(number) {
    let fibonacciFirst = 0;
    let fibonacciSecond = 1;
    let fibonacciN = 0;

    if (number < 1) {
        return false;
    }
    if (number === 1) {
        return true;
    }
    while (fibonacciN <= number) {
        fibonacciN = fibonacciFirst + fibonacciSecond;
        fibonacciFirst = fibonacciSecond;
        fibonacciSecond = fibonacciN;
        if (fibonacciN === number) {
            return true;
        }
    }
    return false;
}