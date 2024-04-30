// factorial
// n! = n x (n-1) x (n-2) x ... x 2 x 1
const factorial = (n) => {
    if (n < 1) return 1

    return n * factorial(n - 1)
}

// 피보나치 수열(Fibonacci Sequence)
// 앞의 2개의 수를 더해 현재의 수를 만들어 가는 수열
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// fib(n): 수열 n 번째의 값 = 수열의 (n-1)번째의 값 + 수열의 (n-2)번쨰의 값
// fib(1) = 0번째의 값 = 0
// fib(2) = 1번째의 값 = 1
// fib(n) = fib(n-1) + fib(n-2)
const fibonacci = (n) => {
    if (n === 1) return 0
    if (n === 2) return 1

    return fibonacci(n -1) + fibonacci(n -2);
}

const hanoi = (n, from, by, to) => {
    if (n === 1) {
        console.log(`원판(${n}) 이동: ${from} -> ${to}`)
    } else {
        hanoi((n-1), from, to, by)
        console.log(`원판(${n}) 이동: ${from} -> ${to}`)
        hanoi((n-1), by, from, to)
    }
}

const main = () => {
    console.log('팩토리얼')
    console.log(`5! = ${factorial(5)}`)

    console.log('피보나치 수열')
    console.log('피보나치 수열을 20번째 수 까지 출력')
    const fibo = []
    for(let i = 1; i <= 20; i++) {
        fibo.push(fibonacci(i))
    }
    console.log(fibo.toString())

    console.log('하노이탑')
    console.log('4개의 원판')
    hanoi(4, 'A', 'B', 'C')
}

main()
