class Solution {
    public int solution(int n) {
        if (n % 2 != 0) return 0;

        int MOD = 1000000007;
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[2] = 3;

        for (int i = 4; i <= n; i += 2) {
            // 계산에 long 타입을 사용하지 않으면 연산 중 오버플로우 발생
            dp[i] = (int)((3L * dp[i - 2]) % MOD);

            for (int j = i - 4; j >= 0; j -= 2) {
                dp[i] = (int)((dp[i] + 2L * dp[j]) % MOD);
            }
        }

        return dp[n];
    }

    public int solution2(int n) {
        if (n % 2 != 0) return 0;

        int MOD = 1000000007;
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[2] = 3;

        // 누적합 변수 추가
        long sum = dp[0]; // dp[0]만 포함

        for (int i = 4; i <= n; i += 2) {
            dp[i] = (int)((3L * dp[i - 2] + 2L * sum) % MOD);
            sum = (sum + dp[i - 2]) % MOD; // dp[i - 2] 값을 누적
        }

        // 6, 33 + 8 = 41
        // 8, 3*41 + 2 * 15 =

        return dp[n];
    }
}