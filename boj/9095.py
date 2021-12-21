t = int(input())
for case in range(t):
    n = int(input())
    dp = [0] * 11
    dp[1], dp[2], dp[3] = 1, 2, 4
    if n > 3:
        for i in range(4, n + 1): # 2, 4, 7, 13
            for j in range(1, 4):
                dp[i] += dp[i - j]
    print(dp[n])