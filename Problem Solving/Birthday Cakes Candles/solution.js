function birthdayCakeCandles(ar) {
    let max = Math.max(...ar);

    let x = ar.filter(a => a == max)
    return x.length

}