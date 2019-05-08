function miniMaxSum(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    let sum = arr.reduce((prev, curr) => prev + curr);
    console.log(sum - max, sum - min);
}