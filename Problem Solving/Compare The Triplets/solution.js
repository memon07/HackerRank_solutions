function compareTriplets(a, b) {
    var alicePoints = ((a[0] > b[0] ? 1 : 0) + ((a[1] > b[1]) ? 1 : 0) + ((a[2] > b[2]) ? 1 : 0))
    var bobPoints = ((a[0] < b[0]) ? 1 : 0) + ((a[1] < b[1]) ? 1 : 0) + ((a[2] < b[2]) ? 1 : 0) 
    return alicePoints + " " + bobPoints
}