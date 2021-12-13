from bisect import bisect_left, bisect_right
def search(arr, k):
    mid = 1
    while mid > 0:
        mid = len(arr) // 2
        if k == arr[mid]: return 1
        if k < arr[mid]: 
            arr = arr[:mid]
        if k > arr[mid]: 
            arr = arr[mid :]
    return 0
n = int(input())
lst = sorted(list(map(int, input().split())))
m = int(input())
param = list(map(int, input().split()))
for i in range(m):
    print(search(lst, param[i]))