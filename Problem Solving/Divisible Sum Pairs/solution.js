let count = 0;
function divisibleSumPairs(n, k, ar) {
    for (let i = 0; i <= n -1; i++){
        for (let j = i; j <= n - 1; j++){
            if ((ar[i] + ar[j + 1]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}