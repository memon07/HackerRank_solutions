First we will add the location of the tree with the array of distances at which each apples and oranges falls from the tree<br/>

```javascript
let appDist = apples.map(app => app + a)
let ornDist = oranges.map(orn => orn + b)
```

Now with the updated array check if the apples and oranges falls in the range as per the requirnment and return the length of the array

```javascript
let av = appDist.filter(e => e >= s && e <= t)
let ov = ornDist.filter(e => e >= s && e <= t)
console.log(av.length)
console.log(ov.length)
```
