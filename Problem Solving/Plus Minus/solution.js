function plusMinus(arr) {
    var l = arr.length;
    var zero = 0;
    var positive = 0;
    var negative = 0;
    arr.map(a => {
        if (a < 0) return  negative = negative + 1 ;
        if (a == 0) return  zero = zero + 1 ;
        if (a > 0) return positive = positive + 1;

    })
    console.log(positive / l)
    console.log(negative / l)
    console.log(zero / l)

}