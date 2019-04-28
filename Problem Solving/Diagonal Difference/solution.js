solution (a)
function diagonalDifference(arr) {

    let ld = 0
    let rd = 0
    let n = arr.length

    for (var i = 0, j = n - 1; i < n; i++ , j--) {
        ld += arr[i][i]
        rd += arr[i][j]
    }
    return Math.abs(ld - rd)
}

solution (b)
function diagonalDifference(arr) {

    let ld = 0
    let rd = 0
    let n = arr.length

    for (var i = 0; i < n; i++) {
        ld += arr[i][i]
        rd += arr[i][n-1 - i]
    }
    return Math.abs(ld - rd)
}
