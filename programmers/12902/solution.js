// https://school.programmers.co.kr/learn/courses/30/lessons/12902?language=javascript

// 가로 길이가 2이고 세로의 길이가 1인 직사각형 모양의 타일이 있습니다.
// 이 직사각형 타일을 이용하여 세로의 길이가 3이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다.
// 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다

// 제한사항
// 가로의 길이 n은 5,000이하의 자연수 입니다.
// 경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.

// ex) n = 4, result = 11

// f(0) = 1 // 설정
// f(1) = 0
// f(2) = 3
// f(3) = 0
// f(4) = 11, f(4) = 3f(2) + 2
// f(5) = 0
// f(6) = 41, f(6) = 3f(4) + 2f(2) + 2
// f(7) = 0
// f(8) = 153, f(8) = 3f(6) + 2f(4) + 2f(2) + 2

// f(n) = 3f(n-2) + 2f(n-4) + 2f(n-6) + ... + 2f(2) + 2f(0)

function solution(n) {
    // 동적 계획법(Dynamic Programming, DP)을 사용한 풀이
    if (n % 2 !== 0) return 0;

    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[2] = 3;

    for (let i = 4; i <= n; i += 2) {
        dp[i] = 3 * dp[i - 2];

        for (let j = i - 4; j >= 0; j -= 2) {
            dp[i] += 2 * dp[j];
        }

        dp[i] = dp[i] % 1000000007;
    }

    return dp[n];
}

// 처음 풀이 재귀호출
function solutionFirst(n) {
    let list = new Array(n).fill(0);

    for(let i = 1; i <= n; i ++) {
        if (i % 2 === 0) {
            if (i === 2) {
                list[i-1] = 3;
            } else {
                let result = 3 * solution(i-2) + 2;

                if (i >= 4) {
                    for (let j = i-4; j > 0; j = j-2) {
                        result += 2 * solution(j);
                    }
                }

                list[i-1] = result % 1000000007;
            }
        }
    }

    return list[n-1];
}