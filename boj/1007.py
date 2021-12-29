from itertools import combinations
from math import sqrt

t = int(input())
for i in range(t):
    ans = 80000000000
    arr = []
    n = int(input())
    selected = [i for i in range(n)]
    for j in range(n): arr.append(list(map(int, input().split())))
    sign = combinations(selected, n // 2)
    for j in sign:
        x, y = 0, 0
        for k in range(n):
            if k in j:
                x += arr[k][0]
                y += arr[k][1]
            else:
                x -= arr[k][0]
                y -= arr[k][1]
        ans = min(ans, pow(x, 2) + pow(y, 2))
    print(sqrt(ans))