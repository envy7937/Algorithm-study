#include <stdio.h>
#include <stdlib.h>

// factorial
// n! = n x (n-1) x (n-2) x ... x 2 x 1
int factorial(int n) {
    if (n < 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// 피보나치 수열(Fibonacci Sequence)
// 앞의 2개의 수를 더해 현재의 수를 만들어 가는 수열
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// fib(n): 수열 n번째의 값 = 수열의 (n-1)번째의 값 + 수열의 (n-2)번쨰의 값
// fib(1) = 0번째의 값 = 0
// fib(2) = 1번째의 값 = 1
// fib(n) = fib(n-1) + fib(n-2)
int fibonacci(int n) {
    if (n == 1) {
        return 0;
    }

    if (n == 2) {
        return 1;
    }

    return fibonacci(n -1) + fibonacci(n -2);
}

// 하노이 탑(The Tower of Hanoi)
// A, B, C 3개의 기둥이 있으며, A에 n개의 크기가 다른 원판이 존재
// n개의 원판은 큰 원판이 작은 원판 위에 있을 수 없다.
// 기둥A에 존재하는 n개의 원판을 기둥 C로 옮겨라.

// 1. (n-1)개의 원판을 A->B로 이동
// 2. n번째 원판을 A->C로 이동
// 3. (n-1)개의 원픈을 B->C로 이동 (재귀함수 호출)

// int** initHanoiTower(int n) {
//     // A, B, C 3개의 기둥에 맞는 배열 생성
//     int** arr = (int **)malloc(sizeof(int) * 3);

//     for (int i = 0; i < 3; i++) {
//         arr[i] = (int *)malloc(sizeof(int) * n);
//         for (int j = 0; j < n; j++) {
//             arr[i][j] = 0;
//         }
//     }
//     for (int i = 0; i < n; i++) {
//         arr[0][i] = n - i;
//     }

//     return arr;
// }

void hanoi(int num, char from, char by, char to) {
    if (num == 1) {
        printf("원판(%d) 이동: %c -> %c\n", num, from, to);
    } else {
        // A에 있는 n 보다 작은 원판들을 C를 거쳐 B로 이동
        hanoi(num - 1, from, to, by);
        // A에 있는 n 원판을 C로 이동
        printf("원판(%d) 이동: %c -> %c\n", num, from, to);
        // B에 있는 n 보다 작은 원판들을 A를 거쳐 C로 이동
        hanoi(num - 1, by, from , to);
    }
}

int main() {
    printf("Hello World\n");

    // 5! 을 출력
    int fac = factorial(90);
    printf("1. 팩토리얼 ====================\n");
    printf("5! = %d\n", fac);

    // 피보나치 수열을 20번째까지 출력
    printf("2. 피보나치 ====================\n");
    for(int i = 1; i <= 20; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\n");

    // 4개의 원판이 있는 하노이탑
    printf("3. 하노이탑 ====================\n");
    int num = 4;
    hanoi(num, 'A', 'B', 'C');

    return 0;
}
