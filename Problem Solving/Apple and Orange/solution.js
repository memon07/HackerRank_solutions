function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appDist = apples.map(app => app + a)
    let ornDist = oranges.map(orn => orn + b)
    let av = appDist.filter(e => e >= s && e <= t)
    let ov = ornDist.filter(e => e >= s && e <= t)
    console.log(av.length)
    console.log(ov.length)

}