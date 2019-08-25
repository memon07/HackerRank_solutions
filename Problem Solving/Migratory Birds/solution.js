function migratoryBirds(arr) {
    const numMap = {};
    var maxNum = 0;
    var maxChar = 0;
    for (var i of arr) {
        if (numMap[i]) {
            numMap[i]++;
        } else {
            numMap[i] = 1;
        }
    }
    for (var i in numMap) {
        if (numMap[i] > maxNum) {
            maxNum = numMap[i];
            maxChar = i;
        }
    }
    return maxChar;
}
