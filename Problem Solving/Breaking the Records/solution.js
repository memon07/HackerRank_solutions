function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let maxArray = [];
    let minArray = [];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxArray.push(max)
        }
        if (scores[i] < min) {
            min = scores[i]
            minArray.push(min)
        }
    }
    return [maxArray.length,minArray.length]

}
