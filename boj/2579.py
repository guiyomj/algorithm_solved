n = int(input())
dp = [[0] * 2] * (n + 1)
arr = [0]
for i in range(n): arr.append(int(input()))

if n == 1: print(arr[1])
else:
    dp[1] = [arr[1], 0]
    dp[2] = [arr[2], arr[1] + arr[2]]
    for i in range(3, n + 1):
        dp[i] = [max(dp[i - 2][0], dp[i - 2][1]) + arr[i], dp[i - 1][0] + arr[i]]
    print(max(dp[n]))